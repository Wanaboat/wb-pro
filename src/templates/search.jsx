import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'
import Axios from "axios"
import * as JsSearch from "js-search"
import Layout from '../components/Layout2'

import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Stack
} from '@chakra-ui/react'
import linkResolver from '../utils/linkResolver'
// import data from '../../contents.json';
// console.log('data', data)
var content = require('../../contents.js')['URIs']

class SearchTemplate extends Component {
  state = {
    bookList: content,
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    // console.log('data componentDidMount', this.state.bookLists)
    this.rebuildIndex()

    //   Axios.get("../../contents.json")
    //     .then(result => {
    //       console.log('result', result)
    //       const bookData = result.data
    //       this.setState({ bookList: bookData.books })
    //       this.rebuildIndex()
    //     })
    //     .catch(err => {
    //       this.setState({ isError: true })
    //       console.log("====================================")
    //       console.log(`Something bad happened while fetching the data\n${err}`)
    //       console.log("====================================")
    //     })
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state
    const dataToSearch = new JsSearch.Search("uid")

    console.log('Contents', bookList)
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    // dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    // dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
    dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("uid") // sets the index attribute for the data
    dataToSearch.addIndex("prismicId") // sets the index attribute for the data
    dataToSearch.addDocuments(bookList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    console.log('queryResult', queryResult)
    console.log('search', e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { nav, settings } = this.props.data
    const { bookList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? null : searchResults
    return (
      <Layout nav={nav.data.nav} settings={settings}>
        <Box
          p={{ base: '1rem', lg: '2rem 4rem' }}
        >
          <Stack
            spacing='2rem'
          >
            <Heading
              color='brand.2'
              fontSize={{ base: '20px', lg: '28px' }}
            >
              Votre recherche sur le site :
            </Heading>
            <Box
              as='form'
              onSubmit={this.handleSubmit}
            >
              <Input
                bg='white'
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Votre recherche"
                w='100%'
              />
            </Box>
            <Box
              display='block'
            >
              {
                queryResults ?
                  queryResults.map((item, i) => {
                    return (
                      <Flex
                        key={item.uid}
                        as={GatsbyLink}
                        to={linkResolver(item.prismicId)}
                        bg='white'
                        borderBottom={i + 1 !== queryResults.length ? 'solid 1px' : 'none'}
                        borderBottomColor='gray.100'
                        p='1rem 3rem'
                        justify='space-between'
                        align='center'
                        _hover={{
                          bg: 'gray.50'
                        }}
                      >
                        <Text>
                          {item.title}
                        </Text>
                        <Text>
                          →
                        </Text>
                      </Flex>
                    )
                  })
                  :
                    <Text
                      fontStyle='italic'
                      color='gray.500'
                    >Saisissez votre recherche dans le champs ci-dessus.</Text>
              }
            </Box>
            {queryResults ?
              <Text
                fontStyle='italic'
                color='gray.500'
              >
                {queryResults.length === 1 ? '1 résultat trouvé' : `${queryResults.length} résultats trouvés`}
              </Text>
              : null}
          </Stack>

        </Box>
      </Layout>
    )
  }
}

export default SearchTemplate


export const pageQuery = graphql`
  query SearchPageQuery
  {
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