import React from 'react'
import { Box } from '@chakra-ui/react'
import '../../styles/wysiwyg.css'

const BodyText = ( props ) => {
    // console.log( 'props', props )
    if( props.data ){
        return(
            <Box
                p={{ base:0, lg:'2rem 4rem'}}
            >
                <div className='wysiwyg' dangerouslySetInnerHTML={ {__html: props.data.text.html }} />
            </Box>
        )
    }else{
        return false
    }

  }
  
  export default BodyText