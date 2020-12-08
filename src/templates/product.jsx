// import React from 'react'
// import { graphql } from 'gatsby'
// import { Link as GatsbyLink } from 'gatsby'
// import { Layout } from '../components'
// import Wrapper from '../components/Wrapper'
// import PageTitle from '../components/PageTitle'
// import PageSubTitle from '../components/PageSubTitle'
// import SlicesEngine from '../components/Slices/engine'
// import RelatedAds from '../components/Slices/RelatedAds'
// import { Button } from '@chakra-ui/react'
// import SEO from '../components/SEO'

// const ProductTpl = (props) => {
//   const { posts, prismicProduct, nav, products, settings } = props.data
//   return (
//     <Layout nav={nav.data.nav} settings={settings}>
//       <SEO
//         title={`${prismicProduct.data.seo_title ? prismicProduct.data.seo_title : ''}`}
//         pathname={prismicProduct.data.uid ? post.data.uid : '/'}
//         desc={prismicProduct.data.seo_description ? prismicProduct.data.seo_description.text : ''}
//         node={prismicProduct}
//         banner={prismicProduct.data.sharing_image ? prismicProduct.data.sharing_image.url : null}
//         article
//       />
//       <Wrapper>
//         <Button
//           variant='outline'
//           my='2rem'
//           size='sm'
//           to='../'
//           as={GatsbyLink}>← Retour</Button>
//         <PageTitle>{prismicProduct.data.title.text}</PageTitle>
//         {prismicProduct.data.body ? <SlicesEngine slices={prismicProduct.data.body} posts={posts} products={products ? producs : []} /> : null}
//         <PageSubTitle>
//           Nos bateaux actuellement en stock :
//         </PageSubTitle>
//         <RelatedAds modelID={ prismicProduct.data.wb_api_id } />
//       </Wrapper>
//     </Layout>
//   )
// }

// export default ProductTpl

// export const postQuery = graphql`
// query ProductQuery($uid: String!) {
//     prismicProduct(uid: {eq: $uid}) {
//       uid
//       first_publication_date
//       last_publication_date
//       id
//       href
//       uid
//       data {
//         title {
//           html
//           text
//         }
//         wb_api_id
//         sub_title
//         main_info
//         image {
//           url
//         }
//       body{
//         ... on PrismicProductBodyBannerWithCaption {
//             primary {
//               image_banner {
//                 alt
//                 copyright
//                 url
//               }
//               title_of_banner{
//                 text
//               }
//               description {
//                 html
//                 text
//               }
//               button_link {
//                 id
//                 isBroken
//                 lang
//                 link_type
//                 slug
//                 target
//                 type
//                 uid
//                 url
//               }
//               button_label {
//                 html
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//     posts: allPrismicPost{
//       edges{
//         node{
//           href
//           uid
//           data{
//             date(formatString: "DD.MM.YYYY")
//             title {
//               text
//             }
//           }
//         }
//       }
//     }
//     settings:prismicSettings {
//       data {
//           site_name
//           footer_link {
//               uid
//           }
//           footer_link_label
//       }
//     }
//     nav:prismicNav {
//       data {
//           nav {
//               ... on PrismicNavNavNavItem {
//                   primary {
//                       label {
//                           text
//                       }
//                       link {
//                           uid
//                           document {
//                               ... on PrismicPage {
//                                   uid
//                                   data{
//                                       parent{
//                                           uid
//                                       }
//                                   }
//                               }
//                           }
//                       }
//                   }
//                   items {
//                       sub_nav_link {
//                           uid
//                           document {
//                               ... on PrismicPage {
//                                   uid
//                                   data{
//                                       parent{
//                                           uid
//                                       }
//                                   }
//                               }
//                           }
//                       }
//                       sub_nav_link_label {
//                           text
//                       }
//                   }
//               }
//           }
//       }
//   } 
// }
// `