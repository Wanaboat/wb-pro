import React from 'react'
import { Box } from '@chakra-ui/react'

const Wrapper = (props) => (
  <Box
    mb='5rem'
    // maxW='1200px'
    px={{ xs:'1rem', md:'2rem', lg:'2.5rem', xl:'0'}}
    mx='auto'
  >
    { props.children }
  </Box>
)

export default Wrapper
