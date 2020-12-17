import React from 'react'
import { 
    Box
} from '@chakra-ui/react'
import ContactForm from '../ContactForm'

const SliceContact = ( props ) => {
    return(
        <Box
            mx={{ base: '1rem', lg: '4rem' }}
        >
            <ContactForm />
        </Box>
    )
}

export default SliceContact