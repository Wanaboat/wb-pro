import React, { useState } from 'react'
import { IntlProvider } from 'react-intl';
import { AspectRatio, Box, Grid, ChakraProvider, Image, Flex, CSSReset, Text, GridItem } from '@chakra-ui/react'
import NavVertical from './NavVertical'
import Footer from './Footer'
import translations from './translations'
// import theme from '../gatsby-plugin-chakra-ui/theme'
import { IconButton } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import logo from '../images/logo-sailfast.png'
import logo_large from '../images/logo-sailfast-large.png'

import { HamburgerIcon } from '@chakra-ui/icons'

// 2. Call `extendTheme` and pass your custom values
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1500px"

})

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    1: "#d2181e",
    2: "#283daa",
    3: "#063462", // dark blue
  },
}

const fonts = {
  body: "Source sans pro, sans-serif",
  heading: "Source sans pro",
  mono: "Menlo, monospace",
}

const theme = extendTheme({ fonts, breakpoints, colors })


// const theme = extendTheme({
//   breakpoints : {
//     sm: "30em",
//     md: "48em",
//     lg: "62em",
//     xl: "80em",
//   },
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// })


console.log('theme', theme)

const Layout2 = (props) => {
  const [ navOpen, setNavOpen ] = useState( false )
  return (
    <IntlProvider
      locale={'fr'}
      defaultLocale={'fr'}
      messages={translations['fr']}
    >
      <ChakraProvider
        theme={theme}
      >
        {/* Layout 2 */}
        <CSSReset />
        {/* {props.nav ? <Nav items={props.nav} /> : null} */}
        <Grid
          templateColumns={{
            base: '100vw',
            lg: '350px 1fr',
            xl: '400px 1fr',
            xxl: '600px 1fr'
          }}
          gap={{ xl: '0rem' }}
          bg='gray.50'
          maxW='100vw'
          borderColor={{
            base: 'gray.400',
            md: 'blue.400',
            lg: 'green.500',
          }}
          // transform={ navOpen ? 'translate3d(+100vw,0,0)' : 'none' }
          // transition='transform 300ms ease'
        >
          <Box
            bg='white'
            position={{
              base:'initial',
              lg:'initial'
            }}
            // left='-100vw'
            top='0'
            zIndex='tooltip'
            transition='transform 200ms ease'
            h={{ xs:'65px', lg:'100vh'}}
            px={{ base:0, lg:'0rem'}}
            width='100%'
          >
            <Box
              position='sticky'
              top='0rem'
              
            >
              <Flex>
                <Box
                  display={{ base:'block', lg:'none' }}
                  m='0 1rem'
                  bg={{ base:`url(${logo})`, lg:`url(${logo_large})` }}
                  backgroundRepeat="no-repeat"
                  backgroundSize='100% auto'
                  backgroundPosition='center center'
                  w={{ base:'135px', lg:'140px' }}
                  h={{ base:'80px', lg:'100%' }}
                  color="gray.900"
                />
              </Flex>
              <Flex
                // h='100vh'
                alignItems='center'
                h={{ base:'auto', lg:'100vh'}}
              >
                  <Flex
                    position={{ base:'fixed', lg:'initial' }}
                    top='.5rem'
                    right='.5rem'
                    onClick={()=>{ setNavOpen( true )}}
                    color='white'
                    display={{ base:'block', lg:'none'}}

                  >
                    <IconButton
                      aria-label="Ouvrir le menu"
                      border='solid 1px'
                      borderColor='brand.1'
                      bg='brand.1'
                      bg='brand.1'
                      borderRadius='50%'
                      p='1rem'
                      m='.5rem'
                      w='50px'
                      h='50px'
                      _hover={{
                        bg:'white',
                        color:'brand.1',
                        borderColor:'brand.1'
                    }}
                      icon={ <HamburgerIcon w={5} h={5} /> }
                    />
                  </Flex>
                  <NavVertical
                    items={props.nav}
                    orientation='vertical'
                    isOpen={ navOpen }
                    handleClose={ ()=>{ setNavOpen(false) }}
                    handleOpen={ ()=>{ setNavOpen(true) }}
                  />
              </Flex>
              {/* <Nav items={props.nav} orientation='vertical' /> */}
            </Box>
          </Box>
          <Box>
            <Box as="main"
              minH={{ xl: 'calc( 100vh - 122px - 246px)' }}
              bg='#F9F9F9'
            >
              {props.children}
            </Box>
          </Box>
        </Grid>
        {props.settings ?
          <Footer settings={props.settings} />
        : null}
      </ChakraProvider>
    </IntlProvider>
  )
}

export default Layout2