import {Box, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";
import Oana2 from "../../public/static/images/Oana2.png"

export function AboutSection() {
    return (
        <>
            <SimpleGrid
                width={"100%"}
                maxW={["100%", "100%", "1024px"]}
                zIndex={2}
                pt={["14em", "14em","25em"]}
                columns={[12, 12, 12, 12]}
                id={"aboutSection"}
            >
                <GridItem
                    display={"flex"} flexDirection={"row"}
                    colStart={[2, 2, 2, 2, 1]} colEnd={[12, 11, 7, 7, 7]}>
                    <Heading fontSize={SectionHeaderSizes}
                             variant="services"
                             textAlign={"center"}
                             color={"brand.secondary"}>
                        /
                    </Heading>

                    <Heading fontSize={SectionHeaderSizes}
                             lineHeight={"23px"}
                             color={"white"}

                             variant="services" textAlign={"center"} whiteSpace={"break-spaces"}>
                        {" "} About
                    </Heading>
                </GridItem>
            </SimpleGrid>

            <SimpleGrid pt={["1em", "2em", "10em"]}
                        width={"100%"}
                        maxW={["100%", "100%", "1024px"]}
                        columns={[12, 12, 12, 12]}
                        zIndex={2}

            >

                <GridItem
                    colStart={[1, 1, 2, 2, 1]} colEnd={[12, 12, 7, 7, 7]}
                    display={["none", "none", "flex"]}
                    position={"relative"}
                    boxSizing={"border-box"}

                >
                    <MoranaImageContainer  height={"92%"} width={"92%"} ml={"9px"} mt={"5px"} oanaPic={Oana2}/>
                </GridItem>

                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[2, 2, 8, 8, 8]} colEnd={[12, 12, 12, 12, 13]}
                >
                    <Heading variant="header2"
                             lineHeight={"40px"}
                             pt={["25px", "25px", "0px", "0px"]}
                             fontSize={["42px", "50px", "50px", "50px", "76px"]}
                             textAlign={["center", "center", "start"]}
                             alignSelf={["center", "center", "flex-start"]}   >
                        My heart beats agile!
                    </Heading>
                </GridItem>
                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[3, 2, 8, 8, 8]} colEnd={[11, 12, 12, 12, 13]}
                >
                    <Box
                        display={["flex", "flex", "none"]}
                        position={"relative"}
                        alignSelf={"center"}
                        boxSizing={"border-box"}
                        pt={"1.5em"}
                    >
                        <MoranaImageContainer  height={"92%"} width={"92%"} ml={"7px"} mt={"5px"} oanaPic={Oana2}/>
                    </Box>
                </GridItem>
                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[2, 2, 8, 8, 8]} colEnd={[12, 12, 12, 12, 13]}
                >
                    <Text
                        variant={"primary"}
                        fontSize={["14px", "16px", "14px", "18px"]}
                        lineHeight={["17px", "20px", "20px", "24px"]}
                        textAlign={["start", "start", "start"]}
                        pt={"1.5em"}
                        alignSelf={["center", "center", "flex-start"]}>
                        Hi, I am Oana! - very open and determined, a go-getter, who achieves the goals she sets her mind to. Always giving 110%, I am reliable and autonomous, more than happy to take on the responsibility of my team and/or product.
                    </Text>
                    <Text variant={"primary"}

                          fontSize={["14px", "16px", "14px", "18px"]}
                          lineHeight={["17px", "20px", "20px", "24px"]}
                          textAlign={["start", "start", "start"]}
                          pt={"1.5em"}
                          alignSelf={["center", "center", "flex-start"]}>
                        I bring structure, transparence and drive into your projects & teams, helping you reach your business goals in a timely and highly qualitative manner.
                    </Text>


                </GridItem>


            </SimpleGrid>

        </>
    )
};
