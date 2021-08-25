import {Box, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export function AboutSection() {
    return (
        <>
            <SimpleGrid
                width={["80%", "80%", "85%", "85%"]}
                maxW={["100%", "100%", "1024px"]}
                zIndex={2}
                pt={["18em","15em"]}>
            <Box display={"flex"} flexDirection={"row"}
                 colSpan={[1, 1, 7, 7]}>
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
            </Box>
            </SimpleGrid>

            <SimpleGrid pt={["1em", "2em", "10em"]}
                        width={["80%", "80%", "85%", "85%"]}
                        maxW={["100%", "100%", "1024px"]}
                        columns={[0, 0, 12, 12]}
                        zIndex={2}
            >

                <GridItem
                    colSpan={[1, 1, 6, 5]}
                    display={["none", "none", "flex"]}
                    flexDirection={"row"}
                    position={["relative", "relative", "relative", "relative"]}
                    boxSizing={"border-box"}
                    w={["300px", "310px","310px", "352px", "403px"]}
                    maxW={"510px"}

                >
                    <MoranaImageContainer imagePath={"/static/images/Oana2.png"}/>
                </GridItem>

                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colSpan={[1, 1, 6, 7]}
                >
                    <Heading variant="header2"
                             pt={["25px", "25px", "0px", "0px"]}
                             fontSize={["40px", "50px", "50px", "50px", "76px"]}
                             textAlign={["center", "center", "start"]}
                             alignSelf={["center", "center", "flex-start"]}
                    w={["300px", "300px", "380px", "380px", "660px"]}>
                        My heart beats agile!
                    </Heading>

                    <Box
                        display={["flex", "flex", "none"]}
                        position={["relative", "relative", "relative", "absolute"]}
                        alignSelf={"center"}
                        boxSizing={"border-box"}
                        w={["310px", "310px", "340px", "340px"]}
                    >
                        <MoranaImageContainer imagePath={"/static/images/Oana2.png"}/>
                    </Box>

                    <Text   w={["300px", "300px", "380px", "380px", "600px"]}
                          variant={"primary"}
                          fontSize={["14px", "16px", "14px", "18px"]}
                          lineHeight={["17px", "20px", "20px", "24px"]}
                          textAlign={["start", "start", "start"]}
                          pt={["2em", "2em", "2em", "2em"]}
                          alignSelf={["center", "center", "flex-start"]}>
                        Hi, I am Oana! - very open and determined, a go-getter, who achieves the goals she sets her mind to. Always giving 110%, I am reliable and autonomous, more than happy to take on the responsibility of my team and/or product.
                    </Text>
                    <Text variant={"primary"}
                          w={["300px", "300px", "380px", "380px", "600px"]}
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
