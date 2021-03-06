import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout2'
import SlicesEngine from '../components/slices/engine'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'
import Breadcrumbs from '../components/Breadcrumbs'
import ButtonBack from '../components/ButtonBack'
import usePreviewData from '../utils/usePreviewData'
const Page = ( { path,  data, location, pageContext } ) => {
  
  const liveData = usePreviewData( data )
  const { nav, prismicPage, settings, childrenNews, posts, lastPinnedPost } = liveData

  // console.log('liveData', liveData)
  // console.log( 'prismicPage', prismicPage, childrenNews )
  // console.log('pageContext', pageContext)
  // console.log( 'childrenNews', childrenNews)
  // console.log( prismicPage.data.parent )
  // console.log( 'prismicPage.data.hide_title', prismicPage.data.hide_title)
  
  return(
    <Layout nav={ nav.data.nav } settings={ settings }>
       <SEO
        title={ prismicPage.data.seo_title ? prismicPage.data.seo_title : `${prismicPage.data.title.text}`}
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
        { prismicPage.data.show_back_button ? 
          <ButtonBack />
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
            lastPinnedPost={ lastPinnedPost }
            childrenNews={ childrenNews }
            page={ prismicPage }
          />
        : null}
      </Wrapper> 
    </Layout>
  )
}
// export default withPreview( Page )
export default Page

export const pageQuery = graphql`
  query PageQuery(
    $uid: String!, 
    #$prismicId: String!,
    #$parentUid: String
  )
  {
    prismicPage(uid: {eq: $uid}) {
      uid
      first_publication_date
      last_publication_date
      prismicId
      data {
        parent{
          document{ ... on PrismicPage{ prismicId data{ short_name parent{ uid
            document{  ... on PrismicPage{ prismicId data{ short_name parent{ uid
              document{  ... on PrismicPage{ prismicId data{ short_name parent{ uid
                document{  ... on PrismicPage{ prismicId data{ short_name parent{ uid
              
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
        publication_date
        sharing_image {
          url
        }
        show_back_button
        body {
          __typename
          ... on PrismicPageBodyChildrenNews {
            primary{
              display
            }
          }
          ... on PrismicPageBodyText {
            id
            primary {
              text {
                raw
                html
                text
              }
            }
          }
          ... on PrismicPageBodyDocumentsList{
            items{
              document{
                raw
                url
              }
            }
          }
          ... on PrismicPageBodyEntryListIllustrated {
            items{
              related_entries{ document{
                ... on PrismicPage {
                  prismicId
                  data {
                    title { text }
                    sharing_image{
                      url
                      thumbnails{
                        small{ url }
                        medium{ url }
                        large { url }
                      }
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
              gallery_image{ alt url dimensions{ height width }
              thumbnails{ small{ url } }
            }
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
            items{
              youtube_link{ version thumbnail_url title embed_url }
            }
          }
          ... on PrismicPageBodyMap{
            primary{
              address{
                text
                html
              }
              where{
                latitude
                longitude
              }
            }
          }
          ... on PrismicPageBodyBannerWithCaption {
            primary {
              image_banner {
                alt
                url
                thumbnails{ medium{ url } }
              }
              description {
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
              home_hero_button_label
              home_hero_bg_image{
                alt
                thumbnails{ small{ url } large{ url } }
              }
            }
          }
        }
      }
    }
    childrenNews: allPrismicPage(
      filter:{
        tags: {eq: "news"},
        data: {parent: {uid: {eq: $uid}}
      }}
      sort: {fields: data___publication_date, order: DESC}
      ) {
      edges {
        node {
          prismicId
          data {
            publication_date
            title {
              text
            }
            sharing_image{
              url
              thumbnails{
                small{ url }
                large{ url }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPage(
      filter: {tags: {eq: "news"}},
      sort: {fields: data___publication_date, order: DESC}
    ) {
      edges {
        node {
          prismicId
          uid
          data{
            publication_date
            title{text}
            sharing_image{
              url
              thumbnails{
                small{ url }
                large{ url }
              }
            }
          }
        }
      }
    }
    lastPinnedPost: allPrismicPage(
      filter: {tags: {eq: "news"}, data: {is_pinned: {eq: true}}},
      sort: {fields: data___publication_date, order: DESC},
      limit: 1
    ){
      edges {
        node {
          prismicId
          data {
            publication_date
            title {
              text
            }
            sharing_image{
              url
              thumbnails{
                small{ url }
                large{ url }
              }
            }
          }
        }
      }
    }
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