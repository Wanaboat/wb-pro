import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Link,
    Text,
    Stack
} from '@chakra-ui/react'
import BreadcrumbsJSON from './BreadcrumbsJSON'
import linkResolver from '../utils/linkResolver'
const Breadcrumbs = (node) => {
    console.log('BreadcrumbsData', node)
    const hierarchyData = () => {
        let hierarchy = []
        if (node.data.prismicId) {
            hierarchy.push(
                {
                    prismicID: node.data.prismicId,
                    label: node.data.data.title.text
                }
            )
            if (node.data.data.parent.document) {
                hierarchy.push(
                    {
                        prismicID: node.data.data.parent.document.prismicId,
                        label: node.data.data.parent.document.data.short_name
                    }
                )
                if (node.data.data.parent.document.data.parent.document) {
                    hierarchy.push(
                        {
                            prismicID: node.data.data.parent.document.data.parent.document.prismicId,
                            label: node.data.data.parent.document.data.parent.document.data.short_name
                        }
                    )
                    if (node.data.data.parent.document.data.parent.document.data.parent.document) {
                        hierarchy.push(
                            {
                                prismicID: node.data.data.parent.document.data.parent.document.data.parent.document.prismicId,
                                label: node.data.data.parent.document.data.parent.document.data.parent.document.data.short_name
                            }
                        )
                        if (node.data.data.parent.document.data.parent.document.data.parent.document.data.parent.document) {
                            hierarchy.push(
                                {
                                    prismicID: node.data.data.parent.document.data.parent.document.data.parent.document.data.parent.document.prismicId,
                                    label: node.data.data.parent.document.data.parent.document.data.parent.document.data.parent.document.data.short_name
                                }
                            )
                        }
                    }
                }
            }
        }

        hierarchy.push(
            {
                prismicID: '',
                label: 'SailFast.fr'
            }
        )

        return hierarchy.reverse()
    }
    const crumbs = hierarchyData()
    return (
        <Stack
            isInline
            p={{ base:'.5rem 1rem'}}
            fontSize={{ base:'12px', lg:'13px'}}
            bg='#FEFEFE'
            spacing='0'
        >
            {
                crumbs.length ?
                    crumbs.map((item, index) =>
                        <Box
                            key={ `${item.prismicID}`}
                        >
                            {index != (crumbs.length - 1) ?
                                <>
                                    <Link
                                        as={ GatsbyLink}
                                        to={linkResolver(item.prismicID)}
                                    >
                                        {item.label}
                                        {/* {item.prismicID } */}
                                    </Link>
                                    <Text mx='.5rem' as='span' color='gray.400'>/</Text>
                                </>
                                :
                                <Text
                                    color='brand.2'
                                    fontStyle='italic'
                                >
                                    {item.label}
                                </Text>
                            }
                        </Box>
                    )
                : null
            }
            <BreadcrumbsJSON data={ crumbs } />
        </Stack>
    )
}

export default Breadcrumbs