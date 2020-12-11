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
  Video,
  HomeHero,
  ImageAlone,
  Title,
  EntryListIllustrated,
  ContactForm,
  SpecsTable,
  EquipementSheet,
  Carousel,
  ChildrenNews
} from '../slices'

const Slices = (props) => {
  const { slices, posts, products, childrenNews } = props
  const sliceComponents = {
    PrismicPageBodyAdsList: AdsList,
    PrismicPageBodyText: BodyText,
    PrismicPageBodyVideo: Video,
    PrismicProductBodyText: BodyText,
    PrismicPageBodyBannerWithCaption: BannerWithCaption,
    PrismicProductBodyBannerWithCaption: BannerWithCaption,
    PrismicPageBodyImageGallery: Carousel,
    PrismicPageBodyListOfArticles: PostsList,
    // PrismicPageBodyMap: Plan,
    PrismicPageBodyProductsList: ProductsList,
    PrismicPageBodyHomeHero: HomeHero,
    PrismicPageBodyImageAlone: ImageAlone,
    PrismicPageBodyTitle: Title,
    PrismicPageBodyEntryListIllustrated: EntryListIllustrated,
    PrismicPageBodyContactForm: ContactForm,
    PrismicPageBodySpecsTable: SpecsTable,
    PrismicPageBodyEquipementSheet: EquipementSheet,
    PrismicPageBodyChildrenNews: ChildrenNews
  }

  const SlicesMerge = slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.__typename]
    if (SliceComponent) {
      return (
        <>
          <SliceComponent
            data={slice.primary}
            items={slice.items}
            lastPosts={posts}
            products={products}
            childrenNews={ childrenNews }
            key={`${slice.__typename}-${index}`}
          />
          {/* <Box>Composant absent : {slice.__typename}</Box> */}
        </>

      )
    }
    else {
      return (
        <Box>Composant absent : {slice.__typename}</Box>
      )
    }
  })
  return (
    <Stack
      // spacing='3rem'
      shouldWrapChildren={true}
    >
      { SlicesMerge }
    </Stack>
  )
}

export default Slices