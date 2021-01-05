import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Image,
    Text
} from '@chakra-ui/react'
import linkResolver from '../utils/linkResolver'
import ButtonSecondary from './ButtonSecondary'
import { FormattedMessage } from 'react-intl'

const EntryCard = ({ node }) => {
    // console.log('EntryCard', node.data.sharing_image.small.url)
    return(
        <Box
            role="group"
            aria-label={ node.data.title.text }
            title={ node.data.title.text }
            as={ GatsbyLink }
            to={ linkResolver( node.prismicId ) }
            bg='white'
            transition='all 300ms ease'
            borderRadius='2px'
            _hover={{
                transform:'scale(1.02)',
                boxShadow:'0 0 15px rgba(100,100,100,.1)'
            }}
        >
            { node.data.sharing_image ? 
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
            : null : null }
            <Box
             p='1rem'
            >
            <Text
                fontWeight='bold'
                fontSize='18px'
                mb='2rem'
                // minH='80px'
            >
                { node.data.title.text }
            </Text>
            <ButtonSecondary>
                <FormattedMessage id="main.discover" />
            </ButtonSecondary>
            </Box>
           
        </Box>
    )
}

export default EntryCard