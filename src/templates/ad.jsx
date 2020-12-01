// import React from 'react'
// import { graphql } from 'gatsby'
// import { Link as GatsbyLink } from 'gatsby'
// import { Layout } from '../components'
// import Wrapper from '../components/Wrapper'
// import PageTitle from '../components/PageTitle'
// import { Box, Button } from '@chakra-ui/react'
// import SEO from '../components/SEO'
// import SingleAdLoader from '../components/SingleAdLoader'
// import { ContentfulClient, ContentfulProvider } from 'react-contentful';

// const contentfulClient = new ContentfulClient({
//   accessToken: '315d9ab73fe1c8b4730aaa408d7298bb971cbcd0dd95de7ff56170edc17abbeb',
//   space: 'xg7lbk8sfmzs',
// });

// const AdTpl = (props) => {
//   const { menu, ad, nav, settings } = props.data
//   return (
//     <Layout nav={ nav.data.nav } settings={ settings }>
//       <SEO
//         title={ad.title ? `${ad.title.name}` : ''}
//         pathname={ad.slug ? ad.slug : '/'}
//         desc={'post.data.seo_description.text'}
//         node={ad}
//         article
//       />
//       <ContentfulProvider client={contentfulClient}>

//         {/* <SEO
//                 title={`${product.data.seo_title ? product.data.seo_title : ''}`}
//                 pathname={product.data.uid ? post.data.uid : '/'}
//                 desc={product.data.seo_description ? product.data.seo_description.text : ''}
//                 node={product}
//                 article
//             /> */}
//         <Wrapper>
//           <Button
//             variant='outline'
//             my='2rem'
//             size='sm'
//             to='../'
//             as={GatsbyLink}>← Retour</Button>
//           <PageTitle>{ad.name}</PageTitle>
//           <Box maxW='700px'>
//             <SingleAdLoader
//               adID={props.pageContext.contentful_id}
//               close={() => { setSingleAdID(null) }}
//             />

//           </Box>
//         </Wrapper>
//       </ContentfulProvider>
//     </Layout>
//   )
// }

// export default AdTpl

// export const adQuery = graphql`
// query AdQuery($contentful_id: String!) {
//     ad: contentfulAd(contentful_id: {eq: $contentful_id}) {
//       name
//       price
//       refBrand{
//         name
//       }
//       content {
//         content
//       }
//     }
//     posts: allPrismicPost {
//       edges {
//         node {
//           href
//           uid
//           data {
//             date(formatString: "DD.MM.YYYY")
//             title {
//               html
//               text
//             }
//           }
//         }
//       }
//     }
//     nav:prismicNav {
//       data {
//         nav {
//           primary {
//             label {
//               html
//               text
//             }
//             link {
//               url
//               id
//               document {
//                 ... on PrismicPage {
//                   id
//                   data {
//                     parent {
//                       uid
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           items {
//             sub_nav_link {
//               uid
//               url
//               document{
//                 ... on PrismicPage {
//                   id
//                   data {
//                     parent {
//                       uid
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//             sub_nav_link_label {
//               text
//             }
//           }
//         }
//       }
//     }
//     settings: prismicSettings {
//       data {
//         site_name
//         footer_link {
//           uid
//           url
//         }
//         footer_link_label
//       }
//     }
//   }
// `