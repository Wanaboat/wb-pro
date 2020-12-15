import React, {useEffect, useCallback} from 'react'
import { Button, Box, Flex, Icon } from '@chakra-ui/react'

import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";
import { FormattedMessage } from 'react-intl';

const GalleryModal = ({ pictures, index, isVisible, handleClose, handlePrev, handleNext }) => {
    // console.log( 'pictures', pictures )
    // const keyPressFunction = useCallback((event) => {

    //     if(event.keyCode === 39) {
    //         handlePrev()
    //     }
    //     if(event.keyCode === 37) {
    //         handlePrev()
    //       }
    //   }, []);
    
    //   useEffect(() => {
    //     document.addEventListener("keydown", keyPressFunction, false);
    
    //     return () => {
    //       document.removeEventListener("keydown", keyPressFunction, false);
    //     };
    //   }, []);
    console.log( 'pictures', pictures)
    return (
        <Modal
            size='full'
            minH='100vh'
            isOpen={isVisible}
            onClose={() => { handleClose() }}
            // zIndex='99999999999999999'
        >
            <ModalOverlay />
            <ModalContent
                minH='100vh'
                borderRadius='0'
                mt='0'
                mb='0'
                p='0'
            >
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                <ModalBody
                    p='0'
                >
                    <Box
                        p='1rem'
                    >
                        <Button
                            onClick={() => { handleClose() }}
                            variant='outline'
                            // color='gray.50'
                            alignItems='center'
                            _hover={{
                                color:'gray.800',
                                bg:'gray.100'
                            }}
                        >
                            {/* <Icon mr='.5rem' name='arrow-back' /> */}
                            <FormattedMessage id="main.back" />
                        </Button>
                    </Box>
                    <Box
                        justifyContent='center'
                        alignItems='center'
                        display='flex'
                        position='relative'
                        w='100%'
                        h='calc( 100vh - 72px )'
                        bg='gray.800'
                        px='2rem'
                    >
                        <Flex
                            position='absolute'
                            py='1rem'
                            top='0'
                            left='1rem'
                            h='calc( 100vh - 72px )'
                            alignItems={{ base:'flex-end', lg:'center'}}
                            pl={{ xs:'1rem', lg:'2rem' }}

                        >
                            <Button
                                onClick={ handlePrev }
                            >
                                <FormattedMessage id='main.previous' />
                            </Button>
                        </Flex>
                        <Flex
                            position='absolute'
                            py='1rem'
                            top='0'
                            right='1rem'
                            h='calc( 100vh - 72px )'
                            alignItems={{ base:'flex-end', lg:'center'}}
                            pr={{ xs:'1rem', lg:'2rem' }}
                        >
                            <Button
                                onClick={ handleNext }
                            >
                                <FormattedMessage id='main.next' />
                            </Button>
                        </Flex>
                        {pictures && index ?
                            <>
                                <Image
                                    display='block'
                                    mx='auto'
                                    maxH='calc(100vh - 72px)'
                                    src={
                                        pictures[index-1].gallery_image.url
                                    }
                                />
                                <Box
                                    display={ pictures[index-1].gallery_image.alt ? 'block' : 'none' }
                                    boxShadow='sm'
                                    position='absolute'
                                    bottom='3rem'
                                    p='.5em .75rem'
                                    bg='white'
                                    borderRadius='3px'
                                    maxW='300px'
                                    textAlign='center'
                                >
                                    {pictures[index-1].gallery_image.alt}
                                </Box>
                            </>
                            : null}

                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default GalleryModal