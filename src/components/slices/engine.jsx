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
  DocumentsList,
  AllLastNews,
  PublicationDate
} from '../slices'

const Slices = (props) => {
  const { page, slices, posts, products, childrenNews, lastPinnedPost } = props
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
    PrismicPageBodyDocumentsList: DocumentsList,
    PrismicPageBodyAllLastNews: AllLastNews,
    PrismicPageBodyPublicationDate: PublicationDate
  }

{/* <Box>Composant absent : {slice.__typename}</Box> */}

  const SlicesMerge = slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.__typename]
    if (SliceComponent) {
      return (
          <SliceComponent
            page={ page }
            data={slice.primary}
            items={slice.items}
            posts={posts}
            lastPinnedPost={lastPinnedPost}
            products={products}
            childrenNews={ childrenNews }
            key={`${slice.__typename}-${index}`}
          />
      )
    }
    else {
      return (
        <Box>Missing component : {slice.__typename}</Box>
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