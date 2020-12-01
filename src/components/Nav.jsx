import React, { useState } from 'react'
import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import { FormattedMessage } from 'react-intl'
import SubNav from './SubNav'
import '../styles/transition.css'
import linkResolver from '../utils/linkResolver'
const Nav = (props) => {

    console.log('NavProps', props)
    const [isOpen, setOpen] = useState( false )
    const [subNavOpen, setSubNavOpen] = useState( false )
    const resolve = ( link ) => {
        if( !link.document.data )  return '/'
        
        if( link.document.data.parent.uid ){
            return `/${link.document.data.parent.uid}/${link.document.uid}`
        }
        else{
            return `/${link.document.uid}`
        }
    }

    const { orientation } = props
    // return(
    //     <Box>coucou</Box>
    // )
    return (
        <>
            <Box
                position='fixed'
                w='100vw'
                h='100vh'
                backgroundColor='gray.700'
                top='0'
                left='0'
                zIndex='toast'
                opacity={isOpen ? '.4' : 0}
                transition='opacity 200ms ease'
                pointerEvents='none'
            ></Box>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="alert"
            >
                <Flex
                    as="nav"
                    p='2rem'
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
                >
                    <Box
                        w='100%'
                        display={{ lg: 'none' }}
                    >
                        <Button
                            bg='white'
                            mb='1rem'
                            size='sm'
                            alignSelf='flex-start'
                            onClick={() => { setOpen(!isOpen) }}
                        >
                            ← <FormattedMessage id='main.back' />
                        </Button>
                    </Box>
                    TEST 

                    {props.items.map((item, index) =>
                        <Box
                            key={ `nav-item-${index}` }
                            display='flex'
                            justifyContent='space-between'
                            flexWrap='wrap'
                            w={{ xs:'100%', lg:'auto'}}
                            mx={{ lg: '.5rem' }}
                            position={ item.items.length > 1 ? 'relative' : 'initial' }
                            _hover={{
                                bg:'gray.50'
                            }}
                            alignItems='center'
                            borderBottom="solid 2px"
                            borderBottomColor='brandLight2'
                            onMouseOver={() => setSubNavOpen( `nav-item-${index}` ) }
                            onMouseLeave={()=>  setSubNavOpen( false ) }
                        >
                            <Link
                                key={item.primary.link.id}
                                flexGrow='1'
                                w='auto'
                                as={GatsbyLink}
                                color="white"
                                fontWeight='600'
                                to={
                                    linkResolver( item.primary.prismicId )
                                }
                                p='.5rem 1rem'
                                pr={ item.items.length > 1 ? '.25rem' : '1rem' }
                                textTransform='uppercase'
                                color='gray.600'
                                fontSize='20px'
                                letterSpacing='0.05rem'
                                fontFamily="Source Sans Pro"
                                mx={{ lg: '0rem' }}
                                _hover={{
                                    bg: 'gray.50'
                                }}
                            >
                                {item.primary.label.text}
                                { item.primary.prismicId }
                            </Link>
                            { item.items.length > 1 ?
                            <Button
                                bg='transparent'
                                color='brandDark1'
                                size='sm'
                                p='.15rem'
                                onClick={() => setSubNavOpen( subNavOpen !== `nav-item-${index}` ? `nav-item-${index}` : false ) }
                                _hover={{ bg:'transparent' }}
                                // onClick={()=>  setSubNavOpen( false ) }
                            >
                                {`nav-item-${index}` === subNavOpen ? '✕' : '↓' }
                            </Button>
                            :null }

                            { item.items.length > 1 ?
                                <SubNav isOpen={ `nav-item-${index}` === subNavOpen ? true : false } items={ item.items } />
                            : null}
                        </Box>
                    )}
                </Flex>
            </CSSTransition>
            <Button
                onClick={() => { setOpen(!isOpen) }}
                display={{ lg: 'none' }}
                bg='brandDark1'
                position='fixed'
                bottom='2rem'
                right='2rem'
                color='white'
                zIndex='banner'
                boxShadow= '0 2px 7px rgba(255,255,255,.5)'
                _hover={{
                    bg: 'brandLight2',
                    color: 'brandDark1'
                }}
            >
                Menu
        </Button>
        </>
    )
}

export default Nav