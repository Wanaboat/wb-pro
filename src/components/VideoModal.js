import React, {useEffect, useCallback} from 'react'
import {
    AspectRatio,
    Button,
    Box,
    Flex,
    Icon
} from '@chakra-ui/react'

import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";
import { FormattedMessage } from 'react-intl';

const VideoModal = ({ currentVideo, pictures, index, isVisible, handleClose, handlePrev, handleNext }) => {

    console.log( 'currentVideo', currentVideo )
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
    return (
        <Modal
            size='full'
            minH='100vh'
            isOpen={isVisible}
            onClose={() => { handleClose() }}
        >
            <ModalOverlay />
            <ModalContent
                minH='100vh'
                borderRadius='0'
                mt='0'
                mb='0'
                p='0'
            >
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
                        <AspectRatio ratio={16 / 9} w='100%' h='100%' maxWidth="100%">
                            { currentVideo ? 
                            <Box
                                w='100%'
                                h='100%'
                                as='iframe'
                                src={currentVideo ? currentVideo : iframePlayerUrl( props.items[0] ) }
                            />
                            : null }
                        </AspectRatio>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default VideoModal