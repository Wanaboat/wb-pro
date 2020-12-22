import React, { useState } from 'react'
import axios from 'axios'
import {
    Alert,
    AlertIcon,
    Box,
    Text,
    Input,
    SimpleGrid
} from '@chakra-ui/react'
import ButtonSecondary from './ButtonSecondary'

const ContactForm = ({ context }) => {

    console.log('context', context)

    const [sent, setSent] = useState(false)

    const
        emailInput = React.createRef(),
        nameInput = React.createRef(),
        messageInput = React.createRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(' submit ')

        console.log(
            emailInput.current.value,
            nameInput.current.value,
            messageInput.current.value,
        )
        axios.post('/.netlify/functions/sendmail',
            {
                "name": nameInput.current.value,
                "email": emailInput.current.value,
                "message": messageInput.current.value,
                "context": context
            }
        )
            .then(function (response) {
                setSent(true)
            })

    }
    return (
        !sent ?
            <Box
                as='form'
                bg='white'
                onSubmit={(e) => { handleSubmit(e) }}
            >
                <SimpleGrid columns={{ base: 1, lg:2 }}>
                    <Input
                        placeholder='Prénom/Nom'
                        type='text'
                        border='none'
                        borderRadius='0'
                        // borderRight={{ base:'none', lg:'solid 1px' }}
                        // borderRightColor={{ base:'gray.200' }}
                        borderBottom={{ base:'solid 1px', lg:'none' }}
                        borderBottomColor='gray.200'
                        p='1.5rem'
                        ref={nameInput}
                        required

                    />
                    <Input
                        placeholder='email'
                        type='email'
                        border='none'
                        borderRadius='0'
                        p='1.5rem'
                        ref={emailInput}
                        required
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
                    ref={messageInput}
                    _focus={{
                        borderStyle: 'none',
                        bg: 'gray.50'
                    }}
                    _active={{
                        borderStyle: 'none',
                        bg: 'gray.50'
                    }}
                    required
                />
                <Box
                    p='1rem 1.5rem'

                >
                    <ButtonSecondary
                        type='submit'
                    >Envoyer</ButtonSecondary>

                </Box>
            </Box>
            :
            <Box
                bg='white'
                p='1rem'
            >
                <Alert status="success">
                    <AlertIcon />
                    Votre message a bien été envoyé, je vous recontacte très vite, merci !
                </Alert>
            </Box>
    )
}

export default ContactForm