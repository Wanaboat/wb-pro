import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Wrapper from '../Wrapper'
import { Box, Button, Grid, Stack } from '@chakra-ui/react'
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import AdsLoader from '../AdsLoader'
import SingleAdLoader from '../SingleAdLoader'
import { CSSTransition } from 'react-transition-group'
import { FormattedMessage } from 'react-intl'
import '../../styles/transition.css'
const contentfulClient = new ContentfulClient({
  accessToken: '315d9ab73fe1c8b4730aaa408d7298bb971cbcd0dd95de7ff56170edc17abbeb',
  space: 'xg7lbk8sfmzs',
});

const AdsList = (props) => {
  const [singleAdID, setSingleAdID] = useState('5f3fcb898a8ca')
  return (
    <ContentfulProvider client={contentfulClient}>
        <Box
          mx={{ base:'1rem', lg:'4rem' }}
          maxW='700px'
        >
          <AdsLoader
            adID={singleAdID}
            setSingleAdID={(id) => { setSingleAdID(id) }}
          />
        </Box>
        {/* <Box>
          <Box
            position='sticky'
            top='2rem'
          >
            <CSSTransition
              in={singleAdID ? true : false}
              timeout={200}
              classNames="slideright"
            >
              <Box
                position={{ xs: singleAdID ? 'fixed' : 'initial', lg: 'initial' }}
                top={0}
                left={0}
              >
                  <SingleAdLoader
                    adID={singleAdID}
                    close={() => { setSingleAdID(null) }}
                  />
              </Box>
            </CSSTransition>
          </Box>
        </Box> */}
    </ContentfulProvider>

  )
}

export default AdsList