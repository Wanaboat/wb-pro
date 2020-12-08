// import React from 'react'
// import { graphql } from 'gatsby'
// import { Link as GatsbyLink } from 'gatsby'
// import Wrapper from '../components/Wrapper'
// import Layout from '../components/Layout2'
// import SEO from '../components/SEO'
// import { Box, Button, Heading } from '@chakra-ui/react'
// import SlicesEngine from '../components/slices/engine'
// import PageTitle from '../components/PageTitle'
// // import usePreviewData from '../utils/usePreviewData'


// const Post = ({ data }) => {
//   // const liveData = usePreviewData( data )
//   const liveData = data 

//   const { prismicPost, posts, nav, settings } = liveData
//   return (
//     <Layout nav={ nav.data.nav } settings={ settings }>
//       <SEO
//         title={`${prismicPost.data.title.text}`}
//         pathname={prismicPost.data.uid ? post.data.uid : '/'}
//         desc={prismicPost.data.seo_description.text}
//         banner={ prismicPost.data.sharing_image.url }
//         node={prismicPost}
//         article
//       />
//       <Wrapper>
//         <Box
//           my='2rem'
//         >
//           <Button
//             variant='outline'
//             size='sm'
//             to='../'
//             as={ GatsbyLink }>← Retour</Button>
//         </Box>
//         <PageTitle>{prismicPost.data.title.text}</PageTitle>
//         {/* <SlicesEngine slices={prismicPost.data.body} posts={ posts ? posts : [] } /> */}
//       </Wrapper>
//     </Layout>
//   )
// }
// export default Post


// export const postQuery = graphql`
//   query PostQuery($uid: String!) {
//     prismicPost(uid: { eq: $uid }) {
//       uid
//       first_publication_date
//       last_publication_date
//       data {
//         title {
//           html
//           text
//         }
//         seo_description{
//           text
//         }
//         seo_title
//         sharing_image{
//           url
//         }
//         body {
//           __typename
//           ... on PrismicPostBodyVideo{
//             primary{
//               youtube_link {
//                 version
//                 thumbnail_height
//                 provider_url
//                 type
//                 title
//                 author_url
//                 height
//                 author_name
//                 html
//                 provider_name
//                 width
//                 thumbnail_url
//                 thumbnail_width
//                 embed_url
//               }
//             }
//           }
//           ... on PrismicPostBodyImageGallery {
//             primary {
//               name_of_the_gallery {
//                 text
//               }
//             }
//             items {
//               gallery_image {
//                 url
//                 copyright
//                 alt
//                 dimensions {
//                   height
//                   width
//                 }
//               }
//               image_captions {
//                 html
//                 text
//               }
//             }
//           }
//           ... on PrismicPostBodyBannerWithCaption {
//             primary {
//               image_banner {
//                 alt
//                 copyright
//                 url
//               }
//               description {
//                 html
//                 text
//               }
//               button_link {
                
//                 uid
//                 url
//               }
//               button_label {
//                 html
//                 text
//               }
//             }
//           }
//           ... on PrismicPostBodyText {
//             id
//             primary {
//               text {
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
//     products: allPrismicProduct {
//       edges {
//         node {
//           id
//           href
//           uid
//           data {
//             title {
//               text
//             }
//             sub_title
//             main_info
//             image {
//               url
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