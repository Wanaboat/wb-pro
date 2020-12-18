import React from 'react'

import {
    Box,
    Image,
    Text
} from '@chakra-ui/react'

const ImageAlone = ( props ) => {

    console.log( 'ImageAlone', props )

    return(
        <Box
            as='figure'
            pos='relative'
            zIndex='base'
            bg={
                props.data.background_color
            }
            p={'8rem 2rem'}

        >
            <Image  
                display='block'
                mx='auto'
                src={ props.data.image.url }
                alt={ props.data.image.alt }

            />
            { props.data.image.alt ?
                <Text
                    pos='absolute'
                    bottom='0'
                    right='0'
                    p='.15rem .4rem'
                    bg={ 'gray.300' }
                    fontSize={{ base: '12px', lg:'14px' }}
                    as='figcaption'>{ props.data.image.alt }</Text>
            : null}
        </Box>
    )
}

export default ImageAlone


// data:
// background_color: "#f0f0f0"
// image:
// alt: ""
// url: "https://images.prismic.io/sailfast/e3259f26-f6f6-