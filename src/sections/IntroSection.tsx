import {Box, GridItem, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import Oana1 from "../../public/static/images/OanaMain.png"
import {BasicTextLineHeight, BasicTextSizes, ButtonFontSizes, Header1FontSizes, Header2FontSizes} from "../components/ResponsiveSizes";


export default function IntroSection() {
    return (
        <Box w={"100%"}
             display="flex"
             flexDirection="column"
             alignItems={"center"}
             overflowX={"hidden"}
             backgroundImage={["url('/static/svg/bg1Mobile.svg')", "url('/static/svg/bg1Mobile.svg')", "url('/static/svg/bg1Desktop.svg')"]}
             backgroundSize={"100% 100%"}
             backgroundRepeat={"no-repeat"}
             pb={"5em"}>


            <SimpleGrid pt={["4em", "4em", "6em"]}
                        maxW={["100%", "100%", "1024px"]}
                        columns={24}
            >


                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[2, 2, 3, 3, 2]} colEnd={[24, 24, 14, 14, 14]}

                >


                    <Heading variant="header2"
                             pt={["0.6em", "0.5em", "0px", "0px"]}
                             fontSize={Header1FontSizes}
                             textAlign={["center", "center", "start"]}>
                        Oana Moraru
                    </Heading>
                    <Heading variant="header3"
                             pt={"0.3em"}
                             fontSize={Header2FontSizes}
                             textAlign={["center", "center", "start"]}>
                        Agile Consultant • Freelancer
                    </Heading>

                </GridItem>

                <GridItem
                    colStart={[4, 4, 4, 4, 2]} colEnd={[22, 22, 14, 14, 14]}
                    display={["flex", "flex", "none"]}
                    position={"relative"}
                    alignSelf={"center"}
                    boxSizing={"border-box"}
                    pt={"1em"}
                    flexDirection="column"

                >
                    <Box
                        display={["flex", "flex", "none"]}
                        position={"relative"}
                        alignSelf={"center"}
                        boxSizing={"border-box"}
                    >
                        <MoranaImageContainer height={"92%"} width={"94%"} ml={"4px"} mt={"4px"} oanaPic={Oana1} priority={false}/>
                    </Box>
                </GridItem>
                <GridItem
                    pt={"2.5em"}
                    colStart={[2, 2, 14, 14, 14]} colEnd={[2, 2, 23, 23, 23]}
                    rowSpan={2}
                    display={["none", "none", "flex"]}
                    flexDirection={"row"}
                    position={["relative", "relative", "relative", "relative"]}
                    boxSizing={"border-box"}
                    w={["100%"]}
                    maxW={"510px"}
                    maxH={"510px"}


                >
                    <MoranaImageContainer height={"94%"} width={"94%"} ml={"9px"} mt={"6px"} oanaPic={Oana1} priority={false}/>
                </GridItem>
                <GridItem display={"flex"}
                          flexDirection="column"
                          zIndex={2}
                          colStart={[3, 3, 3, 3, 2]} colEnd={[23, 23, 13, 13, 13]}
                >
                    <Text
                        variant={"primary"}
                        fontSize={BasicTextSizes}
                        lineHeight={BasicTextLineHeight}
                        textAlign={["center", "center", "start"]}
                        order={[1, 1, 0]}
                        pt={["1.4em", "1.2em", "1.2em", "1.2em"]}
                        pb={"1.7em"}
                        alignSelf={["center", "center", "flex-start"]}>
                        IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                    </Text>


                    <Link
                        fontSize={ButtonFontSizes}
                        width={["245px", "245px", "245px", "339px", "339px"]}
                        height={["50px", "50px", "50px", "67px", "67px"]}
                        order={[2, 2, 0, 0]}
                        alignSelf={["center", "center", "flex-start"]}
                        href="mailto:oana.moraru@morana.at" isExternal>
                        Get in touch!
                    </Link>

                </GridItem>


            </SimpleGrid>
        </Box>
    );
}
