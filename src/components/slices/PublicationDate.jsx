import React from 'react'
import { FormattedDate } from 'react-intl'
import {
    Box,
    Text
} from '@chakra-ui/react'

const PublicationDate = (props) => {
    console.log('PublicationDate', props)
    return (
        <Box
            mx={{ base: '1rem', lg: '4rem' }}
        >
            <Text
                color='gray.700'
                fontStyle='italic'
            >
                Publié le{' '}
                <FormattedDate
                    value={props.page.publication_date}
                    day="numeric"
                    month="long"
                    year="numeric"
                    // hour="numeric"
                    // minute="numeric"
                />
                {' '}par Sailfast
            </Text>
            <Box>
                {/* { JSON.stringify( props ) } */}
            </Box>
        </Box>
    )
}

export default PublicationDate