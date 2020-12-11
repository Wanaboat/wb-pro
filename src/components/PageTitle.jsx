import React from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

const PageTitle = (props) => {
    return(
        <Heading
            as='h1'
            mt='3rem'
            mb='2rem'
            color='brand.2'
            position='relative'
            zIndex={{ base:'base', lg:'tooltip'}}
            p={{ base:'1rem', lg: '2rem 4rem' }}
            fontSize={{ base: '32px', lg:'42px', xl:'52px' }}
        >
            { props.children }
            <Box
                mt='1rem'
                w='200px'
                h='3px'
                bg='brand.1'
                transform={{ base:'translateX(-100px)' }}
            />
        </Heading>
    )
}

export default PageTitle