import React from 'react'
import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from 'next/image'
import {MenuToggle} from "./icons/AnimatedMoranaBurger";
import {headerHeightPx} from "./HeadyMobile";

export const headerHeight: number = 54


const HeadyDesktop = () => {
    const height = ["54px","54px","80px"];
    return (
        <Box display="flex"
             flexDirection="column"
             w={"100vw"}
             alignItems={"center"}
             minH={height}
             height={height}
             position={"fixed"}
             top={0}
             zIndex={10}
             // bg={["red","blue","gray","purple"]}
            bg={"brand.maintransparent"}
        >
            <SimpleGrid
                columns={2}
                width={["95%", "95%", "85%", "85%"]}
                maxW={"1024px"}
            >
                <Box height={height}
                     display="flex"
                     flexDirection="row"
                     width={"602px"}
                >
                    <Box height={["61px","61px","100px","100px"]} width={["53px","53px","87px","87px"]} pt={["5px","5px","0px","0px"]}>
                        <Image
                            src="/static/images/moranaIcon.png"
                            width={100}
                            height={87}
                            alt={"Morana"}
                            layout={"responsive"}
                        />
                    </Box>
                    <Box height={height} pt={["15px","15px","28px"]} flexGrow={1}>
                        <Heading variant="header1" fontSize={["20px","22px"]}>
                            Morana.at
                        </Heading>
                    </Box>
                </Box>

                <Box display={["none","none","flex"]}
                     flexDirection="row"
                     justifySelf={"center"}
                     pl={"5em"} >

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
                <Box height={headerHeightPx} pr={"0.5em"}  justifySelf={"end"} display={["flex","flex","none"]}>
                    <MenuToggle/>
                </Box>

            </SimpleGrid>
        </Box>


    )
}

export default HeadyDesktop

