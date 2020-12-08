import React, { useState } from 'react'
import { Box, Button, Flex, IconButton, Image, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import { FormattedMessage } from 'react-intl'
import SubNav from './SubNav'
import '../styles/transition.css'
import linkResolver from '../utils/linkResolver'
import { HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons'
import logo from '../images/logo-sailfast.png'

const NavVertical = (props) => {


    console.log('NavProps', props)
    const [isOpen, setOpen] = useState(false)
    const [subNavOpen, setSubNavOpen] = useState(false)
    const resolve = (link) => {
        if (!link.document.data) return '/'

        if (link.document.data.parent.uid) {
            return `/${link.document.data.parent.uid}/${link.document.uid}`
        }
        else {
            return `/${link.document.uid}`
        }
    }
    const { orientation } = props
    return (
        <>
            <Box
                position='fixed'
                w='100%'
                h='100vh'
                backgroundColor='gray.700'
                top='0'
                left='0'
                zIndex='toast'
                opacity={isOpen ? '.4' : 0}
                transition='opacity 200ms ease'
                pointerEvents='none'
            />
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="alert"
            >
                <Flex
                    as="nav"
                    position='relative'
                    zIndex='banner'
                    w={{ xs: '100vw', lg: 'auto' }}
                    boxShadow={{ xs: 'xl', lg: 'none' }}
                    position={{ xs: 'fixed', lg: 'initial' }}
                    bottom='0'
                    bg={{ xs: 'brandLightPrimary' }}
                    zIndex='tooltip'
                    justifyContent='center'
                    wrap={{ xs: 'wrap', lg: orientation === 'vertical' ? 'wrap' : 'nowrap' }}
                    transform={{ xs: 'translateY(100%)', lg: 'none' }}
                    wrap={{ base: 'wrap' }}
                    w={{ base: '100vw', lg: '100%' }}
                >
                    <Flex
                        justifyContent='flex-end'
                        w='100%'
                        borderBottom='solid 1px'
                        borderColor='gray.100'
                        p='1rem'
                        pt='0'
                        mb='4rem'
                        display={{ base:'flex', lg:'none'}}
                    >
                        <IconButton
                            border='solid 1px'
                            borderColor='brand.1'
                            bg='brand.1'
                            borderRadius='50%'
                            p='1rem'
                            w='60px'
                            h='60px'
                            color='white'
                            _hover={{
                                bg:'white',
                                color:'brand.1',
                                borderColor:'brand.1'
                            }}
                            icon={<ArrowBackIcon  w={5} h={5}
                                onClick={() => {
                                    props.handleClose()
                                }}
                            />}
                        />
                    </Flex>
                    
                <Flex
                    maxW='100%'
                    justifyContent={{ base:'flex-start', lg:'center' }}
                    w='100%'
                    p='1rem'
                    mt='2rem'
                  >
                    <Image
                      src={ logo } 
                    //   mx='auto'
                    />
                  </Flex>

                    {props.items.map((item, index) =>
                        <Box
                            key={`nav-item-${index}`}
                            display='flex'
                            justifyContent='space-between'
                            flexWrap='wrap'
                            w={{ xs: '100%', lg: 'auto' }}
                            mx={{ lg: '.5rem' }}
                            position={item.items.length > 1 ? 'relative' : 'initial'}
                            _hover={{
                                bg: 'gray.50'
                            }}
                            alignItems='center'
                            borderBottom="solid 1px"
                            borderBottomColor='gray.100'
                            onMouseOver={() => setSubNavOpen(`nav-item-${index}`)}
                            onMouseLeave={() => setSubNavOpen(false)}
                            w={{ base: '100%', lg: '100%' }}
                        >
                            <Link
                                key={item.primary.link.id}
                                flexGrow='1'
                                w='auto'
                                as={GatsbyLink}
                                color="white"
                                fontWeight='500'
                                to={
                                    linkResolver(item.primary.link.document[0].prismicId)
                                }
                                p='.5rem 1rem'
                                pr={item.items.length > 1 ? '.25rem' : '1rem'}
                                textTransform='uppercase'
                                color='gray.600'
                                fontSize={{ xs:'16px' , lg:'18px'}}
                                letterSpacing='0.05rem'
                                fontFamily="Source Sans Pro"
                                mx={{ lg: '0rem' }}
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
                    )}
                </Flex>
            </CSSTransition>
            {/* <Button
                onClick={() => { setOpen(!isOpen) }}
                display={{ lg: 'none' }}
                bg='brandDark1'
                position='fixed'
                bottom='2rem'
                right='2rem'
                color='white'
                zIndex='banner'
                boxShadow='0 2px 7px rgba(255,255,255,.5)'
                _hover={{
                    bg: 'brandLight2',
                    color: 'brandDark1'
                }}
            >
                Menu
        </Button> */}
        </>
    )
}

export default NavVertical