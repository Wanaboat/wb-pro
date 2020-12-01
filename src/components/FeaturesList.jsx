import React from 'react'
import Wrapper from '../components/Wrapper'
import { Box, Flex, SimpleGrid, Grid, Image, Text } from '@chakra-ui/react'
import WheelIcon from '../images/wheel-icon.svg'
import ToolsIcon from '../images/tools-icon.svg'
import WarehouseIcon from '../images/wharehouse-icon.svg'
import PartsIcon from '../images/parts-icon.svg'
import SailboatIcon from '../images/sailboat-icon.svg'

const HomeHero = (props) => {
    // console.log('propsHomepage', props)
    const getIcon = ( icon ) => {
        if( icon === 'Wheel'){
            return WheelIcon
        }
        if( icon === 'Tools'){
            return ToolsIcon
        }
        if( icon === 'Parts'){
            return PartsIcon
        }
        if( icon === 'Warehouse'){
            return WarehouseIcon
        }
        if( icon === 'Sailboat'){
            return SailboatIcon
        }
    }
    return (
        <Flex alignItems='center' py='2rem'>
            <Wrapper>
                <SimpleGrid gap='2rem' columns={{ xs: 1, md: 2, xl: 4 }}>
                    {props.items.map(item =>
                        <Box
                            key={ `feature-${item.label}` }
                        >
                            <Grid templateColumns='80px 1fr' gridGap='1rem'>
                                <Image
                                    alt={item.label}
                                    w='80px'
                                    h='80px'
                                    objectFit='contain'
                                    src={ getIcon( item.icon ) }
                                />
                                <Flex alignItems='center'>
                                    <Text
                                        color='brandDark1'
                                    >
                                        {item.label}
                                    </Text>
                                </Flex>
                            </Grid>
                        </Box>
                    )}
                </SimpleGrid>
            </Wrapper>

        </Flex>
    )
}

export default HomeHero