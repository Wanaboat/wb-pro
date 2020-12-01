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

const RelatedAds = (props) => {
  const [singleAdID, setSingleAdID] = useState(false)
  return (
    <ContentfulProvider client={contentfulClient}>
      <Grid
        templateColumns={{ xs: '100%', lg: '480px 1fr' }}
        gap={{ xs: '2rem', lg: '5rem' }}
      >
        <Box>
          <AdsLoader modelID={ props.modelID } adID={singleAdID} setSingleAdID={(id) => { setSingleAdID(id) }} />
        </Box>
      </Grid>
    </ContentfulProvider>

  )
}

export default RelatedAds