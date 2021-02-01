import React from 'react'
import { Button, Box, Image, Stack } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";

const Gallery = (props) => {
    const { ad, images } = props
    return (
        <>
            {/* <Button onClick={true}>Open Modal</Button> */}

            <Modal mt={0} size="lg" isOpen={true} onClose={() => { props.close() }}>
                <ModalOverlay bg='gray.700' />
                <ModalContent
                    mt={'4.75rem'}
                    bg='none'
                >
                    <Button
                        position='fixed'
                        bg='white'
                        color='gray.700'
                        left='1rem'
                        top='1rem'
                        onClick={() => { props.close() }}
                    >
                        <FormattedMessage id='main.close' />
                    </Button>

                    {/* <ModalCloseButton right='inherit' left='1rem' position='fixed' /> */}
                    <ModalBody p={0} bg='none'>
                        <Stack spacing='1rem'>
                            {props.images.map(image =>
                                <Box boxShadow='lg'>
                                    {/* <Image m={0} w='100%' src={ `photos/${image}` } /> */}
                                    <picture>
                                        <source
                                            type="image/webp"
                                            srcSet={`${process.env.IMAGE_URL_PREFIX}/photos${image}?fit=cover&width=750&height=750&format=webp`}
                                        />
                                        <Image
                                            alt={ ad.title }
                                            // alt={ad.name}
                                            // mt={{ xs: '-10rem', lg: '-20rem' }}
                                            objectFit="cover"
                                            srcSet={`${process.env.IMAGE_URL_PREFIX}photos${image}?fit=cover&width=750&height=750`} />
                                    </picture>
                                </Box>)}
                        </Stack>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}

export default Gallery