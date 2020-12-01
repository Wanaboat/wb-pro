import React from 'react'
import { Box, Flex, Heading, Image, PseudoBox, Stack, Text } from '@chakra-ui/react'

const AdCard = (props) => {
    return (
        <PseudoBox
            display='grid'
            gridTemplateColumns={{ xs:'90px calc( 100% - 90px - 1rem )', lg:'90px calc( 100% - 90px - 2rem )'}}
            gridGap={{ xs:'1rem', lg:'2rem'}}
            cursor='pointer'
            p='.65rem'
            w='100%'
            boxShadow='sm'
            borderRadius='6px'
            border='solid 2px'
            borderColor={ props.isCurrent ? 'brandDark2' : 'white' }
            onClick={
                // 
                ()=> { props.setSingleAdID() }
            }
            _hover={{
                borderColor: 'brandLight2'
            }}
        >
            <Box>
                { props.ad.images ? 
                // <Image
                //     src={`${process.env.IMAGE_URL_PREFIX}photos/${props.ad.images.url[0]}`}
                //     alt={props.ad.name}
                //     w='90px'
                //     h='90px'
                //     loading='lazy'
                // />
                <picture>
                    <source
                        type="image/webp"
                        srcSet={`${process.env.IMAGE_URL_PREFIX}/photos${props.ad.images.url[0]}?fit=cover&width=96&height=96&format=webp`}
                    />
                    <Image
                        alt={ props.ad.name }
                        objectFit='cover'
                        loading='lazy'
                        srcSet={`${process.env.IMAGE_URL_PREFIX}/photos${props.ad.images.url[0]}?fit=cover&width=750&height=750`} />
                </picture>

                :
                <Box
                    bg="gray.50"
                    w='90px'
                    h='90px'
                />
                }
            </Box>
            <Flex wrap='wrap' alignItems='center'>
                <Heading
                    isTruncated
                    as='p'
                    maxW='100%'
                    fontSize='18px'
                    fontWeight='600'
                    color='gray.700'
                    w='100%'
                >
                    {props.ad.name}
                </Heading>
                <Stack alignItems="center" spacing='1rem' isInline>
                    { props.ad.price ?
                    <Text
                        as='span'
                        color='white'
                        backgroundColor='brandDark2'
                        px='.5rem'
                        borderRadius='4px'
                        fontWeight='700'
                    >{props.ad.price}€</Text>
                    : null}
                    { props.ad.refBrand ?
                    <Text
                        as='span'
                        fontSize='16px'
                        color='gray.600'
                        borderBottom='solid 2px'
                        borderBottomColor='brandLight2'                    >
                        { props.ad.refBrand.fields.name}
                    </Text>
                    : null }
                    <Text
                        as='span'
                        fontSize='16px'
                        color='gray.600'
                        borderBottom='solid 2px'
                        borderBottomColor='brandLight2'
                    >
                        { props.ad.year}
                    </Text>
                </Stack>
            </Flex>
        </PseudoBox>
    )
}

export default AdCard