// src/pages/preview.js

import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { navigate, useStaticQuery } from 'gatsby'
import { usePrismicPreview } from 'gatsby-source-prismic'
import linkResolver from '../utils/linkResolver'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
// Note that the `location` prop is taken and provided to the `usePrismicPreview` hook.
const PreviewPage = ({ location }) => {
  // Let's use a static query to retrieve all known paths. We'll use it later
  // to navigate to the unpublishedPreview page if the document is not
  // published.

  const { allSitePage } = useStaticQuery(graphql`
    {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  console.log('allSitePage', allSitePage)

  console.log('location', location)
  const allPaths = allSitePage.nodes.map((node) => node.path)

  console.log('allPaths', allPaths)


  const { isPreview, previewData, path } = usePrismicPreview({
    // The repositoryName value from your `gatsby-config.js`.
    repositoryName: 'sailfast',
  })


  
  console.log(isPreview, previewData, path);

  // This useEffect runs when values from usePrismicPreview update. When
  // preview data is available, this will save the data globally and redirect to
  // the previewed document's page.
  useEffect(() => {
    // If this is not a preview, skip.
    //   null = Not yet determined if previewing.
    //   true = Preview is available.
    //   false = Preview is not available.
    if (isPreview === false || !previewData) return

    // Save the preview data to somewhere globally accessible. This could be
    // something like a global Redux store or React context.
    //
    // We'll just put it on window.
    window.__PRISMIC_PREVIEW_DATA__ = previewData

    // navigate( `/${previewData.prismicPage.uid}` )
    if (previewData.prismicPage) {
      console.log('previewData.prismicPage', previewData.prismicPage.prismicId, linkResolver(previewData.prismicPage.prismicId) )
      // alert( JSON.stringify( previewData ))
      // alert( linkResolver(previewData.prismicPage) )
      navigate(linkResolver(previewData.prismicPage.prismicId))
    }
    // else{
    //   navigate( `/` )
    // }



    // allPaths.forEach(path => {
    //   if (previewData.prismicPage.prismicId) {
    //     if (path.includes(previewData.prismicPage.uid)) {
    //       navigate(linkResolver(prismicId))
    //     }
    //   }

    //   if (previewData.prismicProduct.uid) {
    //     if (path.includes(previewData.prismicProduct.uid)) {
    //       // navigate(`${ path }`)
    //       navigate(linkResolver(prismicId))

    //     }
    //   }


    // });

    // Navigate to the document's page if page exists.
    // if (allPaths.includes(previewData.prismicPage.uid)) {
    //   navigate(`/${previewData.prismicPage.uid}`)
    // } else {
    //   //   navigate('/')
    // }
  }, [isPreview, previewData, path])

  // Tell the user if this is not a preview.
  if (isPreview === false) return (
    <Flex h='100vh' alignItems='center' justify='center'>
      <Spinner /><Text fontFamily='Arial' textTransform='uppercase' letterSpacing='0.1rem' fontSize='14px' fontWeight='bold' color='#777'>Not a preview...</Text>
    </Flex>
  )
  return (
    <Flex h='100vh' alignItems='center' justify='center'>
      <Spinner /><Text fontFamily='Arial' textTransform='uppercase' letterSpacing='0.1rem' fontSize='14px' fontWeight='bold' color='#777'>Loading preview...</Text>
    </Flex>
  )
}

export default PreviewPage