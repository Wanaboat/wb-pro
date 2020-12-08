import React, { useState } from 'react'
import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import { FormattedMessage } from 'react-intl'
import '../styles/transition.css'
import linkResolver from '../utils/linkResolver'
const Menu = (props) => {
    // console.log( props )
    const [isOpen, setOpen] = useState(false)


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
                    wrap={{ xs: 'wrap', lg: 'nowrap' }}
                    transform={{ xs: 'translateY(100%)', lg: 'none' }}
                >
                    <Box
                        w='100%'
                        display={{ lg: 'none' }}
                    >
                        <Button
                            variant='outline'
                            variantColor='blue'
                            mb='1rem'
                            size='sm'
                            alignSelf='flex-start'
                            onClick={() => { setOpen(!isOpen) }}
                        >
                            ← <FormattedMessage id='main.back' />
                        </Button>
                    </Box>

                    {props.items.map((item, index) =>
                        <Link
                            key={item.link.prismicId}
                            borderBottom="solid 2px"
                            borderBottomColor='brandLight2'
                            w={{ xs: '100%', lg: 'auto' }}
                            as={GatsbyLink}
                            color="white"
                            fontWeight='500'
                            to={
                                // '/'
                             linkResolver (item.prismicId)
                                // item.link.uid ? item.link.url : '/'
                            }
                            p='.5rem 1rem'
                            textTransform='uppercase'
                            color='gray.600'
                            fontSize={{ xs:'1px', lg:'20px'}}
                            letterSpacing='0.05rem'
                            fontFamily="Source Sans Pro"
                            mx={{ lg: '.5rem' }}
                            _hover={{
                                bg: 'gray.50'
                            }}
                        >
                            {item.label} / 
                            {item.prismicId}
                        </Link>
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
                _hover={{
                    bg: 'brandDark2'
                }}
            >
                Menu
        </Button>
        </>
    )
}

export default Menu