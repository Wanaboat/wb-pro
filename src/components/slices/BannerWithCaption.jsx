import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const BannerWithCaption = (props) => {
  // console.log( props.data )
  const { title_of_banner, button_label, button_link, image_banner } = props.data
  return (
    <SimpleGrid
      columns={{ xs: 1, lg: 2 }}
      gap='3rem'
    >
      <Flex alignItems='center'>
        <Stack spacing="1rem">
          {title_of_banner ?
            <Heading
              fontSize='22px'
            >
              {title_of_banner.text}
            </Heading>
            : null}
          <Box >
            <div className='wysiwyg' dangerouslySetInnerHTML={{ __html: props.data.description.text }} />
          </Box>
          { button_link ? 
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
          borderRadius="10px"
          src={image_banner.url}
          alt={image_banner.alt}
        />
      </Box>
    </SimpleGrid>
  )
}

export default BannerWithCaption