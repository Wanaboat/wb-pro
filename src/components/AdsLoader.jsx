import React, { useState } from 'react'
import { Box, Flex, Stack, Spinner } from '@chakra-ui/react'
import { useContentful } from 'react-contentful';
import AdCard from './AdCardNew'
import SingleAdLoader from './SingleAdLoader'
// https://cdn.contentful.com/spaces/xg7lbk8sfmzs/environments/master/entries
//     ?content_type=ad
//     &locale=fr&order=-fields.publicationDate
//     &limit=20
//     &skip=0
//     &fields.refModel.sys.id=5dadfb6dae5ec

const AdsLooader = ( props ) => {
  const [ detailsAdId , setDetailsAdId ] = useState(false)
    const { data, error, fetched, loading } = useContentful({
        contentType: 'Page',
        query: {
            'content_type': 'ad',
            'fields.userId': `819`,
            'order':'-fields.publicationDate',
            locale: 'fr',

        }
      });
     
      if (loading || !fetched) {
        return <Flex p='2rem' justifyContent='center' alignItems='center'><Spinner size='sm' color='brandDark1' /></Flex>;
      }
     
      if (error) {
        console.error(error);
        return null;
      }
     
      if (!data) {
        return <p>Page does not exist.</p>;
      }
     
      // See the Contentful query response
      console.debug(data);
      // console.log(data);

     
      // Process and pass in the loaded `data` necessary for your page or child components.
      return (
        <Stack spacing='1rem' shouldWrapChildren={true}>
            {
            loading ?
                <Spinner />
            :
             data.items.map( ad => 
                ad.sys.id != detailsAdId  ?
                <AdCard
                  id={`annonce-${ad.sys.id }`}
                  isCurrent={ props.adID === ad.sys.id }
                  key={ ad.sys.id }
                  handleClick={ 
                      () => { 
                        setDetailsAdId( ad.sys.id )
                      }
                  }
                  ad={ ad.fields }
                />
                :
                <SingleAdLoader
                    adID={detailsAdId}
                    close={() => { setDetailsAdId(null) }}
                />
            )
            }
        </Stack>
      )
}

export default AdsLooader