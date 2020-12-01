// // src/utils/usePreviewData.js
// import { useMemo } from 'react'
// import { mergePrismicPreviewData } from 'gatsby-source-prismic'

// // Returns true if we're in a browser, false otherwise. This will help guard
// // against SSR issues when building the site.
// const IS_BROWSER = typeof window !== 'undefined'



// export default function usePreviewData(staticData) {
//   return useMemo(() => {
//     const previewData = window.__PRISMIC_PREVIEW_DATA__

//     // console.log( 'IS_BROWSER', IS_BROWSER)
//     // console.log( window.__PRISMIC_PREVIEW_DATA__ )

//     // If we're not in a browser (i.e. we're in SSR) or preview data has not been
//     // set, use the non-preview static data.
//     if (!IS_BROWSER || !window.__PRISMIC_PREVIEW_DATA__) return staticData
//     // console.log('window.__PRISMIC_PREVIEW_DATA__', window.__PRISMIC_PREVIEW_DATA__)
//     // console.log( 'staticData', staticData)
//     console.log( 'previewData', previewData)
//     console.log( 'staticData', staticData)
//     return mergePrismicPreviewData({
//       staticData,
//       previewData: previewData,
//     })
//   }, [staticData])
// }