import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { SimpleGrid } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"

const BannerWithCaption = (props) => {
  // console.log( props.data )
  const { title_of_banner, button_label, button_link, image_banner } = props.data
  return (
    <Grid
      templateColumns={{ base:'100%', lg:"1fr 400px"}}
      gap='2rem'
      ml={{ base:0, lg:'4rem'}}
    >
      <Flex
        alignItems='flex-start'
        px={{ base:5, lg:0 }}
      >
        <Stack spacing="1rem">
          {title_of_banner ?
            <Heading
              fontSize='22px'
            >
              {title_of_banner.text}
            </Heading>
            : null}
          <Box
            fontSize={{ base:'15px', lg:'18px'}}
          >
            <div className='wysiwyg' dangerouslySetInnerHTML={{ __html: props.data.description.text }} />
          </Box>
          {button_link ?
            <Box>
              <Button
                position='static'
                to={button_link ? button_link.url : '/'}
                bg={'brandLight2'}
                as={GatsbyLink}>{button_label.text}
              </Button>
            </Box>
            : null}

        </Stack>
      </Flex>
      <Box>
        <Image
          borderRadius={{ base:'0', lg:"3px 0 0 3px"}}
          src={ image_banner.medium ? image_banner.medium.url : image_banner.url }
          alt={ image_banner.alt }
          w='100%'
        />
        <Text
          textAlign='center'
          fontStyle='italic'
        >{image_banner.alt}</Text>
      </Box>
    </Grid>
  )
}

export default BannerWithCaption