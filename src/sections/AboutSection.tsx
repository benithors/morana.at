import {Box, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export function AboutSection() {
    return (
        <>
            <SimpleGrid
                width={"100%"}
                maxW={["100%", "100%", "1024px"]}
                zIndex={2}
                pt={["18em", "15em"]}
                columns={[12, 12, 12, 12]}
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
                    flexDirection={"row"}
                    position={["relative", "relative", "relative", "relative"]}
                    boxSizing={"border-box"}
                >
                    <MoranaImageContainer imagePath={"/static/images/Oana2.png"}/>
                </GridItem>

                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[2, 2, 8, 8, 8]} colEnd={[12, 12, 12, 12, 13]}
                >
                    <Heading variant="header2"
                             pt={["25px", "25px", "0px", "0px"]}
                             fontSize={["40px", "50px", "50px", "50px", "76px"]}
                             textAlign={["center", "center", "start"]}
                             alignSelf={["center", "center", "flex-start"]}>
                        My heart beats agile!
                    </Heading>

                    <Box
                        display={["flex", "flex", "none"]}
                        position={["relative", "relative", "relative", "absolute"]}
                        alignSelf={"center"}
                        boxSizing={"border-box"}
                    >
                        <MoranaImageContainer imagePath={"/static/images/Oana2.png"}/>
                    </Box>

                    <Text
                        variant={"primary"}
                        fontSize={["14px", "16px", "14px", "18px"]}
                        lineHeight={["17px", "20px", "20px", "24px"]}
                        textAlign={["start", "start", "start"]}
                        pt={["2em", "2em", "2em", "2em"]}
                        alignSelf={["center", "center", "flex-start"]}>
                        Hi, I am Oana! - very open and determined, a go-getter, who achieves the goals she sets her mind to. Always giving 110%, I am reliable and autonomous, more than happy to take on the responsibility of my team and/or product.
                    </Text>
                    <Text variant={"primary"}

                          fontSize={["14px", "16px", "14px", "18px"]}
                          lineHeight={["17px", "20px", "20px", "24px"]}
                          textAlign={["start", "start", "start"]}
                          pt={["2em", "2em", "2em", "2em"]}
                          alignSelf={["center", "center", "flex-start"]}>
                        I bring structure, transparence and drive into your projects & teams, helping you reach your business goals in a timely and highly qualitative manner.
                    </Text>


                </GridItem>


            </SimpleGrid>

        </>
    )
};
