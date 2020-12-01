import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Button, Box, Heading, Image, Stack, Text, Spinner } from '@chakra-ui/react'
import Gallery from './Gallery'
import { useContentful } from 'react-contentful'
import { FormattedMessage } from 'react-intl'
import { useClipboard } from "@chakra-ui/react";

const ReactMarkdown = require('react-markdown')

const SingleAdLoader = (props) => {
    const [viewingGallery, setViewingGallery] = useState(false)
    const { onCopy, hasCopied } = useClipboard( `${ process.env.SITE_URL}/${process.env.PRODUCT_BASE_SLUG}/${process.env.ADS_BASE_SLUG}/${props.adID}` );
    const { data, error, fetched, loading } = useContentful({
        contentType: 'ad',
        query: {
            // 'content_type': 'ad',
            'sys.id[in]': `${props.adID}`,

            // 'fields.user.sys.id': `14`,
            locale: 'fr',

        }
    });

    if (loading || !fetched) {
        return null;
        <Box>
            <Spinner />
        </Box>
    }

    if (error) {
        console.error(error);
        return null;
    }

    if (!data) {
        return <p>Page does not exist.</p>;
    }

    // See the Contentful query response
    // console.debug(data);
    // console.log(data);
    const ad = data.items[0].fields
    // Process and pass in the loaded `data` necessary for your page or child components.
    return (

        <Stack
            spacing='1rem'
            shouldWrapChildren={true}
            bg='brandLightPrimary'
            borderRadius={{ xs: '0', lg: '10px' }}
            overflow='hidden'
            boxShadow='sm'
            maxH={{ xl: 'calc( 100vh - 4rem )' }}
            overflowY='auto'

            w={{ xs: '100vw', lg: 'auto' }}
            h={{ xs: '100vh', lg: 'auto' }}
            pb={{ xs:'7rem', lg:'0'}}
            zIndex='tooltip'
        >

            { viewingGallery ? <Gallery close={() => { setViewingGallery(false) }} images={ad.images.url} /> : null}

            
            <Box
                position='relative'
                onClick={
                    ad.images.url.length > 1 ?
                        () => { setViewingGallery(true) }
                        :
                        () => { console.log('no gallery') }
                }
            >
            <Box
                top='10rem'
                left='0rem'
                p='1rem'
                position='absolute'
                bg='red.400'
                zIndex='tooltip'
                w='100%'
                background='linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6540178571428572) 100%)'
                >
                <Button
                // variant='outline'
                display={{ xs: 'flex', lg: 'none' }}
                // m='1rem'
                size='sm'
                
                variant='outline'
                color='white'
                onClick={() => { props.close() }}
            >
                ← <FormattedMessage id="main.back" /></Button>
                </Box>
                
                <Button
                    bottom='1rem'
                    right='1rem'
                    variantColor='ghost'
                    borderBottom='solid 2px'
                    borderBottomColor='brandLight2'
                    borderRadius='0'
                    position='absolute'>{ad.images.url.length} <FormattedMessage id='main.pictures' /> →</Button>
                    {/* <Image
                        mt={{ xs: '-10rem', lg: '-20rem' }}
                        src={`${process.env.IMAGE_URL_PREFIX}photos/${ad.images.url[0]}?fit=cover&width=750&height=750&format=webp`}
                        alt={ad.name}
                    /> */}
                <Box
                    mt={{ xs: '-10rem', lg: '-20rem' }}
                    cursor='pointer'
                    bg='brandDark1'
                    minH={{ xs:'340px', lg:'630px'}}
                >
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`${process.env.IMAGE_URL_PREFIX}/photos/${ad.images.url[0]}?fit=cover&width=750&height=750&format=webp`}
                        />
                        <Image
                            alt={ad.name}
                            objectFit="cover"
                            srcSet={`${process.env.IMAGE_URL_PREFIX}/photos/${ad.images.url[0]}?fit=cover&width=750&height=750`} />
                    </picture>
                </Box>

            </Box>
            <Stack p={{ xs:'1rem', lg:'1rem 2rem'}} pb='2rem' spacing='1rem'>
                <Heading
                    fontSize='26px'
                >{ad.name}</Heading>
                <Stack isInline spacing='1rem'>
                    {ad.year ?
                        <Text>{ad.year}</Text>
                        : null}
                    {ad.price && ad.price > 0 ?
                        <Box
                            as='span'
                            display='flex'
                            color='white'
                            fontWeight='bold'
                            backgroundColor='brandDark2'
                            px='.5rem'
                            borderRadius='4px'
                            alignItems='center'
                            
                        >{`${ad.price}`}&nbsp;€</Box>
                        : null}
                    {ad.refBrand ?
                        <Text
                            as='span'
                            fontSize='16px'
                            color='gray.600'
                            borderBottom='solid 2px'
                            borderBottomColor='brandLight2'
                        >
                            {ad.refBrand.fields.name}
                        </Text>
                        : null}
                        <Box>
                        {/* <Input value={'value'} isReadOnly placeholder="Welcome" /> */}

                        </Box>

                </Stack>
                <Box fontSize="16px">
                    <ReactMarkdown source={ad.content} />
                </Box>
                <Stack isInline spacing='1rem'>
                    <Button
                        as={ GatsbyLink }
                        to={ `/${process.env.CONTACT_PAGE_UID}` }
                        bg='brandLight2'
                        w='auto'
                        color='gray.800'
                        p='.5rem 1rem'
                        cursor='pointer'
                        borderRadius='3px'
                        justifyContent='center'
                        display='flex'
                        leftIcon='email'
                        _hover={{
                            bg:'brandDark2',
                            color:'white'
                        }}
                    >
                        <FormattedMessage id='main.contact.us' />
                    </Button>
                    <Button
                        variant='outline'
                        size='small'
                        fontSize='12px'
                        p='.25rem .75rem'
                        leftIcon='link'
                        bg='white'
                        onClick={onCopy}
                    >
                        {hasCopied ? <FormattedMessage id='main.copied' /> : <FormattedMessage id='main.direct.link' />}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default SingleAdLoader