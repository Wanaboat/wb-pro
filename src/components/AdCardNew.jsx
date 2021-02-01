import React, { Component } from 'react';
import { Link as GatsbyLink } from "gatsby";
import { FormattedMessage } from 'react-intl';
// import PriceCtn from '../price'
// import AddToFavorite from '../AddToFavorite'
import {
  Badge,
  Box,
  Grid,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";

// import css from './ad-item.module.scss';
import logo from "../images/logo-sailfast.svg"

class AdCardLandscape extends Component {
  displayThumbnail(images, alt) {
    if (images === null || images === undefined || !images.url) {
      return (
        <picture>
          <img width='96px' loading="lazy" src={logo} alt={alt} />
        </picture>
      )
    }
    else if (images.url.length === 0) {
      return (
        <picture>
          <img width='96px' loading="lazy" src={logo} alt={alt} />
        </picture>
      )
    }
    else {
      return (
        <Box
          position="relative"
          zIndex="base"
        >
          <picture>
            <source
              srcSet={
                // process.env.GATSBY_IMAGE_URL_PREFIX
                'https://i3sh32xk.twic.pics/'
                +'photos'
                +images.url[0]
                + '?twic=v1/cover=96x96/format=avif/quality=50'
                // + '?quality=70&fit=cover&width=96&height=96&format=webp'
              }
              type="image/avif"
            />
            <source
              srcSet={
                // process.env.GATSBY_IMAGE_URL_PREFIX
                'https://i3sh32xk.twic.pics/'
                +'photos'
                +images.url[0]
                + '?twic=v1/cover=96x96/format=webp/quality=50'
                // + '?quality=70&fit=cover&width=96&height=96&format=webp'
              }
              type="image/webp"
            />
            <source
              srcSet={
                // process.env.GATSBY_IMAGE_URL_PREFIX
                'https://i3sh32xk.twic.pics/'
                +'photos'
                +images.url[0]
                + '?twic=v1/cover=96x96/format=jpeg/quality=50'
                // + '?quality=70&fit=cover&width=96&height=96&format=webp'
              }
              type="image/jpeg"
            />

            <img
              src={
                // process.env.GATSBY_IMAGE_URL_PREFIX
                'https://i3sh32xk.twic.pics/'
                +'photos'
                +images.url[0]
                + '?twic=v1/cover=96x96/format=jpeg/quality=50'
                // + '?quality=70&fit=cover&width=96&height=96&format=webp'
              }
              width='96px'
              height='96px'
              loading='lazy'
              alt={alt}
            />
          </picture>
          <Flex
            position="absolute" bottom="0" left="0" w={'100%'}
            justify="flex-end"
            borderRadius={'0 0 4px 4px'}
            p={1}
            alignItems="flex-end"
            background="linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, rgba(26, 26, 26, 0.8) 100%)"
          >
            <Text
              as="span"
              fontSize="xs"
              color="white"
              pr={1}
            >
              {images.url.length}
            </Text>
          </Flex>
        </Box>

      );
    }
  }
  render() {

    const {
      contentful_id,
      name,
      price,
      brand,
      images,
      seller,
      publicationDate,
      isBoat,
      isSail
    } = this.props.ad;    

    console.log( 'ad', this.props )

    // const cardClickHandle = (event) => {
    //   let relatedLink = event.target.closest('.item-card').querySelector('a');
    //   if( !isInIframe ) {
    //     relatedLink.click();
    //   }
    // }

    return (
      <Box
        className="item-card"
        as={"article"}
        display="block"
        p={{ base: 2, lg:4 }}
        mb={5}
        background="white"
        shadow="xs"
        borderRadius={3}
        border="solid 2px"
        borderColor={ seller ? "green.200" : "white"}
        _hover={{
          borderColor:"blue.200",
          cursor:"pointer"
        }}
        onClick={ ()=>{ this.props.handleClick() } }
        id={ this.props.id }
      >
        <Grid
          templateColumns={{ base: "96px calc(95% - 96px)", lg: "96px calc(100% - 96px - 50px - 30px) 50px" }}
          gap={"15px"}>
          <Box>
            {this.displayThumbnail(images, name)}
          </Box>
          <Box>
            <Heading
              as="h4"
              w={'100%'}
              fontWeight="400"
              fontSize={{ base: "lg" }}
              isTruncated>
                {name}
            </Heading>
            <Flex mt={4}>
              <Box w={{ base: '40%', md: "25%" }}>
                <Text
                  pr={5}
                  pb={1}
                  mb={1}
                  borderBottom="solid 1px"
                  borderBottomColor="gray.200"
                  fontSize="xs"
                >
                  <FormattedMessage id="ad.price" />
                </Text>
                <Box pr={5}>
                  {/* <PriceCtn value={price} /> */}
                  { price }€
                  {/* <Badge as="span" variantColor="green" fontSize="sm">
                    {(price > 0) ?
                      <NumberFormat
                        value={price}
                        thousandSeparator={" "}
                        suffix=" €"
                        displayType="text"
                      />
                      : "-"}
                  </Badge> */}
                </Box>
              </Box>
              <Box
                display={{ base: 'none', md: 'initial' }}
                w={{ base: '50%', md: "25%" }}>
                <Text
                  pr={5}
                  pb={1}
                  mb={1}
                  borderBottom="solid 1px"
                  borderBottomColor="gray.200"
                  fontSize="xs"
                >
                  {
                    isBoat ? <FormattedMessage id="ad.builder" /> : isSail ? <FormattedMessage id="ad.sail.maker" /> : <FormattedMessage id="ad.brand" />
                  }
                </Text>
                <Text
                  pr={5}
                  fontWeight="600"
                  fontSize="sm"
                >
                  {brand ? brand : '-'}
                </Text>
              </Box>
              <Box
                display={{ base: 'none', md: 'initial' }}
                w={{ xs: '50%', md: "25%" }}>
                <Text
                  pr={5}
                  pb={1}
                  mb={1}
                  borderBottom="solid 1px"
                  borderBottomColor="gray.200"
                  fontSize="xs"
                >
                  Publication
                </Text>
                <Text
                  pr={5}
                  fontWeight="600"
                  fontSize="sm"
                >
                  {publicationDate}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex
            display={{ xs: 'none', lg: 'flex' }}
            justifyContent="flex-end"
            wrap="wrap"
          >
            {/* <AddToFavorite adID={ contentful_id } /> */}
            <Text
              w={'100%'}
              textAlign="right"
            >
              { seller ? <Badge as="span" variantColor="green">Pro</Badge>:null}
            </Text>
          </Flex>
        </Grid>
      </Box>
    )
  }
}

export default AdCardLandscape
