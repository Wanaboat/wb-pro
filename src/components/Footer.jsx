import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
const Footer = (props) => {
  console.log('Footer props', props)
  return (
    <>
      <Stack
        as='footer'
        justifyContent='center'
        alignItems='center'
        bg='brandDark1'
        wrap='wrap'
        spacing='.5rem'
        p='3rem'
        background='blue.900'
      >
        <Text
          w='100%'
          color='brandLightPrimary'
          textAlign='center'
          fontWeight='700'
          fontSize={{ xs: '28px', lg: '44px' }}
        >{props.settings.data.site_name}</Text>
        <Text
          w='100%'
          textAlign='center'
          color='brandLight2'
          textTransform='uppercase'
          letterSpacing='0.05rem'
          fontSize={{ xs: '14px', lg: '22px' }}

        >
          {/* Le spécialiste voile légère en Bretagne */}
          </Text>
        <Text
          color='gray.400'
          w='100%'
          textAlign='center'
          fontSize={{ xs: '12px', lg: '16px' }}
        >
          <Link as={ GatsbyLink } to={`/${props.settings.data.footer_link.uid}`}>
            {props.settings.data.footer_link_label}
          </Link>
        </Text>
      </Stack>
      <Box
        fontSize={{ xs:'10px', lg:'11px'}}
        bg='gray.800'
        p='.5rem' textAlign={{ xs:'center', lg:'right'}}>
        <Link
          color='gray.200'
          target='_blank'
          rel='noopener'
          href="https://www.wanaboat.fr"
        >
          <FormattedMessage id="footer.wb.signature" />
        </Link>
      </Box>
    </>
  )
}
export default Footer