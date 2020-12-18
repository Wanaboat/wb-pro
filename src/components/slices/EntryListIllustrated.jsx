import React from 'react'
import {
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import EntryCard from '../EntryCard'

const EntryListIllustrated = ( props ) => {
    console.log('EntryListIllustrated', props )
    const relatedEntries = props.items
    return(
        <SimpleGrid
            columns={{ base:1, lg:2, xl:  props.items.length === 2 ? 2 : 3}}
            gap='2rem'
            mx={{ base:0, lg:'4rem' }}
        >
            { props.items.map( entry => 
                <EntryCard
                    node={ entry.related_entries.document[0] }
                />
            )}
        </SimpleGrid>
    )
}

export default EntryListIllustrated