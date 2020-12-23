export const linkResolver = ( prismicID ) => {
  var data = require('../../paths.js')
  // console.log('nav- paths', data.URIs )
  // console.log('nav- prismicID', prismicID )
  if (!prismicID) {
    return '/'
  } else {
    for (let index = 0; index < data.URIs.length; index++) {
      const element = data.URIs[index];
      if (
        element.prismicID === prismicID
        || element.prismicID === prismicID
      ) {
        
        return `${element.path}`
      }
    }
  }
  console.log('else')
  // Backup for all other types
  return '/'
}

export default linkResolver