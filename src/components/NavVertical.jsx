import React, { useState } from 'react'
import { Box, Button, Flex, IconButton, Image, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
// import { FormattedMessage } from 'react-intl'
import SubNav from './SubNav'
import '../styles/transition.css'
import linkResolver from '../utils/linkResolver'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import logoSvg from '../images/logo-sailfast.svg'

const NavVertical = (props) => {
    console.log('NavProps', props)
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
                    // bg={{ xs: 'brandLightPrimary' }}
                    zIndex='toast'
                    justifyContent={{ base: 'flex-start', lg: 'center' }}
                    alignItems='flex-start'
                    wrap={{ xs: 'wrap', lg: orientation === 'vertical' ? 'wrap' : 'nowrap' }}
                    transform={{ xs: 'translateY(100%)', lg: 'none' }}
                    wrap={{ base: 'wrap' }}
                    transform={{ base: props.isOpen ? 'translateX(10vw)' : 'translateX(100vw)', lg: 'none' }}
                    transition='all 200ms ease'
                    width='90vw'
                    boxShadow={{ base: '0 0 8px rgba(10,10,10,.2)', lg: 'none' }}
                // mx={{ base:'3rem'}}


                >
                    <Flex
                        justifyContent='flex-end'
                        w='100%'
                        borderBottom='solid 1px'
                        borderColor='gray.100'
                        p='1rem'
                        // mb='4rem'
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
                        as={ GatsbyLink }
                        title={'Aller à l\'accueil'}
                        display='block'
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
                        mx={{ base: '0', lg: '4rem', xl:'6rem', xxl:'8rem' }}
                    >

                        {props.items.map((item, index) =>
                            <>
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
                                    onMouseOver={() => setSubNavOpen(`nav-item-${index}`)}
                                    onMouseLeave={() => setSubNavOpen(false)}
                                    w='100%'
                                >
                                    <Link
                                        key={item.primary.link.id}
                                        flexGrow='1'
                                        w='auto'
                                        as={GatsbyLink}
                                        color="white"
                                        fontWeight='500'
                                        to={
                                            item.primary.link.url ?
                                                item.primary.link.url
                                                : linkResolver(item.primary.link.document[0].prismicId)
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
                                            p='.15rem'
                                            onClick={() => setSubNavOpen(subNavOpen !== `nav-item-${index}` ? `nav-item-${index}` : false)}
                                            _hover={{ bg: 'transparent' }}
                                        // onClick={()=>  setSubNavOpen( false ) }
                                        >
                                            {`nav-item-${index}` === subNavOpen ? '✕' : '↓'}
                                        </Button>
                                        : null}

                                    {item.items.length > 1 ?
                                        <SubNav isOpen={`nav-item-${index}` === subNavOpen ? true : false} items={item.items} />
                                    : null}
                                </Box>
                                
                            </>
                        )}
                    </Box>
                </Box>
            </CSSTransition>
        </>
    )
}

export default NavVertical