import React from 'react'
import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from 'next/image'

export const headerHeight: number = 54


const HeadyDesktop = () => {
    const height = ["54px","54px","80px"];
    return (
        <Box display="flex"
             flexDirection="column"
             w={"100vw"}
             alignItems={"center"}
             bg="red"
             minH={height}
             height={height}
             position={"fixed"}
             top={0}
             zIndex={10}
        >
            <SimpleGrid
                columns={2}
            >
                <Box height={height}
                     display="flex"
                     flexDirection="row"
                     width={"602px"}
                >
                    <Box height={height}>
                        <Image
                            src="/static/images/moranaIcon.png"
                            width={100}
                            height={87}
                            alt={"Morana"}
                        />
                    </Box>
                    <Box height={height} pt={"28px"} flexGrow={1}>
                        <Heading variant="header1">
                            Morana.at
                        </Heading>
                    </Box>
                </Box>

                <Box display="flex"
                     flexDirection="row"
                     justifySelf={"center"}
                     pl={"5em"}
                >

                    <Box height={height} pt={"27px"} width={"100px"}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                            Services
                        </Text>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"}>
                            About
                        </Text>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
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

