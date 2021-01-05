import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Layout } from '../components'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Page404 = (data) => {

  console.log("404dataNav", data)
  const { nav, prismicPage, settings, childrenNews, posts } = data

  return (
    <Layout>
      <Flex
        alignItems='center'
        justifyContent='space-around'
      >
        <Box mt='4rem'>
          <Stack spacing='1rem'>
            <Heading color="brand.2">Erreur 404</Heading>
            <Text>Malheureusement cette page n'existe pas ou plus.</Text>
            <Box>
              <Button
                as={GatsbyLink}
                to='/'
              >
                ← Retour à la page d'accueil
          </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Page404

export const pageQuery = graphql`
  query PageNotFoundQuery
  {
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