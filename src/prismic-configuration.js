// // In src/prismic-configuration.js
// export const linkResolver = (doc) => {
//     // URL for a category type
//     if (doc.type === 'category') {
//       return `/category/${doc.uid}`
//     }
//     // URL for a product type
//     if (doc.type === 'product') {
//       return `/bateaux/${doc.uid}`
//     }
//     // URL for a page type
//     if (doc.type === 'page') {
//       return `/${doc.uid}`
//     }
//     // URL for a page type
//     if (doc.type === 'post') {
//         return `/${doc.uid}`
//         }
//     // Backup for all other types
//     return '/'
//   }