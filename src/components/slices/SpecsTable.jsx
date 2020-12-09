import React, { useState } from 'react'

import {
    Box,
    Flex,
    Text
} from '@chakra-ui/react'
import ButtonSecondary from '../ButtonSecondary'

const SpecsTable = (props) => {
    const [more, setMore] = useState(false)
    return (
        <Box
            bg='white'
            p='2rem 4rem'
            mx={{ base:'1rem', lg:'4rem' }}
        >

            {
            [1,2,3].map( item =>
            <Flex
                p='1rem 0'
                w='100%'
                justifyContent='space-between'
                borderBottom='dashed 1px'
                borderBottomColor='gray.100'
            >
                <Text
                    alignSelf='flex-start'
                >Key</Text>
                <Text
                    alignSelf='flex-end'
                >Value</Text>
                        </Flex>

            )}

            { more ? 
            [1,2,3].map( item =>
                <Flex
                    p='1rem 0'
                    w='100%'
                    justifyContent='space-between'
                    borderBottom='dashed 1px'
                    borderBottomColor='gray.100'
                >
                    <Text
                        alignSelf='flex-start'
                    >Key</Text>
                    <Text
                        alignSelf='flex-end'
                    >Value</Text>
                            </Flex>
    
                )
            : 
            <Flex
                mt='1rem'
                justifyContent='center'
                onClick={ () => { setMore(true) } }
            >
                <ButtonSecondary>Voir plus</ButtonSecondary>
            </Flex>
            }
        </Box>
    )
}

export default SpecsTable