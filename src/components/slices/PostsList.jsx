import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { FormattedDate } from 'react-intl'
import {
    Heading,
    Box,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'
import linkResolver from '../../utils/linkResolver'
import EntryCardLarge from '../EntryCardLarge'

const PostsList = (props) => {
    // console.log('PostsList', props )
    return (
        <>
            <Box mb={ 5 }>
                <EntryCardLarge node={ props.lastPinnedPost.edges[0].node } />
            </Box>
            <Stack
                spacing="0rem"
                mx={{ base: '1rem', lg: '4rem' }}
            >
                {
                    props.posts.edges.map((post, i) =>
                        props.lastPinnedPost.edges[0].node.prismicId !== post.node.prismicId ?
                            <Flex
                                key={post.node.prismicId}
                                cursor='pointer'
                                as={GatsbyLink}
                                to={`${linkResolver(post.node.prismicId)}`}
                                py={{ base:'1rem', lg:'2rem' }}
                                my='0'
                                borderBottom={props.posts.edges.length != i + 1 ? 'solid 1px' : 'none'}
                                borderColor='gray.200'
                                transition='padding 250ms ease'
                                justify='space-between'
                                overflowX='hidden'
                                _hover={{
                                    bg: 'white',
                                    pl: { base:'4rem', lg:'4rem' }
                                }}
                            >
                                <Heading
                                    as="h3"
                                    isTruncated={true}
                                    color='brand.2'
                                    fontWeight='500'
                                    fontSize={{ base:'18px', lg:'20px', lg:'24px' }}
                                    transform={{ base:'none' , lg: 'translateX(-3rem)' }}
                                >
                                    <Text
                                        as='span'
                                        px='1rem'
                                        fontSize={{ base: '12px', lg: '26px' }}
                                        display={{ base:'none', lg:'inline-block' }}
                                    >
                                        →
                                    </Text>
                                    {post.node.data.title.text}
                                </Heading>
                                <Text
                                    color='gray.400'
                                    mr='1rem'
                                >
                                    <FormattedDate
                                        value={post.node.data.publication_date}
                                    />
                                </Text>
                            </Flex>
                        : null
                    )
                }
            </Stack>
        </>
    )
}

export default PostsList