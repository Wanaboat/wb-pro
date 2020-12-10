import React, { useState } from 'react'
import {
    Box,
    Button,
    Flex,
    Image
} from '@chakra-ui/react'

import CarouselPicture from '../CarouselPictures'

const Carousel = ( props ) => {

    console.log('CarouselPicture', props )

    return(
        <Box>
            <CarouselPicture pictures={ props.items } />
        </Box>
    )
}

export default Carousel