import React from 'react'
import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from 'next/image'

export const headerHeight: number = 54


const HeadyDesktop = () => {
    return (
        <Box display="flex"
             flexDirection="column"
             w={"100%"}
             alignItems={"center"}
             bg="brand.maintransparent"
             minH={"80px"}
             height={"80px"}
             position={"fixed"}
             top={0}
             zIndex={10}
        >
            <SimpleGrid

                columns={2}

            >
                <Box height={"80px"}
                     display="flex"
                     flexDirection="row"
                     width={"602px"}
                >
                    <Box height={"80px"}>
                        <Image
                            src="/static/images/moranaIcon.png"
                            width={100}
                            height={87}
                            alt={"Morana"}
                        />
                    </Box>
                    <Box height={"80px"} pt={"28px"} flexGrow={1}>
                        <Heading variant="header1">
                            Morana.at desktop
                        </Heading>
                    </Box>
                </Box>

                <Box display="flex"
                     flexDirection="row"
                     justifySelf={"center"}
                     pl={"5em"}
                >

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
        </Box>


    )
}

export default HeadyDesktop

