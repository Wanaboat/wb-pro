import React, { useState } from 'react'
import {
    Box,
    Button,
    Flex,
    Image
} from '@chakra-ui/core'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PicturesGallery = ({ pictures }) => {
    const [current, setCurrent] = useState(false)

    console.log('PicturesGallery', pictures)

    const formatArray = (arr) => {
        const cleanArray = []
        for (let index = 0; index < arr.length; index++) {
            const img = arr[index];
            cleanArray.push(
                {
                    src: img.picture.localFile.childImageSharp.fixed.src ? img.picture.localFile.childImageSharp.fixed.src : img.picture.fixed.src,
                    srcWebp: img.picture.localFile.childImageSharp.fixed.srcWebp ? img.picture.localFile.childImageSharp.fixed.srcWebp : false,
                    width: img.picture.dimensions.width,
                    height: img.picture.dimensions.height,
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
                        // p={{ xs: '1rem 4rem' }}
                        position='relative'
                        h='600px'
                    >
                        <picture>
                            <source type="image/jpeg" src={item.src} />
                            { item.srcWebp ? 
                                <source type="image/webp" src={item.srcWebp} />
                            : null}
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
                    w='100%'
                    justifyContent={{ xs:'center', lg:'left'}}
                    pl={{ xs:'0', lg:'2rem'}}
                >
                    <Flex
                        w='auto'
                        // ml='1rem'
                        bg='brand.3'
                        p={{ xs: '.25rem', lg: '.5rem .75rem' }}
                        display='flex'
                        justifyContent={{ xs: 'center', lg: 'flex-start' }}
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