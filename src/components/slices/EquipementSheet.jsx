import React, { useState } from 'react'

import {
    Box,
    Heading,
    Text,
    Flex,
    Stack
} from '@chakra-ui/react'
import ButtonSecondary from '../ButtonSecondary'

const EquipementSheet = (props) => {
    const data = props.data.equipement_sheet_link.document[0].data.body
    const [more, setMore] = useState(false)

    console.log('EquipementSheet', data)

    const Title = ({ data }) => {
        return (
            <Heading
                as='h6'
                textTransform='uppercase'
                mb='.5rem'
                color='gray.400'
                fontWeight='600'
                fontSize={{ base: '18px', lg: '20px' }}
            >{data.value}</Heading>
        )
    }

    const Item = ({ data }) => {
        return (
            <Text
            // borderBottom='solid 1px'
            // borderBottomColor='gray.100'
            >{data.item_title}</Text>
        )
    }

    const Options = ({ data }) => {
        return (
            <Flex
                justifyContent='space-between'
                w='100%'
            >
                <Text
                    textTransform='uppercase'
                    color='gray.400'
                    fontWeight='600'
                    fontSize='14px'
                >Options</Text>
                <Box
                    textAlign='right'
                >
                    {data.map(option =>
                        <Text color='gray.500'>{option.option_value}</Text>
                    )}
                </Box>
            </Flex>
        )
    }

    const Slice = ({ slice, i }) => (
        <Box w='100%'
            p={{ base: '.5rem 1rem', lg: slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ? '1rem 4rem' : '0rem 4rem' }}
            pt={{ base: '1rem', lg: slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ? '2.5rem' : '0' }}
            borderTop={i > 0 && slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ? 'solid 1px' : 'none'}
            borderTopColor='gray.100'
            pt={{
                base:slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ? '1rem' : '0',
                lg:slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ? '2.5rem' : '0'
            }}
        >
            {slice.__typename === 'PrismicEquipementsSheetBodyCategoryTitle' ?
                <Title data={slice.primary} />
                : slice.__typename === 'PrismicEquipementsSheetBodyCategoryItem' ?
                    <Item data={slice.primary} />
                    : slice.__typename === 'PrismicEquipementsSheetBodyCategoryOptions' ?
                        <Options data={slice.items} />
                        : null
            }
        </Box>
    )

    return (
        <Stack
            spacing='1rem'
            mx={{ base: '1rem', lg: '4rem' }}
            bg='white'
            py={{ base: '1rem', lg: '1rem' }}
        >{
                data.map((slice, i) =>
                    !more && i < 5 ?
                        <Slice slice={slice} i={i} />
                        : more ?
                            <Slice slice={slice} i={i} />

                            : null
                )
            }
            {
                !more ?
                    <Flex
                        mt='1rem'
                        justifyContent='center'
                        onClick={() => { setMore(true) }}
                    >
                        <ButtonSecondary>Voir plus</ButtonSecondary>
                    </Flex>
                    : <Flex
                    mt='1rem'
                    justifyContent='center'
                    onClick={() => { setMore(false) }}
                >
                    <ButtonSecondary>Voir moins</ButtonSecondary>
                </Flex>
            }

        </Stack>
    )
}

export default EquipementSheet


