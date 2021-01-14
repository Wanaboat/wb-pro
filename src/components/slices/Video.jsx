import React, { useState } from 'react'
import {
    AspectRatio,
    Box,
    Flex,
    Image,
    Heading,
    Stack,
    Text,
    SimpleGrid
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import VideoModal from '../VideoModal'

const Video = (props) => {

    const [currentVideo, setCurrentVideo] = useState(false)

    // console.log('Videoprops', props.items)
    const iframePlayerUrl = (video) => {
        if (video.youtube_link.embed_url) {
            console.log('video', video)
            let extractId = video.youtube_link.embed_url.split('v=')[1]
            console.log('extractId', extractId)
            let iframeURL = 'https://youtube.com/embed/' + extractId;
            // console.log('extractId', extractId)
            return iframeURL
        } else {
            return false
        }

    }
    if (props.items) {
        return (
            <Box id='videos'>
                <Box
                    m={{ base: '1rem', lg: '1rem 4rem' }}
                    p='1rem'
                    bg='white'
                >
                    <Heading
                        as='h4'
                        mb='1rem'
                        fontWeight='normal'
                        textTransform='uppercase'
                        letterSpacing='0.05rem'
                        fontSize={{ base: '16px', lg: '18px' }}
                    >
                        Notre playlist video&nbsp;:
                    </Heading>
                    <SimpleGrid
                        gap='1rem'
                        columns={{ base: 1, lg: 3, xl: 4 }} isInline
                    >
                        {props.items.map((video, i) =>
                            <Box
                                onClick={() => { setCurrentVideo(iframePlayerUrl(video)) }}
                                position='relative'
                                key={`video-playlist-item-${i}`}
                            >
                                <Flex
                                    cursor='pointer'
                                    color='white'
                                    justify='center'
                                    align='center'
                                    position='absolute'
                                    top='0'
                                    left='0'
                                    w='100%'
                                    h='100%'
                                    bg='rgba(10,10,10,0.3)'
                                    zIndex='banner'
                                    transition='background 200ms ease'
                                    _hover={{
                                        bg: 'rgba(10,10,10,0.5)'
                                    }}
                                >
                                    <ChevronRightIcon w={12} h={12} />
                                </Flex>
                                <Image
                                    loading='lazy'
                                    cursor='pointer'
                                    borderBottom={props.items.length != i + 1 ? 'solid 1px' : 'none'}
                                    borderBottomColor='gray.100'
                                    // p='1rem'
                                    _hover={{
                                        bg: 'gray.50'
                                    }}
                                    src={video.youtube_link.thumbnail_url}
                                />
                            </Box>
                        )}
                    </SimpleGrid>
                </Box>
                <Text>
                    {currentVideo}
                </Text>
                <VideoModal
                    currentVideo={currentVideo ? currentVideo : iframePlayerUrl(props.items[0])}
                    handleClose={() => { setCurrentVideo(false) }}
                    handlePrev={() => { setCurrentVideo(false) }}
                    handleNext={() => { setCurrentVideo(false) }}
                    isVisible={currentVideo ? true : false}
                />
                {/* <AspectRatio ratio={16 / 9} maxWidth="100%">
                        <Box
                            w='100%'
                            h='100%'
                            as='iframe'
                            src={currentVideo ? currentVideo : iframePlayerUrl( props.items[0] ) }
                        />
                    </AspectRatio> */}

            </Box>
        )
    } else {
        return false
    }

}

export default Video