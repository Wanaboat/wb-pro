import React from 'react'
import { Box, Grid, Stack } from '@chakra-ui/react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Plan = ( props ) => {
    console.log('plan', props)
    const { where, address } = props.data
    const defaultOptions = {
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: true,
        draggableCursor: "default",
        draggingCursor: "move"
    }
    return(
        <Box>
            <Stack
                mx={{ base:'1rem', lg:'4rem' }}
                spacing={{ base:'1rem', xl:'2rem' }}
            >
                <Box>
                    <div className='wysiwyg' dangerouslySetInnerHTML={ {__html: address.html }} />
                </Box>
                <Box
                    h='500px'
                    bg='blue.300'
                    // mx={{ base:'-1rem', lg:0 }}
                >
                     <LoadScript
                        id="script-loader"
                        googleMapsApiKey="AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U"
                    >
                        <GoogleMap
                            id="model-map"
                            mapContainerStyle={{
                                height: "500px",
                                width: "100%"
                            }}
                            zoom={7.2}
                            center={{
                                lat: where.latitude,
                                lng: where.longitude
                            }}
                            defaultOptions={defaultOptions}
                        >
                        <Marker
                            position={{
                                lat: where.latitude,
                                lng: where.longitude
                            }}
                        />
                        </GoogleMap>
                    </LoadScript>
                </Box>
            </Stack>
        </Box>
    )
}

export default Plan