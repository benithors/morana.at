import React from 'react'
import {Box, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from 'next/image'
import {MenuToggle} from "./icons/AnimatedMoranaBurger";
import {headerHeightPx} from "./HeadyMobile";

export const headerHeight: number = 54


const HeadyDesktop = () => {
    const height = ["54px", "54px", "80px"];
    return (
        <Box
            w={"100vw"}
            display={"flex"}
            justifyContent={"center"}
            minH={height}
            height={height}
            position={"fixed"}
            top={0}
            zIndex={10}
            // bg={["red","blue","gray","purple"]}
            bg={"brand.maintransparent"}
        >
            <SimpleGrid
                columns={12}
                maxW={["100%", "100%", "1055px"]}
                width={["92%", "92%", "88%", "88%"]}
            >

                <GridItem colSpan={[10, 10, 6, 6]}
                          display={"flex"}
                          flexDirection={"row"}

                >
                    <Box height={["61px", "61px", "100px", "100px"]} width={["53px", "53px", "87px", "87px"]} pt={["5px", "5px", "0px", "0px"]}>
                        <Image
                            src="/static/images/moranaIcon.png"
                            width={100}
                            height={87}
                            alt={"Morana"}

                        />
                    </Box>

                    <Heading
                             variant="header1" fontSize={["20px", "22px"]} height={height} pt={["15px", "15px", "28px"]}>

                        Morana.at
                    </Heading>
                </GridItem>

                <GridItem colSpan={[1, 1, 6, 6]}
                          display={["none", "none", "flex"]}
                          flexDirection="row"
                          justifySelf={"end"}
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
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 2]}

                          height={headerHeightPx} pr={"0.5em"} justifySelf={"end"} display={["flex", "flex", "none"]}>
                    <MenuToggle/>
                </GridItem>

            </SimpleGrid>
        </Box>


    )
}

export default HeadyDesktop

