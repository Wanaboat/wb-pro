import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { Box, Link, List, ListItem } from '@chakra-ui/react'
import linkResolver from '../utils/linkResolver'

const SubNav = ( props ) => {
    
    return(
        <Box
            // position={{ xs:'initial', lg:'absolute'}}
            bg={{ lg:'white' }}
            w={{ base:'100%', lg:'100%'}}
            p='.5rem 1rem'
            pl={{ base : '2rem', lg:'1rem' }}
            opacity={{ lg: props.isOpen ? '1' : '0' }}
            transition='opacity 200ms ease'
            pointerEvents={{ lg: props.isOpen ? 'auto' : 'none' }}
            display={{ base:'block', lg: props.isOpen ? 'block' : 'none'}}
        >
            <List>
                { props.items.map( subitem =>
                    <ListItem key={`sub-nav-${subitem.sub_nav_link.uid}`}>
                        <Link
                            to={ linkResolver( subitem.sub_nav_link.document[0].prismicId )}
                            as={ GatsbyLink }
                            display='block'
                            fontWeight='400'
                            color='gray.600'
                            fontSize='16px'
                            py='.25rem'
                        >
                            {
                                `→ ${subitem.sub_nav_link_label.text}`
                            }
                        </Link>
                    </ListItem>
                )}
                
            </List>
        </Box>
    )
}

export default SubNav