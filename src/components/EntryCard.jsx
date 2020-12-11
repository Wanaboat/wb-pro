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
    return(
        <Box
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
            <Image
                src={
                    node.data.sharing_image.small 
                        ? node.data.sharing_image.small.url
                        : node.data.sharing_image.url }
                alt={ node.data.title.text }
                w='100%'
            />
            <Box
             p='1rem'
            >
            <Text
                fontWeight='bold'
                fontSize='18px'
                mb='2rem'
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