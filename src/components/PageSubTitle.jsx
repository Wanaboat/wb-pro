import React from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

const PageSubTitle = (props) => {
    return(
        <Heading
            as='h2'
            color='brand.light.primary'
            mt='3rem'
            mb='2rem'
            color='brandDark1'
            fontSize='20px'
        >
            { props.children }
            <Box
                mt='1rem'
                w='140px'
                h='3px'
                bg='brandLight2'
            />
        </Heading>
    )
}

export default PageSubTitle