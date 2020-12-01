import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout2'
import Wrapper from '../components/Wrapper'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import SlicesEngine from '../components/Slices/engine'
import Pagination from '../components/Pagination'

const ArchiveTpl = (props) => {
	const { prismicPage, posts, nav, products, settings } = props.data
	return (
		<Layout nav={nav.data.nav} settings={settings}>
			<SEO
				title={`${prismicPage.data.title.text}`}
				pathname={prismicPage.data.uid ? post.data.uid : '/'}
				desc={prismicPage.data.seo_description ? prismicPage.data.seo_description.text : ''}
				node={prismicPage}
				article
			/>
			{/* <Wrapper>
				<PageTitle>{prismicPage.data.title.text}</PageTitle>
				{prismicPage.data.body ? <SlicesEngine slices={prismicPage.data.body} posts={posts} products={products} /> : null}
				<Pagination data={posts.pageInfo} />
			</Wrapper> */}
		</Layout>
	)
}

export default ArchiveTpl

export const archiveQuery = graphql`
	query ArchiveQuery {
		prismicPage(uid: { eq: "blog" }) {
			uid
			first_publication_date
			last_publication_date
			data {
				title {
					text
				}
				seo_description{
					text
				}
				seo_title
				sharing_image{
					url
				}
				body {
					__typename
					... on PrismicPageBodyAdsList {
						id
						primary{
							link_to_contact{
						id
						isBroken
						lang
						link_type
						slug
						target
						type
						uid
						url
					
							}
							side_text{
								html
								text
							}
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
					... on PrismicPageBodyText {
						id
						primary {
							text {
								html
								text
								
							}
						}
					}
				}
			}
		}
		
		posts: allPrismicPost{
			pageInfo {
				currentPage
				hasNextPage
				hasPreviousPage
				itemCount
				pageCount
				totalCount
				perPage
			}
			edges{
				node{
					href
					uid
					data{
						date(formatString: "DD.MM.YYYY")
						title {
							html
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
							html
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