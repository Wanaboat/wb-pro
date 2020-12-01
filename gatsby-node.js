const _ = require('lodash')
const redirects = require('./src/urlsMigrations/deriveursServices.js')
var fs = require('fs');



// import redirects from './src/urlsMigrations/deriveursServices'

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const homeTemplate = require.resolve('./src/templates/homepage.jsx')
  createPage({
    path: `/`,
    component: homeTemplate,
    context: {
      // uid: edge.node.uid,
    },
  })

  const adsListTemplate = require.resolve('./src/templates/ads-summary.jsx')
  createPage({
    path: `/bateaux/occasions-2/`,
    component: adsListTemplate,
    context: {
      // uid: edge.node.uid,
    },
  })
  var paths = []


  const buildPageSlug = (node) => {

    let slug = []
    if (node.uid){
        slug.push( node.uid)
        // node.data.parent.document[0].data.parent.uid
        if (node.data.parent ){
            slug.push( node.data.parent.uid )
            if( node.data.parent.document[0].data.parent ){
              slug.push( node.data.parent.document[0].data.parent.uid )
              if( node.data.parent.document[0].data.parent.document[0].data.parent ){
                slug.push( node.data.parent.document[0].data.parent.document[0].data.parent.uid )
                if( node.data.parent.document[0].data.parent.document[0].data.parent.document[0].data.parent ){
                  slug.push( node.data.parent.document[0].data.parent.document[0].data.parent.document[0].data.parent.uid )
                }
              }
            }
            //  if (node.data.parent.data.document[0]){
            //  slug.push( node.data.parent.document[0].data.parent.uid )
            //     if (node.data.parent.document.data.parent.document.data.parent.document){
            //         slug.push( node.data.parent.document.data.parent.document.data.parent.document.uid)
            //     }
            //  }   
        }
    }
    // slug.push( langSlugConverter(node.lang) )
    var uri = slug.reverse().join('/')
    paths.push({
      "prismicID":`${node.prismicId}`,
      "path": uri
    })
    console.log( uri )
    return ( uri )
}


//   const { createRedirect } = actions;
//   redirects.forEach(element => {
//     if (element.in && element.out) {
//       createRedirect({
//         fromPath: element.in,
//         toPath: element.out,
//         statusCode: 200,
//       })
//     }

//   });
//   createRedirect({
//     fromPath: "/redirect-test/",
//     toPath: "/",
//     statusCode: 200,
//   })

//   const postTemplate = require.resolve('./src/templates/post.jsx')
//   const pageTemplate = require.resolve('./src/templates/page.jsx')
//   const productTemplate = require.resolve('./src/templates/product.jsx')
//   const adTemplate = require.resolve('./src/templates/ad.jsx')


const settings = await wrapper(
  graphql(`
    {
      prismicSettings {
        data {
          site_name
          footer_link {
            uid
            url
          }
          footer_link_label
          blog_archive_page{
            uid
            url
            id
          }
        }
      }
    }
`)
)

const blogArchivePage = settings.data.prismicSettings.data.blog_archive_page

const postsQuery = await wrapper(
  graphql(`
    {
      allPrismicPost {
        pageInfo {
          currentPage
          totalCount
          perPage
          pageCount
          itemCount
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
)
const postTemplate = require.resolve('./src/templates/post.jsx')
const archiveTemplate = require.resolve('./src/templates/archive.jsx')
const postsList = postsQuery.data.allPrismicPost.edges;
const paginationInfos = postsQuery.data.allPrismicPost.pageInfo;

for (let index = 0; index < paginationInfos.pageCount; index++) {

  createPage({
    path: index === 0 ? `/${blogArchivePage.uid}` : `/${blogArchivePage.uid}/page-${index}`,
    component: archiveTemplate,
    context: {
      page: index,
      // uid: edge.node.uid,
    },
  })

}

postsList.forEach((edge) => {
  createPage({
    path: `/blog/${edge.node.uid}`,
    component: postTemplate,
    context: {
      // Pass the unique ID (uid) through context so the template can filter by it
      uid: edge.node.uid,
    },
  })
})

  const pagesQuery = await wrapper(
    graphql(`
      {
        allPrismicPage {
          edges {
            node {
              id
              prismicId
              uid
              data{
                parent{
                  uid
                  document{ ... on PrismicPage{ data{ parent{ uid
                    document{ ... on PrismicPage{ data{ parent{ uid
                      document{ ... on PrismicPage{ data{ parent{ uid
                        document{ ... on PrismicPage{ data{ parent{ uid
                        }}}}
                      }}}}
                    }}}}
                  }}}}
                }
              }
            }
          }
        }
      }
    `)
  )
  const pageTemplate = require.resolve('./src/templates/page.jsx')
  const pagesList = pagesQuery.data.allPrismicPage.edges
  pagesList.forEach((edge) => {
    if( edge.node.uid !== blogArchivePage.uid){
      if( edge.node.uid === 'histoire-du-f18' ){
        buildPageSlug( edge.node )
      }

      createPage({
        // path: !edge.node.data.parent ? `${edge.node.uid}` : `${edge.node.data.parent.uid}/${edge.node.uid}`,
        path: buildPageSlug( edge.node ),
        component: pageTemplate,
        context: {
          uid: edge.node.uid,
          prismicId: edge.node.prismicId
        },
      })
    }
  })


  const productsQuery = await wrapper(
    graphql(`
      {
        allPrismicProduct {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  )
  const productTemplate = require.resolve('./src/templates/product.jsx')
  const productsList = productsQuery.data.allPrismicProduct.edges
  productsList.forEach((edge) => {
    createPage({
      path: `${process.env.PRODUCT_BASE_SLUG}/${edge.node.uid}`,
      component: productTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  console.log( paths )

  fs.writeFile('./paths.js', `export const URIs=${JSON.stringify( paths )};`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


//   const adsQuery = await wrapper(
//     graphql(`
//       {
//         allContentfulAd(filter: {userId: {eq: 14}}) {
//           edges {
//             node {
//               userId
//               node_locale
//               slug
//               name
//               contentful_id
//             }
//           }
//         }
//       }
//     `)
//   )

//   const adsList = adsQuery.data.allContentfulAd.edges
//   adsList.forEach((edge) => {
//     // console.log( edge.node )
//     if (edge.node.userId === 14 && edge.node.node_locale === 'fr') {
//       createPage({
//         path: `${process.env.PRODUCT_BASE_SLUG}/${process.env.ADS_BASE_SLUG}/${edge.node.contentful_id}`,
//         component: adTemplate,
//         context: {
//           uid: edge.node.uid,
//           contentful_id: edge.node.contentful_id
//         },
//       })
//     }
//   })


}

