import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout2'
import SlicesEngine from '../components/slices/engine'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'
import Breadcrumbs from '../components/Breadcrumbs'
// import usePreviewData from '../utils/usePreviewData'
const Page = ( { data, location } ) => {
  // const liveData = usePreviewData( data )
  const { nav, prismicPage, settings, posts, products } = data
  console.log( 'prismicPage', prismicPage )
  console.log( prismicPage.data.parent )
  console.log( 'prismicPage.data.hide_title', prismicPage.data.hide_title)
  
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
        { !prismicPage.data.hide_breadcrumbs ? 
          <Breadcrumbs data={ prismicPage } />
        : null}
        { prismicPage.data.hide_title ? 
        null
        :
          <PageTitle>{ prismicPage.data.title.text }</PageTitle>
        }
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
        hide_breadcrumbs
        hide_title
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
          
         #... on PrismicPageBodyAdsList {
         #  primary{
         #    link_to_contact{
         #      id
         #      isBroken
         #      lang
         #      link_type
         #      slug
         #      target
         #      type
         #      uid
         #      url
         #    }
         #    side_text{
         #      html
         #      text
         #    }
         #  }
         #}
          ... on PrismicPageBodyEntryListIllustrated {
            items{
              related_entries{ document{
                ... on PrismicPage {
                  prismicId
                  data {
                    title { text }
                    sharing_image{
                      url
                    }
                  }
                } 
              }}
            }
          }
          ... on PrismicPageBodySpecsTable{
            items{
              key value
            }
          }
          ... on PrismicPageBodyImageGallery{
            items{
              gallery_image{ alt url dimensions{ height width } }
            }
          }
          ... on PrismicPageBodyTitle{
            primary{ slice_title { html text }}
          }
          ... on PrismicPageBodyImageAlone {
            id
            primary {
              background_color
              image { alt url }
            }
          }
          ... on PrismicPageBodyVideo {
            primary {
              youtube_link { embed_url html }
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
          ... on PrismicPageBodyEquipementSheet{
            primary{ equipement_sheet_link{
              document{
                ... on PrismicEquipementsSheet{
                  data {
                    body {
                      __typename
                      ... on PrismicEquipementsSheetBodyCategoryTitle {
                        primary{ value }
                      }
                      ... on PrismicEquipementsSheetBodyCategoryItem {
                        primary { item_title }
                      }
                      ... on PrismicEquipementsSheetBodyCategoryOptions {
                        items{ option_value }
                      }
                    }
                  }
                }
              }
            }}
          }
          ... on PrismicPageBodyHomeHero{
            primary{
              home_hero_title{ text }
              home_hero_subtitle
              home_hero_intro
              home_hero_bg_image{
                small{ url }
                large{ url }
              }
            }
          }
        }
      }
    }
    #posts: allPrismicPost{
    #  edges{
    #    node{
    #      href
    #      uid
    #      data{
    #        date(formatString: "DD.MM.YYYY")
    #        title {
    #          text
    #        }
    #      }
    #    }
    #  }
    #}
    #products: allPrismicProduct {
    #  edges {
    #    node {
    #      id
    #      href
    #      uid
    #      data {
    #        title {
    #          text
    #        }
    #        sub_title
    #        main_info
    #        image {
    #          url
    #          #thumbnails{
    #          #  square_sm {
    #          #    alt
    #          #    copyright
    #          #    url
    #          #  }
    #          #  square_lg {
    #          #    alt
    #          #    copyright
    #          #    url
    #          #  }
    #          #}
    #        }
    #      }
    #    }
    #  }
    #}
    settings:prismicSettings {
      data {
          site_name
          site_description
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
                target
                url
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