import React from "react"
import { Link as GatsbyLink } from "gatsby"
import AdContentRender from "./AdContentRender.js"
import ReactMarkdown from "react-markdown"
import ResponseDelay from "./responseDelay"
import CopyLink from "./CopyLink"
import './annoncesWysiwyg.scss'
import SellerCard from './SellerCard.js'
import Loadable from 'react-loadable'
import logo from "../../static/svg/logo.svg"
import { FormattedMessage, FormattedDate } from 'react-intl';
import PriceCtn from '../price'
import AddToFavorite from '../AddToFavorite'
import DocumentsList from './DocumentList'
import {
    Divider,
    Heading,
    Icon,
    Box,
    Flex,
    Image,
    Text,
    Button,
    Link,
    Grid,
    SimpleGrid,
    Stack,
    PseudoBox
} from "@chakra-ui/core";


import ReactGA from "react-ga";
ReactGA.initialize(process.env.GATSBY_GA_ID);
const siteConfig = require('../../../config')
export default class AdCardPortraitLarge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: this.props.ad,
            isLoading: false,
            currentPictures: 0,
            loadGallery: false,
            isViewingPictures: this.props.isViewingPictures ? this.props.isViewingPictures : false,
            context: this.props.context
        };
    }
    componentDidMount() {
        const { ad, context } = this.state;
        // if (context === 'export-iframe' || context === 'main-website-modal') {
        // ReactGA.pageview(ad.slug);
        // }
        ReactGA.pageview(ad.slug);
    }
    getYtIdFromUrl(url) {
        var videoId = url.split('v=')[1]
        var ampersandPosition = videoId.indexOf('&')
        if (ampersandPosition != -1) {
            videoId = videoId.substring(0, ampersandPosition)
            return videoId
        } else {
            return videoId
        }
    }
    render() {
        const { ad, isLoading, isViewingPictures, loadGallery } = this.state;
        // console.log( ad)
        const { context } = this.state;
        const Gallery = (loadGallery) ?
            Loadable({
                loader: () => import("./Gallery"),
                loading() {
                    return <Box>Chargement du diaporama...</Box>
                }
            })
            : null

        if (ad.videoUrl) {
            var ytID = this.getYtIdFromUrl(ad.videoUrl)
        }

        return (
            <Box
                zIndex={"sticky"}
                boxShadow="xs"
                backgroundColor="gray.50"
                w={{ xs: "100vw", md: "100%" }}
                mb={0}
                borderRadius={{ xs: 0, md: "10px" }}
                overflow="hidden"
            >
                {isLoading ? (
                    "-"
                ) : (
                        <>
                            {loadGallery && isViewingPictures ?
                                <Gallery
                                    ad={ad}
                                    isViewingPictures={isViewingPictures}
                                    pictures={ad.images.url}
                                    close={() => { this.setState({ isViewingPictures: false }) }}
                                />
                                :
                                !ad.images ?
                                    <Flex justify="center" position='relative' py="4rem" align="center">
                                        <Flex position="absolute" top="0" left="0" w="100%" p="1rem" zIndex="tooltip" display={{ xs: "flex", "lg": "flex" }} >
                                            <Button
                                                variantColor='gray'
                                                onClick={this.props.backAction}>← <FormattedMessage id='main.back' /></Button>
                                        </Flex>
                                        <Image alt={ad.name} size="200px" src={logo} />
                                    </Flex>
                                    :
                                    <Box h='300px' position={"relative"} zIndex="base">
                                        {this.props.backAction ?
                                            <Flex position="absolute" top="0" left="0" w="100%" p="1rem" zIndex="tooltip" display={{ xs: "flex", "lg": "flex" }} >
                                                <Button
                                                    boxShadow="sm"
                                                    textShadow="0 0 3px rgba(0,0,0,.4)"
                                                    variant="outline"
                                                    color="white"
                                                    _hover={{
                                                        bg: 'blue.brand',
                                                        borderColor: 'blue.brand',
                                                        color:'white'
                                                    }}
                                                    onClick={this.props.backAction}
                                                >← <FormattedMessage id='main.back' /></Button>
                                            </Flex>
                                            : null}
                                        <PseudoBox
                                            display={{ xs: "flex", "lg": "none" }} cursor="pointer" opacity={1} width="100" position="absolute" w="100%" h="100%" justifyContent="center" alignItems="center"
                                            _hover={{
                                                backgroundColor: "rgba(40,40,40,.4)",
                                            }}
                                            onClick={() => { this.setState({ isViewingPictures: isViewingPictures ? false : true, loadGallery: true }) }}
                                        >
                                            <Text textTransform="uppercase" textShadow="0 0 5px rgba(40,40,40, .75)" color="white" letterSpacing=".25rem">
                                                <FormattedMessage id="ad.pictures" values={{ count: ad.images.url.length }} /> {ad.images.url.length > 1 ? 's' : null}
                                            </Text>
                                        </PseudoBox>
                                        <PseudoBox
                                            display={{ xs: "none", "lg": "flex" }}
                                            cursor="pointer"
                                            transition="opacity .5s ease"
                                            opacity={0.25}
                                            width="100"
                                            position="absolute"
                                            w="100%"
                                            h="100%"
                                            justifyContent="center"
                                            alignItems="center"
                                            _hover={{
                                                backgroundColor: "rgba(40,40,40,.4)",
                                                opacity: 1
                                            }}
                                            onClick={() => { this.setState({ isViewingPictures: isViewingPictures ? false : true, loadGallery: true }) }}
                                        >
                                            <Text textTransform="uppercase" color="white" letterSpacing=".25rem" borderRadius="50px" p="1rem" background="rgba(50,50,50,.6)">
                                                <FormattedMessage id="ad.pictures" values={{ count: ad.images.url.length }} />{ad.images.url.length > 1 ? 's' : null}
                                            </Text>
                                        </PseudoBox>
                                        <picture>
                                            {/* https://assets.wanaboat.fr/photos */}
                                            <source
                                                type="image/webp"
                                                srcSet={
                                                    `https://i3sh32xk.twic.pics/photos${ad.images.url[0]}?twic=v1/cover=750x750/format=webp/quality=70`
                                                }
                                            />
                                            <source
                                                type="image/webp"
                                                srcSet={
                                                    `https://i3sh32xk.twic.pics/photos${ad.images.url[0]}'?twic=v1/cover=750x750/format=jpeg/quality=70    
                                                `}
                                            />
                                            <source
                                                type="image/heif"
                                                srcSet={
                                                    `https://i3sh32xk.twic.pics/photos${ad.images.url[0]}'?twic=v1/cover=750x750/format=heif/quality=70'
                                                `}
                                            />
                                            <Image
                                                alt={ad.name}
                                                // mt="-15rem"
                                                h='100%'
                                                objectFit="cover"
                                                w={"100%"}
                                                src={
                                                    `https://i3sh32xk.twic.pics/photos${ad.images.url[0]}?twic=v1/cover=750x750/format=heif/quality=70`
                                                }
                                            />
                                        </picture>
                                    </Box>
                            }
                            <Box>
                                <Grid
                                    p={[6, 4]}
                                    templateColumns={{ xs: "100%", lg: "45% 1fr" }}
                                    gap={[0, 0, 5, 15]}
                                    m={"0 auto"}
                                    pb={10}
                                    columns={[1, 1, 2]}
                                >
                                    <Box>
                                        <Box
                                            mx={0}
                                            position="relative"
                                            p={{ xs: '.45rem', lg: '.75rem' }}
                                            bg={"white"}
                                            mt={isViewingPictures ? 0 : -20}
                                            borderRadius={10}
                                            zIndex={"tooltip"}
                                            transition="margin-top .5s ease"
                                        >
                                            <Box
                                                backgroundColor="gray.50"
                                                borderRadius="6px"
                                                textAlign="center"
                                                padding={{ xs: "4px", lg: "6px" }}
                                            >
                                                {context === "main-website-ad" || context === "main-website-modal" ?
                                                    <Button
                                                        bg="blue.brand"
                                                        color="white"
                                                        size="md"
                                                        w={"100%"}
                                                        onClick={this.props.contactOpen}
                                                        _hover={{
                                                            backgroundColor: "green.400"
                                                        }}
                                                    >
                                                        <FormattedMessage id="main.cta.ad.contact" />
                                                    </Button>
                                                    :
                                                    <Button
                                                        as={"a"}
                                                        href={`${process.env.SITE_BASE_URL}/${ad.slug}`}
                                                        target="_blank"
                                                        bg="blue.brand"
                                                        color="white"
                                                        size="md"
                                                        w={"100%"}
                                                        _hover={{
                                                            backgroundColor: "green.400"
                                                        }}
                                                    >
                                                        {this.props.ctaLabel}
                                                    </Button>
                                                }
                                                <ResponseDelay userID={ad.userId} />
                                            </Box>
                                            <Box my={5} mb={0} color={"gray.600"}>
                                                <SimpleGrid columns={2}>
                                                    <Box>
                                                        <FormattedMessage id="ad.price" />
                                                    </Box>
                                                    <Box fontWeight={"600"} textAlign="right">
                                                        <PriceCtn value={ad.price} />
                                                    </Box>
                                                </SimpleGrid>
                                                <Divider borderColor="gray.100" />
                                                <SimpleGrid columns={2}>
                                                    <Box>Publication</Box>
                                                    <Box fontWeight={"600"} style={{ textAlign: "right" }}>
                                                        <FormattedDate value={ad.publicationDate} />
                                                    </Box>
                                                </SimpleGrid>
                                                <Divider borderColor="gray.100" />
                                                {ad.year ? (
                                                    <>
                                                        <SimpleGrid columns={2}>
                                                            <Box><FormattedMessage id="ad.year" /></Box>
                                                            <Box textAlign="right">
                                                                <Text fontWeight={"600"}>{ad.year}</Text>
                                                            </Box>
                                                        </SimpleGrid>
                                                        <Divider borderColor="gray.100" />
                                                    </>
                                                ) : null}

                                                {
                                                    ad.refBrand ?
                                                        ad.refBrand.slug ?
                                                            <>
                                                                <SimpleGrid columns={2}>
                                                                    <Box><FormattedMessage id="ad.maker" /></Box>
                                                                    <Box textAlign="right">
                                                                        <Link
                                                                            fontWeight="600"
                                                                            color="blue.600"
                                                                            textDecoration="underline"
                                                                            as={GatsbyLink}
                                                                            onClick={() => {
                                                                                this.props.close();
                                                                            }}
                                                                            to={ad.refBrand.slug ? `${ad.refBrand.slug}` : `${ad.refBrand.fields.slug}`}
                                                                        >
                                                                            {ad.refBrand.name ? ad.refBrand.name : ad.refBrand.fields.name}
                                                                        </Link>
                                                                    </Box>
                                                                </SimpleGrid>
                                                                <Divider borderColor="gray.100" />
                                                            </>
                                                            : null
                                                        : null
                                                }
                                                {ad.country ?
                                                    <>
                                                        <SimpleGrid columns={2}>
                                                            <Box><FormattedMessage id="ad.country" /></Box>
                                                            <Box textAlign="right">
                                                                <Text fontWeight={"600"}>{ad.country}</Text>
                                                            </Box>
                                                        </SimpleGrid>
                                                        <Divider borderColor="gray.100" />
                                                    </>
                                                    : null}
                                                <SimpleGrid columns={2}>
                                                    <Box><FormattedMessage id="ad.department" /></Box>
                                                    <Box textAlign="right">
                                                        <Text fontWeight={"600"}>{ad.department}</Text>
                                                    </Box>
                                                </SimpleGrid>
                                                <Divider borderColor="gray.100" />
                                                <SimpleGrid columns={2}>
                                                    <Box>
                                                        <FormattedMessage id="ad.direct.link" />
                                                    </Box>
                                                    <Flex justify="flex-end">
                                                        <CopyLink url={`${siteConfig.domains[process.env.GATSBY_LANG]}${ad.slug}`} />
                                                    </Flex>
                                                </SimpleGrid>
                                                <Divider borderBottomColor='grat.100' />
                                                <SimpleGrid columns={2}>
                                                    <Box>
                                                        Mettre en favori
                                                    </Box>
                                                    <Flex justify='flex-end'>
                                                        <AddToFavorite size="sm" adID={this.props.contentful_id} />
                                                    </Flex>
                                                </SimpleGrid>
                                                <Divider borderColor="gray.100" />
                                                <SimpleGrid columns={2}>
                                                    <Box>
                                                        <FormattedMessage id="ad.share" />
                                                    </Box>
                                                    <Flex justify="flex-end">
                                                        <Button onClick={
                                                            () => {
                                                                window.open(
                                                                    "https://www.facebook.com/dialog/share?"
                                                                    + "app_id=209954609027802"
                                                                    + "&display=popup"
                                                                    + "&href="
                                                                    + encodeURI(siteConfig.domains[process.env.GATSBY_LANG] + ad.slug)
                                                                    + "&redirect_uri="
                                                                    + encodeURI(siteConfig.domains[process.env.GATSBY_LANG] + ad.slug)
                                                                    , "Partager l'annonce " + ad.name, "menubar=no, status=no, scrollbars=no, menubar=no, width=600, height=500")
                                                            }
                                                        } size="sm"><FormattedMessage id="ad.share" /></Button>
                                                    </Flex>
                                                </SimpleGrid>


                                                {/* {ad.documentsList ?
                                                    ad.documentsList.url.length ?
                                                        <SimpleGrid columns={2}>
                                                            <Box>Inventaire</Box>
                                                            <Box textAlign="right">
                                                                {ad.documentsList.url.map((document, index) =>
                                                                    <Link
                                                                        display="block"
                                                                        textAlign="right"
                                                                        as={GatsbyLink}
                                                                        target="_blank"
                                                                        to={`/documents${document}`}>
                                                                        <Icon name="attachment" size="12px" mr={1} />
                                                                        {`Document ${(index + 1)}`}
                                                                    </Link>
                                                                )}
                                                            </Box>
                                                        </SimpleGrid>
                                                        : null
                                                    : null} */}

                                                {ad.user ?
                                                    <>
                                                        <Divider borderColor="gray.100" />
                                                        <SellerCard userID={
                                                            ad.user.sys ? ad.user.sys.id
                                                            : ad.user.contentful_id ? ad.user.contentful_id
                                                            : null
                                                            // ad.user && ad.user.sys.id
                                                            // ? ad.user.sys.id
                                                            // ? ad.user.contentful_id :  ad.user.contentful_id : null
                                                        } />
                                                    </>
                                                    : null
                                                }

                                                {(ad.location) ?
                                                    <Box mt={10}>
                                                        <Text><FormattedMessage id="ad.localisation" /></Text>
                                                        <img
                                                            width="100%"
                                                            alt="Localisation de votre annonce"
                                                            height="150"
                                                            src={`https://maps.googleapis.com/maps/api/staticmap?center=${ad.location.lat},${ad.location.lon}&zoom=7&autoscale=1&size=319x150&maptype=roadmap&key=AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C${ad.location.lat},${ad.location.lon}`}
                                                        />
                                                    </Box>
                                                    : null}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box p={[2, 4, 6]} mt={[5, 5, 0]}>
                                        <Heading mb={5} as="h2" size="md" fontSize="16px" color={"gray.700"}>
                                            <FormattedMessage id="ad.title.details" />&nbsp;{' '}

                                            {ad.name ? ad.name : null}
                                            {ad.department ? ' - ' + ad.department : null}
                                        </Heading>
                                        {ad.childContentfulAdContentTextNode ?
                                            <Box className="wysiwyg">
                                                <ReactMarkdown source={ad.childContentfulAdContentTextNode.content} />
                                            </Box>

                                            : null}
                                        {ad.content ?
                                            ad.content.childMarkdownRemark ?
                                                <AdContentRender content={ad.content.childMarkdownRemark.html} />
                                                : <Box className="wysiwyg" h={this.props.limiteHeight ? '355px' : 'none'}>
                                                    <ReactMarkdown source={ad.content} />
                                                </Box>
                                            : null}
                                        <DocumentsList data={ad.documentsList} />

                                    </Box>
                                </Grid>
                                {ytID ?
                                    <Box>
                                        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${ytID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    </Box>
                                    : null}
                                {!this.props.hideFooter ?
                                    <>
                                        <Divider mb={4} pt="0" mt="0" />
                                        <Box p={{ xs: 6, sm: 10 }}>
                                            <Text fontSize="sm">
                                                <FormattedMessage id="ad.obsolete.answer" />
                                            </Text>
                                        </Box>
                                    </>
                                    : null}
                            </Box>
                        </>
                    )}
            </Box>
        )
    }
}
