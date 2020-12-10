import React, { useState } from 'react'

import {
    Box,
    Flex,
    Text
} from '@chakra-ui/react'
import ButtonSecondary from '../ButtonSecondary'

const SpecsTable = (props) => {
    console.log('SpecsTable', props)
    const [more, setMore] = useState(false)

    const SpecLine = ({ title, value, last }) => {
        return (
            <Flex
                p='1rem 0'
                w='100%'
                justifyContent='space-between'
                borderBottom={ !last ? 'dashed 1px' : null }
                borderBottomColor='gray.100'
            >
                <Text
                    alignSelf='flex-start'
                    color='gray.600'
                >
                    {title}
                </Text>
                <Text
                    alignSelf='flex-end'
                >
                    {value}
                </Text>
            </Flex>
        )
    }

    return (
        <Box
            bg='white'
            p={{ base:'1rem', lg:'2rem 4rem' }}
            mx={{ base: '1rem', lg: '4rem' }}
        >

            {
                props.items.map((item, i) =>
                    !more && i < 3 ?
                        <SpecLine key={`specLine-${i}`} title={item.key} value={item.value} />
                        : more ?
                            <SpecLine
                                key={`specLine-${i}`}
                                title={item.key}
                                value={item.value}
                                last={ i+1 === props.items.length }
                            />
                        : null
                )
            }
            {
                !more ?
                    <Flex
                        mt='1rem'
                        justifyContent='center'
                        onClick={() => { setMore(true) }}
                    >
                        <ButtonSecondary>Voir plus</ButtonSecondary>
                    </Flex>
                    : null
            }

        </Box>
    )
}

export default SpecsTable