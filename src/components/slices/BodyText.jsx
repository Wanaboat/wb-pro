import React from 'react'
import { Box } from '@chakra-ui/react'
import '../../styles/wysiwyg.css'
import {Link, RichText, Date} from 'prismic-reactjs';
import linkResolver from '../../utils/linkResolver';
const BodyText = ( props ) => {
    // console.log( 'props', props )
    if( props.data ){
        return(
            <Box
                p={{ base:'0 1rem', lg:'1rem 4rem'}}
                fontSize={{ base:'15px', lg:'18px'}}
                className='wysiwyg'
            >
                {RichText.render( props.data.text.raw, linkResolver )}
                {/* { JSON.stringify( props.data , null, 2 )} */}
                {/* <div className='wysiwyg' dangerouslySetInnerHTML={ {__html: props.data.text.html }} /> */}
            </Box>
        )
    }else{
        return false
    }

  }
  
  export default BodyText