import React from 'react'

import { Box, Button, Heading, Stack, Image, Text } from '@chakra-ui/react'
import { animateScroll as scroll } from 'react-scroll'
import ButtonPrimary from '../ButtonPrimary'


const HomeHero = (props) => {

  console.log('Hero Props', props)
  return (
    <Box
      bg='rgba(6, 52, 98, 1)'
      h={{ base: 'calc( 100vh - 65px )', lg: '100vh' }}
      position='relative'
      mb={{ base:'1rem', lg:'4rem'}}
    >
      <Box
        // as='picture'
        // w='100%'
        // height={{ xs:'50vh', lg:'100vh'}}
        // height='100vh'
        h={{ xs: '50vh', lg: '100vh' }}
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
          srcSet={`
            ${props.data.home_hero_bg_image.small.url} 320w, 
            ${props.data.home_hero_bg_image.large.url} 1040w, 
          ` }
          sizes="70vmin"
          objectFit='cover'
          alt='Sailfast'
          w='100%'
          //   h={{ xs:'50vh', lg:'100vh'}}
          height={{ base: '100%', lg: '100vh' }}

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
          spacing={{ base: '.5rem', lg: '2rem' }}
          justifyContent='center'
          p={{ base: '1rem', lg: 0 }}
        >
          <Heading
            as='h1'
            fontSize={{ base: '24px', lg: '48px' }}
            color='white'
          >
            {props.data.home_hero_title.text}
            <Box h='3px' w='120px' bg='brandLight2' />
          </Heading>
          <Heading
            as='h2'
            fontSize={{ base: '18px', lg: '28px' }}

            fontWeight='600'
            color='white'
          >
            {props.data.home_hero_subtitle}
          </Heading>
          <Text
            fontSize={{ base: '16px', lg: '22px' }}
            color='white'
          >
            {props.data.home_hero_intro}
          </Text>
          <Box>
            <ButtonPrimary
              onClick={() => scroll.scrollMore(600)}
            >
              { props.data.home_hero_button_label }
          </ButtonPrimary>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default HomeHero