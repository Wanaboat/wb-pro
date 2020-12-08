import React from 'react'

import { Box, Button, Heading, Stack, Grid, Image, Text } from '@chakra-ui/react'
import HeroIlluJPG from '../../images/hero-illu-nacra.jpg'


const HomeHero = ( props ) => {

    console.log( 'Hero Props', props)
    return(
<Box
      bg='rgba(6, 52, 98, 1)'
      h='100vh'
      position='relative'
    >
      <Box
        as='picture'
        w='100%'
        height={{ xs:'50vh', lg:'auto'}}
        display='block'
      >
        {/* <source type='image/webp' srcSet={HeroIlluWEBP} /> */}
        {/* <source type='image/jpg'
            srcSet={ `
                ${props.data.home_hero_bg_image.small.url} 75Ow, 
                ${props.data.home_hero_bg_image.large.url} 1050w, 
            ` }
        /> */}
        <Image
          boxShadow='sm'
          position='relative'
          zIndex='docked'

          srcSet={ `
            ${props.data.home_hero_bg_image.small.url} 75Ow, 
            ${props.data.home_hero_bg_image.large.url} 1040w, 
          ` }
          sizes="(max-width: 800px) 100wv, 1040px"
          objectFit='cover'
          alt='Dériveur Services'
          w='100%'
          h={{ base:'auto', lg:'100%' }}
          h={{ xs:'50vh', lg:'auto'}}

          objectFit='cover'
        />
      </Box>
      <Box
        position={{ base: 'initial', lg: 'absolute' }}
        top='40%'
        left='-2rem'
        background='rgba(6, 52, 98, 0.83)'
        zIndex='tooltip'
        p={{ base: 0, lg: '4rem 2rem' }}
        pl={{ base: 0, lg: '8rem' }}
        w={{ base: '100%', lg: '80%' }}
      >
        <Stack
          spacing={{ base:'.5rem', lg:'2rem' }}
          justifyContent='center'
          p={{ base:'1rem', lg:0}}
        >
          <Heading
            as='h1'
            fontSize={{ base:'24px', lg:'48px' }}
            color='white'
          >
              { props.data.home_hero_title.text }
            {/* {props.data.title.text} */}
            <Box h='3px' w='120px' bg='brandLight2' />
          </Heading>
          <Heading
            as='h2'
            fontSize={{ base:'18px', lg:'28px' }}

            fontWeight='600'
            color='white'
          >
            {/* {props.data.sub_title.text} */}
            { props.data.home_hero_subtitle }

            </Heading>
          <Text
            fontSize={{ base:'16px', lg:'22px' }}
            color='white'
          >
            {/* {props.data.intro} */}
            { props.data.home_hero_intro}
          </Text>
          {/* <Box>
            <Stack isInline spacing='1rem'>
              <Box
                as={GatsbyLink}
                to={
                  linkResolver(props.data.button_target.document)
                  // '/'
                }
                // border='solid 1px'
                // borderColor='yellow.400'
                borderRadius='3px'
                bg='brand.1'
                color='white'
                fontWeight='bold'
                display='flex'
                alignContent='center'
                justifyContent='center'
                p='.5rem .75rem'
                _hover={{ bg: 'brandDark2', color: 'white', borderColor: 'brandDark2' }}
              >
                {props.data.button_label}
              </Box>
              {props.data.phone_number_raw ?
                <Box
                  as='a'
                  href={`tel:${props.data.phone_number_raw}`}
                  border='solid 1px'
                  borderColor='gray.300'
                  borderRadius='3px'
                  backgroundColor='white'
                  fontWeight='bold'
                  color='gray.700'
                  display='flex'
                  alignContent='center'
                  justifyContent='center'
                  p='.5rem .75rem'
                  _hover={{ bg: 'brandDark2', color: 'white', borderColor: 'brandDark2' }}
                >{props.data.phone_number}
                </Box>
                : null}
            </Stack>
          </Box> */}
        </Stack>
      </Box>
    </Box>
    )
}

export default HomeHero