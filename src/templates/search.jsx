import React, { Component } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Axios from "axios"
import * as JsSearch from "js-search"
import Layout from '../components/Layout2'

import {
    Box,
    Heading,
    Text,

} from '@chakra-ui/react'
import data from '../../contents2.json';

// var content = require('../../contents.js')['URIs']
console.log('data', data)

class SearchTemplate extends Component {
    state = {
        bookList: data.URIs,
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
        this.setState({ bookList: data.URIs }, this.rebuildIndex());
        this.rebuildIndex()

        //   Axios.get("https://bvaughn.github.io/js-search/books.json")
        //     .then(result => {
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
        const dataToSearch = new JsSearch.Search("isbn")

        console.log('bookList', bookList)
        /**
         *  defines a indexing strategy for the data
         * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
         */
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
        /**
         * defines the sanitizer for the search
         * to prevent some of the words from being excluded
         *
         */
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
        /**
         * defines the search index
         * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
         */
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
        dataToSearch.addIndex("title") // sets the index attribute for the data
        dataToSearch.addIndex("uid") // sets the index attribute for the data
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
        const { nav, prismicPage, settings, posts, products } = this.props.data
        const { bookList, searchResults, searchQuery } = this.state
        const queryResults = searchQuery === "" ? null : searchResults
        return (
            <Layout nav={nav.data.nav} settings={settings}>
                <Box p='1rem'>
                    <Box as='form' onSubmit={this.handleSubmit}>
                        <div style={{ margin: "0 auto" }}>
                            <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                                Enter your search here
                                </label>
                            <input
                                id="Search"
                                value={searchQuery}
                                onChange={this.searchData}
                                placeholder="Enter your search here"
                                style={{ margin: "0 auto", width: "400px" }}
                            />
                        </div>
                    </Box>
                    {/* { queryResults.length ? 
                            <Text>
                                Number of items:
                                {queryResults.length}
                            </Text>
                        : null } */}

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            borderRadius: "4px",
                            border: "1px solid #d3d3d3",
                        }}
                    >
                        <thead style={{ border: "1px solid #808080" }}>
                            <tr>
                                <th
                                    style={{
                                        textAlign: "left",
                                        padding: "5px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        borderBottom: "2px solid #d3d3d3",
                                        cursor: "pointer",
                                    }}
                                >
                                    Book ISBN
                                </th>
                                <th
                                    style={{
                                        textAlign: "left",
                                        padding: "5px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        borderBottom: "2px solid #d3d3d3",
                                        cursor: "pointer",
                                    }}
                                >
                                    Book Title
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                queryResults ?

                                    queryResults.map(item => {
                                        return (

                                            <Box 
                                            key={ item.uid }
                                            as={ GatsbyLink }
                                            to={`${item.uid}`}
                                            py='2rem'
                                            borderBottom='solid 1px'
                                            borderColor='brandDark2'
                                            transition='padding 250ms ease'
                                            _hover={{
                                                bg:'brandLightPrimary',
                                                pl:'2rem'
                                            }}
                                        >
                                            <Heading
                                                as="h3"
                                                color='brandDarkPrimary'
                                                fontWeight='500'
                                                fontSize='26px'
                                                
                                            >
                                                {item.title}
                                            </Heading>
                                            {/* <Text
                                                color='gray.400'
                                            >
                                                {post.node.data.date}
                                            </Text> */}
                                        </Box>

                                        )
                                    })

                                    : null
                            }
                        </tbody>
                    </table>
                </Box>
            </Layout>
        )
    }
}

export default SearchTemplate


export const pageQuery = graphql`
  query SearchPageQuery
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