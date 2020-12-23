import React from 'react'

import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react'
import { animateScroll as scroll } from 'react-scroll'
import ButtonPrimary from '../ButtonPrimary'


const HomeHero = (props) => {

  console.log('Hero Props', props)
  return (
    <Box
      bg='rgba(6, 52, 98, 1)'
      minH={{ base: 'calc( 100vh - 65px )', lg: '100vh' }}
      position='relative'
      mb={{ base:'1rem', lg:'4rem'}}
    >
      <Box
        as='figure'
        h={{ xs: '50vh', lg: '100vh' }}
        position='relative'
      >
        <Image
          boxShadow='sm'
          position='relative'
          zIndex='docked'
          srcSet={`${props.data.home_hero_bg_image.thumbnails.small.url} 750w, 
            ${props.data.home_hero_bg_image.thumbnails.large.url} 1040w`}
          sizes="
            (max-width: 768px) 100vw, 
            (max-width: 1280px) calc(100vw - 400px),
            (max-width: 1500px) calc(100vw - 600px),
            calc(100vw - 9rem - 200px)
          "
          objectFit='cover'
          alt={ props.data.home_hero_bg_image.alt }
          w='100%'
          height={{ base: '100%', lg: '100vh' }}
          objectFit='cover'
        />
        { props.data.home_hero_bg_image.alt ? 
        <Text
          as='figcaption'
          borderRadius='2px 0 0 0'
          position='absolute'
          bottom='0'
          right='0'
          bg='rgba(255,255,255,.85)'
          color='gray.900'
          zIndex='banner'
          p={{ base:'.2rem .75rem'}}
          fontSize={{ base:'12px', lg:'16px' }}
        >
          { props.data.home_hero_bg_image.alt }
        </Text>
        : null}
      </Box>
      <Box
        position={{ base: 'initial', lg: 'absolute' }}
        top={{ base:'0', lg:'15%', xl:'30%', xxl:'40%' }}
        left='-2rem'
        background='rgba(6, 52, 98, 0.83)'
        zIndex='tooltip'
        p={{ base: 0, lg: '4rem 2rem' }}
        pl={{ base: 0, lg: '8rem' }}
        w={{ base: '100%', lg: '80%' }}
      >
        <Stack
          spacing={{ base: '1rem', lg: '1.5rem' }}
          justifyContent='center'
          p={{ base: '1rem', lg: 0 }}
        >
          <Heading
            as='h1'
            fontSize={{ base: '32px', lg:'42px', xl:'52px' }}
            color='white'
          >
            {props.data.home_hero_title.text}
            <Box h='3px' w='120px' bg='brandLight2' />
          </Heading>
          <Heading
            as='h2'
            fontSize={{ base: '20px', lg:'30px', xl:'32px' }}

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