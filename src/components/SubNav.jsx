import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { Box, Link, List, ListItem } from '@chakra-ui/react'

const SubNav = ( props ) => {
    const resolve = ( link ) => {
        if( link.document.data.parent ){
            return `/${link.document.data.parent.uid}/${link.document.uid}`
        }
        else{
            return link.document.uid
        }
    } 
    return(
        <Box
            position={{ xs:'initial', lg:'absolute'}}
            top='48px'
            bg={{ lg:'white' }}
            w={{ xs:'100%', lg:'120%'}}
            p='.5rem 1rem'
            pl={{ xs : '2rem', lg:'1rem' }}
            opacity={{ lg: props.isOpen ? '1' : '0' }}
            transition='opacity 200ms ease'
            pointerEvents={{ lg: props.isOpen ? 'auto' : 'none' }}
            display={{ xs: props.isOpen ? 'block' : 'none', lg:'block' }}
        >
            {/* <List>
                { props.items.map( subitem =>
                    <ListItem key={`sub-nav-${subitem.sub_nav_link.uid}`}>
                        <Link
                            to={resolve( subitem.sub_nav_link )}
                            as={ GatsbyLink }
                            display='block'
                            fontWeight='400'
                            color='gray.600'
                            fontSize='18px'
                            py='.25rem'
                        >
                            {
                                `→ ${subitem.sub_nav_link_label.text}`
                            }
                        </Link>
                    </ListItem>
                )}
                
            </List> */}
        </Box>
    )
}

export default SubNav