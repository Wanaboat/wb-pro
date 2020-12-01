import React from 'react'
import Helmet from 'react-helmet'
import linkResolver from '../utils/linkResolver'

const BreadcrumbsJSON = ( crumbs ) => {
    console.log( 'crumbs', crumbs)

    const structuredJSON = () => {

        let breadcrumbsItems = [];

        var y = 0
        for (let index = 0; index < crumbs.data.length; index++) {
            const element = crumbs.data[index];
            if (element === null) { continue; }
            y++
            breadcrumbsItems = breadcrumbsItems.concat(
                {
                    "@type": "ListItem",
                    "position": y,
                    "item":
                    {
                        "@id": `${process.env.GATSBY_SITE_URL}${ linkResolver(element.prismicID)}`,
                        "name": `${element.label}`
                    }
                }
            )
        }

        let breadcrumbsList = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbsItems
        }

        return JSON.stringify(breadcrumbsList);
    }

    return(
        <Helmet>
            <script id="breadcrumbs-data" type="application/ld+json">
                {structuredJSON()}
            </script>
        </Helmet>
    )
}

export default BreadcrumbsJSON