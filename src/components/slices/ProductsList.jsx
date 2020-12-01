import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Image, Grid, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'

import { FormattedMessage } from 'react-intl'
import '../../styles/transition.css'

const ProductsList = (props) => {
  // console.log('ProductsList', props)
  return (
    // <Grid
    //   templateColumns={{ xs: '100%', lg: '480px 1fr' }}
    //   gap={{ xs: '2rem', lg: '5rem' }}
    // >
    <Stack my='3rem' spacing='2rem'>
      <SimpleGrid columns={{ xs: 1, md:2, lg: 2 }} gap='1rem'>
        {props.products.edges.map(product =>
          <Grid
            as={GatsbyLink}
            to={product.node.uid}
            templateColumns={{ lg: '100px 160px 1fr' }}
            borderBottom="solid 1px"
            borderColor='gray.200'
            pb='1rem'
            key={product.node.id}
          >
            <Text
              color='gray.400'
              textTransform='uppercase'
              fontWeight='500'
              display={{ xs: 'none', lg: 'initial' }}
            >
              {product.node.data.main_info}
            </Text>
            <picture>
                {/* <source
                  type="image/webp"
                  srcSet={`${product.node.data.image.square_lg.url} 400w, ${product.node.data.image.square_sm.url} 800w,`}
                /> */}
                { product.node.data.image.thumbnails ? 
                  <Image w='100%' src={product.node.data.image.thumbnails.square_sm.url} alt={product.node.data.title.text} />
                :null}

            </picture>
              <Flex
                px={{ lg: '1rem' }}
                py={{ xs: '1rem', lg: 0 }}
              >
                <Stack spacing='.5rem' justifyContent='space-between'>
                  <Heading
                    as='h3'
                    fontSize='30px'
                    color='brandDark1'
                  >
                    {product.node.data.title.text}{' '}
                  </Heading>
                  <Text>
                    {product.node.data.sub_title}
                  </Text>
                  <Box>
                    <Button
                      bg='brandLight2'
                      size='sm'
                    >
                      <FormattedMessage id='main.discover' /> →
              </Button>
                  </Box>
                </Stack>
              </Flex>
          </Grid>
        )}
      </SimpleGrid>
    </Stack>

    // </Grid>

  )
}

export default ProductsList