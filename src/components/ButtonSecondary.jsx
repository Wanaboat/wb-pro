import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Button
} from '@chakra-ui/react'
import linkResolver from '../utils/linkResolver'

const ButtonSecondary = ({ to, children, ...rest }) => {
    return(
        <Button
            // as={ GatsbyLink }
            border='solid 1px'
            borderRadius='2px'
            bg='tranparent'
            textTransform='uppercase'
            borderColor='brand.1'
            fontSize='15px'
            color='brand.1'
            fontWeight='400'
            p='1rem 2rem'
            letterSpacing='0.05rem'
            _hover={{
                color:'white',
                bg:'brand.1'
            }}
            _active={{
                color:'white',
                bg:'brand.1'
            }}
            {...rest}

        >
            { children }
        </Button>
    )
}

export default ButtonSecondary