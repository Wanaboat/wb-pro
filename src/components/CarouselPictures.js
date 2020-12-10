import React, { useState } from 'react'
import {
    Box,
    Button,
    Flex,
    Image
} from '@chakra-ui/react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PicturesGallery = ({ pictures }) => {
    const [current, setCurrent] = useState(false)

    console.log('PicturesGallery', pictures)

    const formatArray = (arr) => {
        const cleanArray = []
        for (let index = 0; index < arr.length; index++) {
            const item = arr[index];
            cleanArray.push(
                {
                    src: item.gallery_image.url,
                    width: item.gallery_image.dimensions.width,
                    height: item.gallery_image.dimensions.height,
                }
            )
        }
        return cleanArray
    }
    const photos = formatArray(pictures)
    const Items = () => {
        return (
            photos.map((item, index) =>
                <Slide
                    index={index}
                    key={`carousel-picture-item-${index}`}
                >
                    <Box
                        position='relative'
                        h='600px'
                    >
                        <picture>
                            <source type="image/jpeg" src={item.src} />
                            <Image
                                w='100%'
                                src={item.src}
                                loading='lazy'
                            />
                        </picture>
                    </Box>
                </Slide>
            )
        )
    }

    return (
        <Box
            mx={{ xs: '-1rem', lg: '0' }}
            position='relative'
            my={{ base:'2rem', lg:'0' }}
        >
            <CarouselProvider
                naturalSlideWidth={1150}
                naturalSlideHeight={600}
                totalSlides={photos.length}
                infinite={ true }
            >
                <Slider>
                    <Items />
                </Slider>
                <Flex
                    position='absolute'
                    bottom='-1.5rem'
                    left='0rem'
                    justifyContent={{ base:'center' }}
                    pl={{ xs:'0', lg:'2rem'}}
                    w='100%'

                >
                    <Flex
                        w='auto'
                        bg='brand.3'
                        p={{ xs: '.25rem', lg: '.5rem .75rem' }}
                        display='flex'
                        justifyContent={{ base: 'center' }}

                    >
                        <Button
                            variant='ghost'
                            color='white'
                            as={ButtonBack}
                            transition='transform 200ms ease'
                            _hover={{
                                bg: 'transparent',
                                color: 'white',
                                transform: 'translateX(-.5rem)'
                            }}
                        >←</Button>
                        <Button
                            variant='ghost'
                            color='white'
                            as={ButtonNext}
                            transition='transform 200ms ease'
                            _hover={{
                                bg: 'transparent',
                                color: 'white',
                                transform: 'translateX(.5rem)'
                            }}
                        >→</Button>
                    </Flex>
                </Flex>
            </CarouselProvider>

        </Box>
    )
}

export default PicturesGallery