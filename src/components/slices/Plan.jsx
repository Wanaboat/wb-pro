import React from 'react'
import { Box, Grid, PseudoBox, Stack, Text } from '@chakra-ui/react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const Plan = ( props ) => {
    const { location, address } = props.data
    const defaultOptions = {
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: true,
        draggableCursor: "default",
        draggingCursor: "move"
    };
    return(
        <Box>
            <Grid
                templateColumns={{ xs:'100%', xl:'20% 1fr'}}
                gap='10rem'
            >
                <Box>
                    <div className='wysiwyg' dangerouslySetInnerHTML={ {__html: address.html }} />
                </Box>
                <Box
                    h='500px'
                    bg='blue.300'
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
                                lat: location.latitude,
                                lng: location.longitude
                            }}
                            defaultOptions={defaultOptions}
                        >
                        <Marker
                            position={{
                                lat: location.latitude,
                                lng: location.longitude
                            }}
                        />
                        </GoogleMap>
                    </LoadScript>
                </Box>
            </Grid>
        </Box>
    )
}

export default Plan