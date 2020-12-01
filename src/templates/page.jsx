import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout2'
import SlicesEngine from '../components/Slices/engine'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'
import Breadcrumbs from '../components/Breadcrumbs'
// import usePreviewData from '../utils/usePreviewData'
const Page = ( { data, location } ) => {
  // const liveData = usePreviewData( data )
  const { nav, prismicPage, settings, posts, products } = data
  console.log( prismicPage )
  console.log( prismicPage.data.parent )
  // const { page, nav, posts, products, settings } = data
  // const liveData = usePreviewData(data)
  // console.log( 'livet data', liveData )
  return(
    <Layout nav={ nav.data.nav } settings={ settings }>
       <SEO
        title={`${prismicPage.data.title.text}`}
        pathname={prismicPage.data.uid ? page.data.url : '/'}
        desc={ prismicPage.data.seo_description ? prismicPage.data.seo_description.text : ''}
        node={prismicPage}
        banner={ prismicPage.data.sharing_image.url }
        article
      />
      <Wrapper>
        <Breadcrumbs data={ prismicPage } />
        <PageTitle>{ prismicPage.data.title.text }</PageTitle>
        { prismicPage.data.body ?
          <SlicesEngine
            slices={ prismicPage.data.body }
            posts={ posts }
            products={ products }
          />
        : null}
      </Wrapper> 
    </Layout>
  )
}
// export default withPreview( Page )
export default Page

export const pageQuery = graphql`
  query PageQuery($uid: String!)
  {
    prismicPage(uid: {eq: $uid}) {
      uid
      first_publication_date
      last_publication_date
      prismicId
      data {
        parent{
          document{ prismicId ... on PrismicPage{ data{ short_name parent{ uid
            document{ prismicId ... on PrismicPage{ data{ short_name parent{ uid
              document{ prismicId ... on PrismicPage{ data{ short_name parent{ uid
                document{ prismicId ... on PrismicPage{ data{ short_name parent{ uid
              
                }}}}
              }}}}
            }}}}
          }}}}
        }
        title {
          text
        }
        seo_description {
          text
        }
        seo_title
        sharing_image {
          url
        }
        body {
          __typename
          ... on PrismicPageBodyText {
            id
            primary {
              text {
                html
                text
              }
            }
          }
          
          ... on PrismicPageBodyAdsList {
            primary{
              link_to_contact{
                id
                isBroken
                lang
                link_type
                slug
                target
                type
                uid
                url
              }
              side_text{
                html
                text
              }
            }
          }
          ... on PrismicPageBodyMap {
            primary {
              location {
                latitude
                longitude
              }
              address {
                html
                text
              }
            }
          }
          ... on PrismicPageBodyBannerWithCaption {
            primary {
              image_banner {
                alt
                copyright
                url
              }
              description {
                html
                text
              }
              button_link {
                url
              }
              button_label {
                html
                text
              }
            }
          }
          ... on PrismicPageBodyBannerWithCaption {
            primary {
              image_banner {
                alt
                copyright
                url
              }
              description {
                html
                text
              }
              button_link {
                url
              }
              button_label {
                html
                text
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost{
      edges{
        node{
          href
          uid
          data{
            date(formatString: "DD.MM.YYYY")
            title {
              text
            }
          }
        }
      }
    }
    products: allPrismicProduct {
      edges {
        node {
          id
          href
          uid
          data {
            title {
              text
            }
            sub_title
            main_info
            image {
              url
              #thumbnails{
              #  square_sm {
              #    alt
              #    copyright
              #    url
              #  }
              #  square_lg {
              #    alt
              #    copyright
              #    url
              #  }
              #}
            }
          }
        }
      }
    }
    settings:prismicSettings {
      data {
          site_name
          footer_link {
              uid
          }
          footer_link_label
      }
    }
    nav:prismicNav {
      data {
        nav {
          ... on PrismicNavNavNavItem {
            primary {
              label {
                text
              }
              link {
                uid
                document {
                  ... on PrismicPage {
                    uid
                    prismicId
                    data{
                      parent{
                        uid
                      }
                    }
                  }
                }
              }
            }
            items {
              sub_nav_link {
                uid
                document {
                  ... on PrismicPage {
                    uid
                    prismicId
                    data{
                      parent{
                        uid
                      }
                    }
                  }
                }
              }
              sub_nav_link_label {
                text
              }
            }
          }
        }
      }
    }
}
`




// #prismicPage: prismicPage(uid: { eq: $uid }) {
//   #  uid
//   #  first_publication_date
//   #  last_publication_date
//   #  data {
//   #    title {
//   #      text
//   #    }
//   #    seo_description{
//   #      text
//   #    }
//   #    seo_title
//   #    sharing_image{
//   #      url
//   #    }
//   #    body {
//   #      __typename
//   #      ... on PrismicPageBodyAdsList {
//   #        id
//   #        primary{
//   #          link_to_contact{
//   #        id
//   #        isBroken
//   #        lang
//   #        link_type
//   #        slug
//   #        target
//   #        type
//   #        uid
//   #        url
//   #      
//   #          }
//   #          side_text{
//   #            html
//   #            text
//   #          }
//   #        }
//   #      }
//   #      ... on PrismicPageBodyMap {
//   #        primary {
//   #          location {
//   #            latitude
//   #            longitude
//   #          }
//   #          address {
//   #            html
//   #            text
//   #          }
//   #        }
//   #      }
//   #      ... on PrismicPageBodyBannerWithCaption {
//   #        primary {
//   #          image_banner {
//   #            alt
//   #            copyright
//   #            url
//   #          }
//   #          description {
//   #            html
//   #            text
//   #          }
//   #          button_link {
//   #            url
//   #          }
//   #          button_label {
//   #            html
//   #            text
//   #          }
//   #        }
//   #      }
//   #      ... on PrismicPageBodyText {
//   #        id
//   #        primary {
//   #          text {
//   #            html
//   #            text
//   #            raw {
//   #              text
//   #              type
//   #            }
//   #          }
//   #        }
//   #      }
//   #    }
//   #  }
//   #}