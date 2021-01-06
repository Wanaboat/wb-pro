
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'

import EntriesCardsList from '../EntriesCardsList'
import EntriesTextList from '../EntriesTextList'

// import linkResolver from '../../utils/linkResolver'

const ChildrenNews = (props) => {
    // console.log('childrenNews', props)
    return (
        props.data.display === 'cards' ?
            <EntriesCardsList nodes={props.childrenNews.edges} />
        :
            <EntriesTextList nodes={props.childrenNews.edges} />
    )
}

export default ChildrenNews