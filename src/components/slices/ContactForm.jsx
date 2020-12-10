import React from 'react'

import { 
    Box,
    Text,
    Input,
    SimpleGrid
} from '@chakra-ui/react'
import ButtonSecondary from '../ButtonSecondary'

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(' submit ')

    }
    return(
        <Box
            as='form'
            bg='white'
            onSubmit={ (e) => { handleSubmit(e) } }
            mx={{ base:'1rem', lg:'4rem'}}
        >
            <SimpleGrid columns='2'>
                <Input
                    placeholder='Prénom/Nom'
                    type='text'
                    border='none'
                    borderRadius='0'
                    borderRight='solid 1px'
                    borderRightColor='gray.100'
                    p='1.5rem'
                />
                <Input
                    placeholder='email'
                    type='email'
                    border='none'
                    borderRadius='0'
                    p='1.5rem'
                />
            </SimpleGrid>
            <Box
                borderTop='solid 1px'
                borderTopColor='gray.200'
                borderRadius='0'
                display='block'
                as='textarea'
                p='1.5rem'
                placeholder='Votre question'
                w='100%'
                borderRadius='0'
                _focus={{
                    borderStyle:'none',
                    bg:'gray.50'
                }}
            />
            <Box
                p='1rem 1.5rem'

            >
                Test
            <ButtonSecondary
                type='submit'
            >Envoyer</ButtonSecondary>

            </Box>
        </Box>
    )
}

export default ContactForm