import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Layout, Wrapper } from '../components'
import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import { Router } from "@reach/router"
import { graphql } from 'gatsby'
import AdsLoader from '../components/AdsLoader'

import SingleAdLoader from '../components/SingleAdLoader'
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
const contentfulClient = new ContentfulClient({
    accessToken: '315d9ab73fe1c8b4730aaa408d7298bb971cbcd0dd95de7ff56170edc17abbeb',
    space: 'xg7lbk8sfmzs',
});
const AdsSummary = ({ data }) => {
    const { nav, settings } = data

    const AdDetail = ({ adID }) => {
        return (
            <Box my='2rem'>
                <Button
                    variant='outline'
                    size='sm'
                    to='../'
                    as={GatsbyLink}>← Toutes nos occasions</Button>
                    <Box my='2rem' maxW='650px' mx='auto'>
                        <SingleAdLoader
                            adID={adID}
                            close={() => { setSingleAdID(null) }}
                        />
                    </Box>
            </Box>
        )
    }

    const AdsList = () => {
        return (
            <Box>
                <AdsLoader adID={'5f846ddfacaad'} setSingleAdID={(id) => { setSingleAdID(id) }} />
            </Box>
        )
    }
    return (
        <ContentfulProvider client={contentfulClient}>

            <Layout nav={nav.data.nav} settings={settings}>
                <Wrapper>
                    <Router basepath="/bateaux/occasions-2/">
                        <AdDetail path="/:adID" />
                        <AdsList path='/' />
                    </Router>
                </Wrapper>
            </Layout>
        </ContentfulProvider>


    )
}

export default AdsSummary


export const pageQuery = graphql`
  query AdsListQuery
  {
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