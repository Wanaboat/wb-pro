import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    Text
} from '@chakra-ui/react'
import linkResolver from '../utils/linkResolver'
import ButtonSecondary from './ButtonSecondary'
import { FormattedMessage } from 'react-intl'
import { FormattedDate } from 'react-intl'

const EntryCardLarge = ({ node }) => {
    // console.log('EntryCard', node.data.sharing_image.small.url)
    return(
        <Grid
            role="group"
            aria-label={ node.data.title.text }
            title={ node.data.title.text }
            as={ GatsbyLink }
            to={ linkResolver( node.prismicId ) }
            bg='white'
            transition='all 300ms ease'
            borderRadius='2px'
            mx={{ base: '1rem', lg: '4rem' }}
            borderRadius={ 4 }
            gridTemplateColumns={{ base:'100%', lg:'400px 1fr'}}
            _hover={{
                transform:'scale(1.02)',
                boxShadow:'0 0 15px rgba(100,100,100,.1)'
            }}
        >
            <Box>
                {
                    node.data.sharing_image ? 
                    node.data.sharing_image.thumbnails ?
                    <Image
                        src={
                            node.data.sharing_image.thumbnails.small 
                                ? node.data.sharing_image.thumbnails.small.url
                                : node.data.sharing_image.url }
                        alt={ node.data.title.text }
                        w='100%'
                        loading='lazy'
                    />
                    : null : null
                }
            </Box>

            <Flex
                alignItems='center'
                // justifyContent='space-between'
                // alignContent='flex-end'
                p='1rem'
                wrap='wrap'
            >
                <Box 
                    mb='2rem'
                    w='100%'
                >
                    <Heading
                        as='h2'
                        fontWeight='bold'
                        fontSize='28px'
                        mb='1rem'
                        w='100%'
                        // minH='80px'
                    >
                        { node.data.title.text }
                    </Heading>
                    <Text w='100%' color='gray.400' mb='1rem'>
                        <FormattedDate
                            value={ node.data.publication_date }
                            day="numeric"
                            month="long"
                            year="numeric"
                        />
                    </Text>
                </Box>
                
                <Box w='100%'>
                    <ButtonSecondary>
                        <FormattedMessage id="main.discover" />
                    </ButtonSecondary>
                </Box>
            </Flex>
        </Grid>
    )
}

export default EntryCardLarge