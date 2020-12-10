
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'

import linkResolver from '../../utils/linkResolver'

const ChildrenNews = (props) => {
    console.log('childrenNews', props)
    return (

        props.childrenNews.edges ?
            <Box
                id='news'
                bg='white'
                p={{ base: '1rem', lg: '2rem 4rem' }}
                mx={{ base: '1rem', lg: '4rem' }}
            >
                {/* { JSON.stringify( props.childrenNews.edges  ) } */}
                <Stack
                    spacing='1rem'
                >
                {props.childrenNews.edges.map((item, i) =>
                    <Flex
                        as={GatsbyLink}
                        to={linkResolver(item.node.prismicId)}
                        borderBottom={ props.childrenNews.edges.lengt != i+1 ? 'dashed 1px' : 'none' }
                        borderBottomColor='gray.100'
                        p='.5rem 0'
                        justifyContent='space-between'
                    >
                        <Text>
                            {item.node.data.title.text}
                        </Text> 
                        <Text>
                            →
                        </Text>

                    </Flex>
                )}
                </Stack>
            </Box>
            : 'null'

    )
}

export default ChildrenNews