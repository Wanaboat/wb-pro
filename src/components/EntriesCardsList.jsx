import React from 'react'
import {
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import EntryCard from './EntryCard'

const EntriesCardsList = ({ nodes }) => {
    return (
        <>
            <SimpleGrid
                columns={{ base: 1, lg: 2, xl: 3 }}
                gap='2rem'
                mx={{ base: 0, lg: '4rem' }}
            >
                { nodes.map(entry =>
                    <EntryCard
                        key={entry.prismicId}
                        node={entry.node}
                    />
                )}
            </SimpleGrid>
        </>
    )
}

export default EntriesCardsList