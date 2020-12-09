import React from 'react'
import {
    AspectRatio,
    Box
} from '@chakra-ui/react'

const Video = (props) => {
    console.log('Videoprops', props.data.youtube_link.embed_url)
    const found = props.data.youtube_link.embed_url.split('v=')[1];
    console.log('VideoPropsfound', found)
    let iframeURL = 'https://youtube.com/embed/' + found;
    if (props.data) {
        return (
            <AspectRatio ratio={16 / 9} maxWidth="100%">
                <Box
                    w='100%'
                    h='100%'
                    as='iframe'
                    src={iframeURL}
                />
            </AspectRatio>
        )
    } else {
        return false
    }

}

export default Video