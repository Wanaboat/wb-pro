import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box, Button, Flex, Stack, Link
} from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

const Pagination = (props) => {
    const PrevLink = () => {
        return (
            props.data.hasNextPage ?
                <Button
                    as={GatsbyLink}
                    to={`page-${props.data.currentPage - 1}`}
                    color='gray.400'
                    variant='shadow'
                    _hover={{
                        color: 'gray.600'
                    }}
                >← <FormattedMessage id='main.previous' /></Button>
            : null
        )
    }
    const NextLink = () => {
        return (
            props.data.hasNextPage ?
                <Button
                    as={GatsbyLink}
                    to={`page-${props.data.currentPage + 1}`}
                    color='gray.400'
                    variant='shadow'
                    _hover={{
                        color: 'gray.600'
                    }}
                ><FormattedMessage id='main.next' /> →</Button>
            : null
        )
    }
    return (
        <Box>
            <Flex justify='center'>
                <PrevLink />
                <NextLink />
            </Flex>
        </Box>
    )
}

export default Pagination