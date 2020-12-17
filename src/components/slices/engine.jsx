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
  ChildrenNews,
  PicturesViewers,
  DocumentsList
} from '../slices'

const Slices = (props) => {
  const { slices, posts, products, childrenNews } = props
  const sliceComponents = {
    PrismicPageBodyAdsList: AdsList,
    PrismicPageBodyText: BodyText,
    PrismicPageBodyVideo: Video,
    PrismicPageBodyBannerWithCaption: BannerWithCaption,
    // PrismicPageBodyImageGallery: Carousel,
    PrismicPageBodyImageGallery: PicturesViewers,
    PrismicPageBodyListOfArticles: PostsList,
    PrismicPageBodyMap: Plan,
    PrismicPageBodyHomeHero: HomeHero,
    PrismicPageBodyImageAlone: ImageAlone,
    PrismicPageBodyTitle: Title,
    PrismicPageBodyEntryListIllustrated: EntryListIllustrated,
    PrismicPageBodyContactForm: ContactForm,
    PrismicPageBodySpecsTable: SpecsTable,
    PrismicPageBodyEquipementSheet: EquipementSheet,
    PrismicPageBodyChildrenNews: ChildrenNews,
    PrismicPageBodyDocumentsList: DocumentsList
  }

  const SlicesMerge = slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.__typename]
    if (SliceComponent) {
      return (
        <>
          <SliceComponent
            data={slice.primary}
            items={slice.items}
            posts={posts}
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