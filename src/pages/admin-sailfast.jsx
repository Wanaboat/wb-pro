import React, {useState} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import {
    Box,
    Heading,
    Button,
    Image,
    Flex,
    Stack
} from '@chakra-ui/react'
import Helmet from 'react-helmet'

const AdminPage = () => {
    const [buildTriggerResponse, setBuildTriggerResponse] = useState('123')

    const triggerBuild = () => {
        console.log('triggerBuild')
        axios.post(`https://api.netlify.com/build_hooks/5ff5b9de62ce80d450be6afc`)
            .then(function (response) {
                alert('Build just triggered, new version live in 2 minutes.')
                console.log(response)
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                setBuildTriggerResponse(time)
            });
    }

    return (
        <Layout nav={null} settings={null}>
            <Flex alignItems='center' justifyContent='center' h='100vh'>
                <Helmet>
                    <meta name="robot" value="noindex" />
                    <title>Administration du site</title>
                </Helmet>
                <Box>
                    <Heading mb='1rem'>Administratoin du site</Heading>
                    <Stack isInline spacing='1rem'>
                        <Button onClick={() => { triggerBuild() }}>Déclencher la construction du site</Button>
                        <Button as='a' target='_blank' href='https://sailfast.prismic.io'>Accès à Prismic</Button>
                        <Image
                            key={ buildTriggerResponse }
                            h='16px'
                            src={'https://api.netlify.com/api/v1/badges/5c04fd8a-30db-4740-bbd4-ff712fe5feef/deploy-status'}
                            alt='Build status'
                        />
                    </Stack>
                </Box>
            </Flex>
        </Layout>
    )
}

export default AdminPage