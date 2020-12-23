import React from 'react'
import {
    Box,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'

const DocumentsList = (props) => {
    console.log('DocumentsList', props )
    return (
        <Box
            id='news'
            bg='white'
            p={{ base: '1rem', lg: '2rem 4rem' }}
            mx={{ base: '1rem', lg: '4rem' }}
        >
            <Stack
                spacing='1rem'
            >
                {props.items.map((item, i) =>
                    <Flex
                        as={'a'}
                        target='_blank'
                        href={`${item.document.url}`}
                        role='group'
                        display='flex'
                        borderBottom={ props.items.length != i+1 ? 'dashed 1px' : 'none' }
                        borderBottomColor='gray.100'
                        p='.5rem 0'
                        justifyContent='space-between'
                        _hover={{
                            color:'brand.2'
                        }}
                    >
                        <Text>
                            { item.document.raw.name }
                        </Text> 
                        <Box
                            transition='all 200ms ease'
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
    )
}

export default DocumentsList 