 import React, { useEffect } from 'react'
 const preview = () => {
   return(<div>preview</div>)
 }

 export default preview

// import { graphql, navigate, useStaticQuery } from 'gatsby'
// import { usePrismicPreview } from 'gatsby-source-prismic'
// import { Box, Flex, Spinner } from '@chakra-ui/react'
// // Note that the `location` prop is taken and provided to the `usePrismicPreview` hook.
// const PreviewPage = ({ location }) => {
//   // Let's use a static query to retrieve all known paths. We'll use it later
//   // to navigate to the unpublishedPreview page if the document is not
//   // published.
//   const { allSitePage } = useStaticQuery(graphql`
//     {
//       allSitePage {
//         nodes {
//           path
//         }
//       }
//     }
//   `)
//   const allPaths = allSitePage.nodes.map((node) => node.path)

//   const { isPreview, previewData, path } = usePrismicPreview({
//     // The repositoryName value from your `gatsby-config.js`.
//     repositoryName: 'wanaboat',
//   })

//   // console.log( isPreview, previewData, path )

//   // This useEffect runs when values from usePrismicPreview update. When
//   // preview data is available, this will save the data globally and redirect to
//   // the previewed document's page.
//   useEffect(() => {
//     // If this is not a preview, skip.
//     //   null = Not yet determined if previewing.
//     //   true = Preview is available.
//     //   false = Preview is not available.
//     // if (isPreview === false || !previewData) return

//     // Save the preview data to somewhere globally accessible. This could be
//     // something like a global Redux store or React context.
//     //
//     // We'll just put it on window.
//     window.__PRISMIC_PREVIEW_DATA__ = previewData
//     console.log(  'previewData', previewData )
//     console.log( isPreview, previewData, path )

//     if(
//       previewData && window.__PRISMIC_PREVIEW_DATA__
//       && previewData.prismicHomepage
//     ){
//       navigate('/')
//     }

//     if(
//       previewData && window.__PRISMIC_PREVIEW_DATA__
//       && previewData.prismicPage
//     ){
//       if( previewData.prismicPage.dataRaw.parent ){
//         navigate(`/${previewData.prismicPage.dataRaw.parent.uid}/${previewData.prismicPage.uid}`)

//       }
//       else{
//         navigate(`/${previewData.prismicPage.uid}`)
//       }
//       console.log( previewData.prismicPage )
//     }
    
//     if(
//       previewData && window.__PRISMIC_PREVIEW_DATA__
//       && previewData.prismicPost
//     ){
//       navigate(`/blog/${previewData.prismicPost.uid}`)
//     }

//     if(
//       previewData && window.__PRISMIC_PREVIEW_DATA__
//       && previewData.prismicProduct
//     ){
//       navigate(`/bateaux/${previewData.prismicProduct.uid}`)
//     }

//     // }
//     // Navigate to the document's page if page exists.
//     // if (allPaths.includes(path)) {
//     //   navigate(previewData.uid)
//     // } else {
//     //   navigate('/')
//     // }
//   }, [isPreview, previewData, path])

//   // Tell the user if this is not a preview.
//   if (isPreview === false)
//     return (
//       <Box >
//         <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
//           Cette page n'est pas une prévisualisation valide
//         </Flex>
//       </Box>
//     )
  

//   return (
//     <Box >
//       <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
//         <Spinner />
//       </Flex>
//     </Box>
//   )
// }

// export default PreviewPage