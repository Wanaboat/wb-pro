import React from 'react'

import {
    Box, 
    Text,
    Heading
} from '@chakra-ui/react'

const Title = ( props ) => {
    const extractH = ( html ) => {
        return( html.substr(1,2) )
    }
    const level = () => {
        return( parseInt( props.data.slice_title.html.substr(2,1) ) )
    }

    return(

        <Heading
            as={ extractH( props.data.slice_title.html )}
            position='relative'
            zIndex={{ base:'base', lg:'tooltip'}}
            color='brand.light.primary'
            mb={ level() === 1 ? '2rem' : 0 }
            fontSize={{
                base: level() === 1 ? '32px' : level() === 2 ? '26px' : level() === 2 ? '20px' : '18px',
                lg: level() === 1 ? '38px' : level() === 2 ? '28px' : level() === 2 ? '24px' : '20px' 
            }}
            textTransform={{ base: level() != 4 ? 'none' : 'uppercase' }}
            fontWeight={{ base: level() != 4 ? '600' : '400' }}
            letterSpacing={{ base: level() != 4 ? 'auto' : '0.05rem' }}
            mt='1rem'
            color='brand.3'
            p={{ base:'1rem', lg: level() <= 2 ? '2rem 4rem' : '0rem 4rem'}}
        >
                { props.data.slice_title.text }
            { level() <= 2 ? 
            <Box
                mt='1rem'
                w='200px'
                h='3px'
                bg='brand.1'
                transform={{ base:'translateX(-100px)' }}
            />
            : null}
        </Heading>
    )
}

export default Title

