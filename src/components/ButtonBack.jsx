import React from 'react'
import {
    Button
} from '@chakra-ui/react'
import ButtonSecondary from './ButtonSecondary'
import { FormattedMessage } from 'react-intl'

const ButtonBack = ({ to, children, ...rest }) => {
    return(
        <ButtonSecondary
            {...rest}
            mt={{ base:'2rem', lg:'3rem' }}
            mx={{ base:'1rem', lg:'4rem' }}
            onClick={ (e)=>{ history.back() } }
        >
            ← <FormattedMessage id='main.back' />
        </ButtonSecondary>
    )
}

export default ButtonBack