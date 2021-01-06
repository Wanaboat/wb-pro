import React, { useState } from 'react'
import { Box, Button, Flex, IconButton, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
// import { FormattedMessage } from 'react-intl'
import SubNav from './SubNav'
import '../styles/transition.css'
import linkResolver from '../utils/linkResolver'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import logoSvg from '../images/logo-sailfast.svg'
import { Icon, createIcon } from "@chakra-ui/react"

const NavVertical = (props) => {

    const InstagramIcon = (props) => (
        <Icon viewBox="0 0 600 600" {...props}>
            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z" />
        </Icon>
    )

    const FacebookIcon = (props) => (
        <Icon viewBox="0 0 600 600" {...props}>
            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
        </Icon>
    )

    // console.log('NavProps', props)
    const [isOpen, setOpen] = useState(false)
    const [subNavOpen, setSubNavOpen] = useState(false)
    const { orientation } = props
    return (
        <>
            {/* <Box
                // position='fixed'
                w='100%'
                // h='100vh'
                backgroundColor='gray.700'
                // top='0'
                // left='0'
                zIndex='toast'
                opacity={isOpen ? '.4' : 0}
                transition='opacity 200ms ease'
                pointerEvents='none'
            /> */}
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="alert"
            >
                <Box
                    as="nav"
                    position={{ base: 'fixed', lg: 'relative' }}
                    h={{ base: '100vh', lg: '50vh' }}
                    w={{ xs: '100vw', lg: 'auto' }}
                    bg={{ base: 'white', lg: 'transparent' }}
                    zIndex='banner'
                    boxShadow={{ xs: 'xl', lg: 'none' }}
                    bottom='0'
                    zIndex='toast'
                    justifyContent={{ base: 'flex-start', lg: 'center' }}
                    alignItems='flex-start'
                    transform={{ xs: 'translateY(100%)', lg: 'none' }}
                    wrap={{ base: 'wrap' }}
                    transform={{ base: props.isOpen ? 'translateX(10vw)' : 'translateX(100vw)', lg: 'none' }}
                    transition='all 200ms ease'
                    width='90vw'
                    boxShadow={{ base: '0 0 8px rgba(10,10,10,.2)', lg: 'none' }}
                >
                    <Flex
                        justifyContent='flex-end'
                        w='100%'
                        borderBottom='solid 1px'
                        borderColor='gray.100'
                        p='1rem'
                        display={{ base: 'flex', lg: 'none' }}
                    >
                        <IconButton
                            aria-label="Fermer le menu"
                            border='solid 1px'
                            borderColor='brand.1'
                            bg='brand.1'
                            borderRadius='50%'
                            p='1rem'
                            w='50px'
                            h='50px'
                            color='white'
                            _hover={{
                                bg: 'white',
                                color: 'brand.1',
                                borderColor: 'brand.1'
                            }}
                            icon={<ArrowForwardIcon w={5} h={5}
                                onClick={() => {
                                    props.handleClose()
                                }}
                            />}
                        />
                    </Flex>
                    <Box
                        as={GatsbyLink}
                        title={'Aller à l\'accueil'}
                        display={{ base: 'none', lg: 'block' }}
                        // display='block'
                        to='/'
                        maxW='100%'
                        w='220px'
                        h='70px'
                        mx='auto'
                        mb='2rem'
                        bgImage={`url(${logoSvg})`}
                        backgroundRepeat='no-repeat'
                        backgroundSize='auto auto'
                        backgroundPosition='center center'
                    />
                    <Box
                        mx={{ base: '0', lg: '3rem', xl: '4rem', xxl: '6rem' }}
                    >
                        {props.items.map((item, index) =>
                            <Box
                                key={`nav-item-${index}`}
                                display='flex'
                                justifyContent='space-between'
                                flexWrap='wrap'
                                // mx={{ lg: '.5rem' }}
                                position={item.items.length > 1 ? 'relative' : 'initial'}
                                _hover={{
                                    bg: 'gray.50'
                                }}
                                alignItems='center'
                                borderBottom="solid 1px"
                                borderBottomColor='gray.100'
                                // onMouseOver={() => setSubNavOpen(`nav-item-${index}`)}
                                // onMouseLeave={() => setSubNavOpen(false)}
                                w='100%'
                                pr='0.25rem'
                            >
                                <Link
                                    key={item.primary.link.id}
                                    flexGrow='1'
                                    w='auto'
                                    as={item.primary.link.url ? 'a' : GatsbyLink}
                                    href={item.primary.link.url ? item.primary.link.url : ''}
                                    color="white"
                                    fontWeight='500'
                                    to={
                                        item.primary.link.url ?
                                            item.primary.link.url
                                            : linkResolver(item.primary.link.document.prismicId)
                                    }
                                    p='.5rem 1rem'
                                    // pr={item.items.length > 1 ? '.25rem' : '1rem'}
                                    textTransform='uppercase'
                                    color='gray.600'
                                    fontSize={{ xs: '16px', lg: '18px' }}
                                    letterSpacing='0.05rem'
                                    fontFamily="Source Sans Pro"
                                    _hover={{
                                        bg: 'gray.50'
                                    }}
                                >
                                    {/* {item.primary.link} -  */}
                                    {item.primary.label.text}
                                    {/* { item.primary.link.document[0].prismicId } */}
                                </Link>
                                {item.items.length > 1 ?
                                    <Button
                                        aria-label="Voir les pages filles"
                                        bg='transparent'
                                        color='brandDark1'
                                        size='sm'
                                        p='.25rem'
                                        mr='.05rem'
                                        onClick={() => setSubNavOpen(subNavOpen !== `nav-item-${index}` ? `nav-item-${index}` : false)}
                                        _hover={{ bg: 'gray.200' }}
                                    >
                                        {`nav-item-${index}` === subNavOpen ? '✕' : '↓'}
                                    </Button>
                                    : null}

                                {item.items.length > 1 ?
                                    <SubNav isOpen={`nav-item-${index}` === subNavOpen ? true : false} items={item.items} />
                                    : null}
                            </Box>
                        )}
                        <Box>
                            <SimpleGrid
                                color='gray.500'
                                p='.5rem 1rem'
                                gap={4}
                                columns={{ base:2, md:1, xxl:2 }}
                                fontSize={ 13 }
                                >
                                <Box as='a' href='https://www.facebook.com/sailfast.fr/' target='_blank' rel='noopener' _hover={{ color:'gray.900'}}>
                                    <FacebookIcon color='gray.700' boxSize={6} />
                                        Sailfast sur Facebook
                                    </Box>
                                <Box as='a' href='https://www.instagram.com/sailfast_goodall_nacra/?hl=fr' target='_blank' rel='noopener' _hover={{ color:'gray.900'}}>
                                    <InstagramIcon color='gray.700' boxSize={6} />
                                        Sailfast sur Instagram
                                    </Box>
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Box>
            </CSSTransition>
        </>
    )
}

export default NavVertical