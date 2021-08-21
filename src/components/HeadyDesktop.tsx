import React from 'react'
import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from 'next/image'

export const headerHeight: number = 54


const HeadyDesktop = () => {
    return (
        <SimpleGrid
            minH={"80px"}
            height={"80px"}
            bg="brand.maintransparent"
            w="100vw"
            position={"fixed"}
            top={0}
            zIndex={10}
            minChildWidth="20px"
        minW={"1024px"}>

            <Box height={"80px"} display="flex"
                 w={"589px"}
                 flexDirection="row"
                 justifySelf={"center"}
                 >
                <Box height={"80px"} pt={"12px"}>
                    <Image
                        src="/static/images/moranaIcon.svg"
                        width={61}
                        height={53}
                        alt={"Morana"}
                    />
                </Box>
                <Box height={"80px"} pt={"27px"} flexGrow={1}>
                    <Heading variant="header1">
                        Morana.at desktop
                    </Heading>
                </Box>
            </Box>

            <Box display="flex"
                 flexDirection="row"
                 paddingLeft={"5em"}>

                <Box height={"80px"} pt={"27px"} width={"100px"}>
                    <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                        Services
                    </Text>
                </Box>
                <Box height={"80px"} pt={"27px"} width={"100px"}>
                    <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"}>
                        About
                    </Text>
                </Box>
                <Box height={"80px"} pt={"27px"} width={"100px"}>
                    <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                        Contact
                    </Text>
                </Box>
            </Box>

        </SimpleGrid>


    )
}

export default HeadyDesktop

