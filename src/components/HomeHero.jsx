import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Wrapper from '../components/Wrapper'
import { Box, Button, Heading, Stack, Grid, Image, Text } from '@chakra-ui/react'
import HeroIlluJPG from '../images/hero-sailing-dinghies.jpg'
import HeroIlluWEBP from '../images/hero-sailing-dinghies.webp'
import linkResolver from '../utils/linkResolver'

const HomeHero = (props) => {
  console.log( 'HomeHero propd' , props.data.button_target.document )
  return(<Box>Coucou</Box>)
  return (
    <Box bg='brandLightPrimary' py='3rem'>
      <Wrapper>
        <Grid
          templateColumns={{ xs: '100%', lg: '45% 45%' }}
          gridGap='10%'
        >
          <Stack spacing='2rem' justifyContent='center'>
            <Heading
              as='h1'
              fontSize='48px'
              color='brandDark1'
            >
              {props.data.title.text}
              <Box h='3px' w='120px' bg='brandLight2' />
            </Heading>
            <Heading
              as='h2'
              fontSize='28px'
              fontWeight='600'
              color='brandDark1'
            >
              {props.data.sub_title.text}
            </Heading>
            <Text
              fontSize='22px'
            >
              {props.data.intro}
            </Text>
            <Box>
              <Stack isInline spacing='1rem'>
                <Box
                  as={GatsbyLink}
                  to={
                    linkResolver( props.data.button_target.document  )
                    // '/'
                  }
                  border='solid 1px'
                  borderColor='yellow.400'
                  borderRadius='3px'
                  backgroundColor='brandLight2'
                  fontWeight='bold'
                  color='gray.700'
                  display='flex'
                  alignContent='center'
                  justifyContent='center'
                  p='.5rem .75rem'
                  _hover={{ bg: 'brandDark2', color: 'white', borderColor:'brandDark2' }}
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
                    _hover={{ bg: 'brandDark2', color: 'white', borderColor:'brandDark2' }}
                    >{props.data.phone_number}
                  </Box>
                : null}
              </Stack>
            </Box>
          </Stack>
          <Box position='relative'>
            <Box
              display={{ xs: 'none', lg: 'block' }}
              right='-10px'
              bottom='-10px'
              borderRadius='10px'
              position='absolute'
              bg='brandDark2'
              h='calc(100% - 15%)'
              w='calc(100% - 15%)'
              zIndex='base'
            />
            <picture>
              <source type='image/webp' srcSet={HeroIlluWEBP} />
              <source type='image/jpg' srcSet={HeroIlluJPG} />
              <Image
                boxShadow='sm'
                position='relative'
                zIndex='docked'
                borderRadius='10px'
                src={HeroIlluWEBP}
                w='100%'
                h='100%'
                objectFit='cover'
                alt='Dériveur Services'
              />
            </picture>

            {/* <Text>La voile légère sport & évasion</Text> */}
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )

}

export default HomeHero