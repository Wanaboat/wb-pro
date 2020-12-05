import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

import {
  AdsList,
  BannerWithCaption,
  BodyText,
  ImageGallery,
  PostsList,
  Plan,
  ProductsList,
  Video
} from '../slices'

const Slices = (props) => {
  const { slices, posts, products } = props
  const sliceComponents = {
    PrismicPageBodyAdsList: AdsList,
    PrismicPageBodyText : BodyText,
    PrismicPostBodyText: BodyText,
    PrismicPostBodyVideo: Video,
    PrismicProductBodyText: BodyText,
    PrismicPostBodyBannerWithCaption: BannerWithCaption,
    PrismicPageBodyBannerWithCaption: BannerWithCaption,
    PrismicProductBodyBannerWithCaption: BannerWithCaption,
    PrismicPostBodyImageGallery: ImageGallery,
    PrismicPageBodyImageGallery: ImageGallery,
    PrismicPageBodyListOfArticles: PostsList,
    PrismicPageBodyMap: Plan,
    PrismicPageBodyProductsList: ProductsList
  }

  const SlicesMerge =  slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.__typename]
      if (SliceComponent) {    
        return(    
          <>
          <SliceComponent
            data={ slice.primary }
            items={ slice.items }
            lastPosts={ posts }
            products= { products}
            key={`${slice.__typename}-${index}`}
          />
          {/* <Box>Composant absent : {slice.__typename}</Box> */}
          </>

        )  
      }
      else{
        return(
          <Box>Composant absent : {slice.__typename}</Box>
        )
      }
  })
  return (
      <Stack
          spacing='3rem'
          shouldWrapChildren={ true }
        >
          { SlicesMerge }
        </Stack>
  )
}

export default Slices