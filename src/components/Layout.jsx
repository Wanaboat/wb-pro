import React from 'react'
import { IntlProvider } from 'react-intl';
import { Box, Grid, ChakraProvider } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'
import translations from './translations'

const Layout = (props) => {
  return (
    <IntlProvider
      locale={'fr'}
      defaultLocale={'fr'}
      messages={translations['fr']}
    >
      <ChakraProvider>
        {props.nav ? <Nav items={props.nav} /> : null}
        Layout
        <Grid
          templateColumns={{ xs: '100%', l:'200px 1fr' }}
          gap={{ xl: '5rem' }}
        >
          <Box as="main"
            minH={{ xl: 'calc( 100vh - 122px - 246px)' }}
          >
            {props.children}
          </Box>
        </Grid>
        {props.settings ?
          <Footer settings={props.settings} />
          : null}
      </ChakraProvider>
    </IntlProvider>
  )
}

export default Layout