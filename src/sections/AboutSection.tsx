import {Box, Button, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import {BasicTextLineHeight, BasicTextSizes, Button2FontSizes, SectionFontSizes} from "../components/ResponsiveSizes";
import Oana2 from "../../public/static/images/Oana2.png"
import ExpierenceSection from "./ExperienceSection";
import Link from "next/link";
import {headerHeightPx} from "../components/HeadyDesktop";

export default function AboutSection() {
    return (
        <>
            <Box w={"100%"}
                 display="flex"
                 flexDirection="column"
                 alignItems={"center"}
                 overflowX={"hidden"}
                 backgroundSize={"100% 100%"}
                 backgroundRepeat={"no-repeat"}
                 bgImage={["url('/static/svg/bg2Mobile.svg')", "url('/static/svg/bg2Mobile.svg')", "url('/static/svg/bg2Desktop.svg')", "url('/static/svg/bg2Desktop.svg')"]}
                 pb={["7em","7em","7em","7em","7em",]}
               >
                <SimpleGrid
                    width={"100%"}
                    maxW={["100%", "100%", "1440px"]}
                    zIndex={2}
                    pt={["15em", "14em", "18em", "18em"]}
                    columns={24}
                >
                    <GridItem
                        pt={["70px", "70px", "0","50px","0px"]}
                        id={"about"}
                        display={"flex"} flexDirection={"row"}
                        colStart={[3, 3, 3, 3, 3]} colEnd={[23, 22, 14, 14, 14]}>
                        <Heading fontSize={SectionFontSizes}
                                 variant="services"
                                 textAlign={"center"}
                                 color={"brand.secondary"}
                               >
                            /
                        </Heading>

                        <Heading fontSize={SectionFontSizes}
                                 color={"white"}
                                 variant="services" textAlign={"center"} whiteSpace={"break-spaces"}>
                            {" "} About
                        </Heading>
                    </GridItem>
                </SimpleGrid>

                <SimpleGrid pt={["1em", "2em", "3.5em"]}
                            width={"100%"}
                            maxW={["100%", "100%", "1440px"]}
                            columns={24}
                            zIndex={2}
                >

                    <GridItem
                        pt={["0em", "0em", "0em", "0em", "2em",]}
                        colStart={[2, 2, 5, 5, 3]} colEnd={[23, 23, 14, 14, 10]}
                        display={["none", "none", "flex"]}
                        position={"relative"}
                        boxSizing={"border-box"}
                        rowSpan={[1, 1, 1, 1, 2]}
                    >
                        <MoranaImageContainer height={"92%"} width={"92%"} ml={"9px"} mt={"5px"} oanaPic={Oana2} priority={false}/>
                    </GridItem>

                    <GridItem display={"flex"}
                              flexDirection="column"
                              zIndex={2}
                              colStart={[5, 4, 16, 16, 11]} colEnd={[21, 21, 21, 21, 23]}
                              pt={["0px", "0px", "25px", "0px"]}

                    >
                        <Heading variant="header2"
                                 lineHeight={["40px", "60px", "60px", "80px"]}
                                 pt={["25px", "25px", "0px", "30px"]}
                                 fontSize={["40px", "50px", "50px", "76px", "76px"]}
                                 textAlign={["center", "center", "start"]}
                                 alignSelf={["center", "center", "flex-start"]}>
                            My heart beats Agile!
                        </Heading>
                    </GridItem>
                    <GridItem display={["flex", "flex", "none"]}
                              flexDirection="column"
                              zIndex={2}
                              colStart={[5, 4, 0, 0, 0]} colEnd={[21, 23, 0, 0, 0]}

                    >
                        <Box
                            display={["flex", "flex", "none"]}
                            position={"relative"}
                            alignSelf={"center"}
                            boxSizing={"border-box"}
                            pt={"1.5em"}>
                            <MoranaImageContainer height={"92%"} width={"92%"} ml={"7px"} mt={"5px"} oanaPic={Oana2} priority={false}/>
                        </Box>
                    </GridItem>
                    <GridItem display={"flex"}
                              flexDirection="column"
                              zIndex={2}
                              colStart={[3, 3, 3, 3, 11]} colEnd={23}
                    >
                        <Text
                            variant={"primary"}
                            fontSize={BasicTextSizes}
                            lineHeight={BasicTextLineHeight}
                            textAlign={["start", "start", "start"]}
                            pt={"1.5em"}
                            alignSelf={["center", "center", "flex-start"]}>
                            Hi, I am Oana! - very open and determined, a go-getter, who achieves the goals she sets her mind to. Always giving 110%, I am reliable and autonomous, more than happy to take on the responsibility of my team and/or product.
                        </Text>
                        <Text variant={"primary"}
                              fontSize={BasicTextSizes}
                              lineHeight={BasicTextLineHeight}
                              textAlign={["start", "start", "start"]}
                              pt={"1.5em"}
                              alignSelf={["center", "center", "flex-start"]}>
                            I bring structure, transparence and drive into your projects & teams, helping you reach your business goals in a timely and highly qualitative manner.
                        </Text>


                    </GridItem>


                </SimpleGrid>
                <ExpierenceSection/>

                <Box zIndex={2} justifyContent={"center"} alignItems={"center"} pt={["0em", "0em", "2em"]} pb={["0em", "0em", "6em"]}>
                    <Link href="CV_Moraru.pdf">
                        <Button variant={"desktop"}
                                fontSize={Button2FontSizes}
                                width={["245px", "339px", "339px", "339px", "339px"]}
                                height={["50px", "67px", "67px", "67px", "67px"]}
                                display={["none", "none", "flex"]}
                        >
                            Download Resume
                        </Button>
                    </Link>

                </Box>
            </Box>
        </>
    )
};
