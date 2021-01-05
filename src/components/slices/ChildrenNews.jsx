
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
    // console.log('childrenNews', props)
    return (

        props.childrenNews.edges.length > 0 ?
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
                        align='center'
                        as={GatsbyLink}
                        to={linkResolver(item.node.prismicId)}
                        role='group'
                        display='flex'
                        borderBottom={ props.childrenNews.edges.length != i+1 ? 'dashed 1px' : 'none' }
                        borderBottomColor='gray.100'
                        p='.5rem 0'
                        justifyContent='space-between'
                        _hover={{
                            color:'brand.2'
                        }}
                    >
                        <Text>
                            {item.node.data.title.text}
                        </Text> 
                        <Box
                            transition='all 200ms ease'
                            pl='1rem'
                            _groupHover={{
                                transform:'translateX(.5rem)'
                            }}
                        >
                            →
                        </Box>
                    </Flex>
                )}
                </Stack>
            </Box>
            : 'null'

    )
}

export default ChildrenNews