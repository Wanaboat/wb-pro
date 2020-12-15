import React, { useState } from 'react'
import {
    Box,
    Image,
    SimpleGrid
} from '@chakra-ui/react'
import GalleryModal from '../GalleryModal'

const PicturesViewers = (props) => {
    console.log('PicturesViewers', props)
    const [ currentPicture , setCurrentPicture ] = useState( false )
    const pictures = props.items
    return (
        <>
            <Box
                id="gallerie"
                mx={{ base: '1rem', lg: '4rem' }}
            >
                <SimpleGrid
                    columns={{ base: 2, lg: 4 }}
                    gap={2}
                >


                    {pictures.map((photo,i) =>
                        <Image
                            onClick={ ()=>{setCurrentPicture(i+1)} }
                            cursor='pointer'
                            w='100%'
                            src={photo.gallery_image.small ? photo.gallery_image.small.url : photo.gallery_image.url }
                        />
                    )}
                </SimpleGrid>
            </Box>
            <Box zIndex='999999'>
            <GalleryModal
                pictures={ pictures }
                index={ currentPicture }
                isVisible={ currentPicture }
                handleClose={ ()=>{ setCurrentPicture( false )} }
                handlePrev={()=>{ setCurrentPicture( currentPicture === 1 ? pictures.length : currentPicture - 1)}}
                handleNext={()=>{ setCurrentPicture( currentPicture ===  pictures.length ? 1 : currentPicture + 1 )}}
            />
            </Box>
            
        </>
    )
}

export default PicturesViewers