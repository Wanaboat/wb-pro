import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'
import linkResolver from '../../utils/linkResolver'

const PostsList = ( props ) => {
    console.log('PostsList', props.posts.edges )
    return(
        <Stack
            spacing="2rem"
            mx={{ base:'1rem', lg:'4rem' }}
        >
            {
                props.posts.edges.map( (post, i) => 
                    <Flex 
                        key={ post.node.prismicId }
                        cursor='pointer'
                        as={ GatsbyLink }
                        to={`${ linkResolver( post.node.prismicId )}`}
                        py='2rem'
                        borderBottom={ props.posts.edges.length != i+1 ? 'solid 1px' : 'none' }
                        borderColor='gray.200'
                        transition='padding 250ms ease'
                        justify='space-between'
                        _hover={{
                            bg:'white',
                            pl:'2rem'
                        }}
                    >
                        <Heading
                            as="h3"
                            isTruncated={ true }
                            color='brand.2'
                            fontWeight='500'
                            fontSize='26px'
                        >
                            {post.node.data.title.text}
                        </Heading>
                        <Text
                            color='gray.400'
                            mr='1rem'
                        >
                            { post.node.data.publication_date }
                        </Text>
                    </Flex>
                    )
            }
        </Stack>
    )
}

export default PostsList