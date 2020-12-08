// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout2'
// import SEO from '../components/SEO'
// import HomeHero from '../components/HomeHero'
// import HomeHero3 from '../components/HomeHero3'
// import FeaturesList from '../components/FeaturesList'
// import usePreviewData from '../utils/usePreviewData'

// const Homepage = ({ data, location }) => {
//     // const liveData = usePreviewData(data)
//     const liveData = data
//     const { nav, prismicHomepage, settings } = liveData
//     // console.log( homepage )
//     return (
//         // <div>HP</div>
//         <Layout nav={nav.data.nav} settings={settings}>
//             <SEO
//                 title={prismicHomepage.data.seo_title}
//                 pathname={''}
//                 desc={prismicHomepage.data.seo_description}
//                 node={prismicHomepage}
//                 banner={prismicHomepage.data.sharing_image.url}
//                 article
//             />
//             {/* <HomeHero data={prismicHomepage.data} /> */}
//             {/* <HomeHero2 data={prismicHomepage.data} /> */}
//             <HomeHero3 data={prismicHomepage.data} />
//             <FeaturesList items={prismicHomepage.data.items_list} />
//         </Layout>
//     )
// }

// export default Homepage

// export const pageQuery = graphql`
//     query IndexQuery {
//         prismicHomepage:prismicHomepage {
//             id
//             data {
//                 seo_title
//                 seo_description
//                 sharing_image {
//                     url
//                 }
//                 title {
//                     text
//                 }
//                 sub_title {
//                     text
//                 }
//                 intro
//                 button_label
//                 button_target {
//                     document {
//                         __typename
//                         ... on PrismicPage {
//                         uid
//                         data {
//                           parent {
//                             uid
//                           }
//                         }
//                       }
//                     }
//                   }
//                 phone_number
//                 phone_number_raw
//                 items_list {
//                     icon
//                     label
//                 }
//             }
//         }
//         settings:prismicSettings {
//             data {
//                 site_name
//                 footer_link {
//                     uid
//                 }
//                 footer_link_label
//             }
//         }
//         nav:prismicNav {
//             data {
//               nav {
//                 ... on PrismicNavNavNavItem {
//                   primary {
//                     label {
//                       text
//                     }
//                     link {
//                       uid
//                       document {
//                         ... on PrismicPage {
//                           uid
//                           prismicId
//                           data{
//                             parent{
//                               uid
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                   items {
//                     sub_nav_link {
//                       uid
//                       document {
//                         ... on PrismicPage {
//                           uid
//                           prismicId
//                           data{
//                             parent{
//                               uid
//                             }
//                           }
//                         }
//                       }
//                     }
//                     sub_nav_link_label {
//                       text
//                     }
//                   }
//                 }
//               }
//             }
//           }
//     }
// `