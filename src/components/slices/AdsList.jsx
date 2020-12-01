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
  const [singleAdID, setSingleAdID] = useState(false)
  return (
    <ContentfulProvider client={contentfulClient}>
      <Grid
        templateColumns={{ xs: '100%', lg: '480px 1fr' }}
        gap={{ xs: '2rem', lg: '5rem' }}
      >
        <Box>
          <AdsLoader adID={singleAdID} setSingleAdID={(id) => { setSingleAdID(id) }} />
        </Box>
        <Box>
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
                {singleAdID ?
                  <SingleAdLoader
                    adID={singleAdID}
                    close={() => { setSingleAdID(null) }}
                  />
                  :
                  <Stack
                    spacing='2rem'
                    mt={{ xs: 0, lg: '5rem' }}
                    borderRadius='15px'
                    border='dashed 2px'
                    borderColor='gray.200'
                    bg='gray.50'
                    p={{ xs: '1rem', lg: '3rem' }}
                  >
                    <Box>
                      <div className='wysiwyg' dangerouslySetInnerHTML={{ __html: props.data.side_text.html }} />
                    </Box>
                    <Box>
                      <Button
                        as={GatsbyLink}
                        to={props.data.link_to_contact.url}
                        bg='brandLight2'
                        color='gray.800'
                        p='.5rem 1rem'
                        cursor='pointer'
                        borderRadius='3px'
                        justifyContent='center'
                        leftIcon='email'
                        _hover={{
                          bg: 'brandDark2',
                          color: 'white'
                        }}
                      >
                        <FormattedMessage id='main.contact.us' />
                      </Button>
                    </Box>
                  </Stack>
                }
              </Box>
            </CSSTransition>
          </Box>
          {/* } */}
        </Box>
      </Grid>
    </ContentfulProvider>

  )
}

export default AdsList