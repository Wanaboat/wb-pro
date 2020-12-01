export const linkResolver = ( prismicID ) => {
  var data = require('../../paths.js')
  console.log('paths', data.URIs )
  console.log('prismicID', prismicID )
  if (!prismicID) {
    return '/'
  } else {
    for (let index = 0; index < data.URIs.length; index++) {
      const element = data.URIs[index];
      if (
        element.prismicID === prismicID
        || element.prismicID === prismicID
      ) {
        return `/${element.path}/`
      }
    }
  }
  // Backup for all other types
  return '/'
}

export default linkResolver