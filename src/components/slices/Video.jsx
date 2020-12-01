import React from 'react'
import { Box } from '@chakra-ui/react'
import '../../styles/wysiwyg.css'

const Video = ( props ) => {
    // console.log( 'Videoprops', props.data.youtube_link )
    if( props.data ){
        return(
            <Box maxW='800px' fontFamily='Source Sans Pro'>
               <div dangerouslySetInnerHTML={ {__html: props.data.youtube_link.html }} />
            </Box>
        )
    }else{
        return false
    }

  }
  
  export default Video