import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, PseudoBox, Stack, Text } from '@chakra-ui/react'

const PostsList = ( props ) => {
    // console.log('propsListPosts', props )
    return(
        <Stack spacing="2rem">
            {
                props.lastPosts.edges.map( post => 
                    <PseudoBox 
                        key={ post.node.uid }
                        as={ GatsbyLink }
                        to={`/blog/${post.node.uid}`}
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
                            {post.node.data.title.text}
                        </Heading>
                        <Text
                            color='gray.400'
                        >
                            {post.node.data.date}
                        </Text>
                    </PseudoBox>
                    )
            }
        </Stack>
    )
}

export default PostsList