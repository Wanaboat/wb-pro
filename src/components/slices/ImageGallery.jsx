import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";
import { Box, Heading, Image } from '@chakra-ui/react'

const ImageGallery = (props) => {
  // console.log('props', props)

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const cleanImages = (images) => {
    let cleanImages = []
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      cleanImages.push( {
        src:image.gallery_image.url,
        width: image.gallery_image.dimensions.width,
        height: image.gallery_image.dimensions.height,
      })
      
    }
    return cleanImages
  }
  return (
    <Box>
      <Heading>{ props.data.name_of_the_gallery.text }</Heading>
      <Gallery photos={ cleanImages( props.items ) } onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={cleanImages( props.items ).map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>

      {/* { props.items.map(image =>
        <Box
          key={image.gallery_image.url}
        >
          
          <Image
            src={image.gallery_image.url}
            alt={image.gallery_image.alot}
          />
        </Box>
      )} */}
    </Box>
  )
}

export default ImageGallery