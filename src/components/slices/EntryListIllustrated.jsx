import React from 'react'
import {
    SimpleGrid
} from '@chakra-ui/react'
import EntryCard from '../EntryCard'

const EntryListIllustrated = ( props ) => {
    // console.log('EntryListIllustrated', props )
    const relatedEntries = props.items
    return(
        <SimpleGrid
            columns={{ base:1, lg:2, xl: 3}}
            gap='2rem'
            mx={{ base:0, lg:'4rem' }}
        >
            { props.items.map( entry => 
                <EntryCard
                    key={ entry.related_entries.document.prismicId }
                    node={ entry.related_entries.document }
                />
            )}
        </SimpleGrid>
    )
}

export default EntryListIllustrated