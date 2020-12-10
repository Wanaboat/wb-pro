import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Button
} from '@chakra-ui/react'

const ButtonPrimary = ({ to, children, ...rest }) => {
    return(
        <Button
            // as={ GatsbyLink }
            borderRadius='20px'
            bg='tranparent'
            textTransform='uppercase'
            bg='brand.1'
            fontSize='15px'
            color='white'
            fontWeight='600'
            p='1rem 2rem'
            letterSpacing='0.05rem'
            _hover={{
                bg:'white',
                color:'brand.1'
            }}
            _active={{
                bg:'white',
                color:'brand.1'
            }}

            {...rest}

        >
            { children }
        </Button>
    )
}

export default ButtonPrimary