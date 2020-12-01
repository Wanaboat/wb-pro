import React from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

const PageTitle = (props) => {
    return(
        <Heading
            as='h1'
            color='brand.light.primary'
            mt='3rem'
            mb='2rem'
            color='brandDark1'
            position='relative'
            zIndex='tooltip'
            p={{ base:0, lg:'2rem 4rem'}}
        >
            { props.children }
            <Box
                mt='1rem'
                w='200px'
                h='3px'
                bg='brand.1'
                transform={{ base:'none', lg:'translateX(-100px)' }}
            />
        </Heading>
    )
}

export default PageTitle