import React from 'react'
import {
    SimpleGrid
} from '@chakra-ui/react'
import EntryCard from '../EntryCard'

const AllLastNews = ( props ) => {
    // console.log('AllLastNews', props )
    return(
        <SimpleGrid
            columns={{ base:1, lg:3 }}
            mx={{ base:'1rem', lg: '4rem' }}
            gap='2rem'
        >
            { props.posts.edges.map( (entry,i) =>
             i < 3 ? 
                <EntryCard
                    key={ entry.node.prismicId}
                    node={ entry.node }
                />
            : null
            )}
        </SimpleGrid>
    )
}

export default AllLastNews