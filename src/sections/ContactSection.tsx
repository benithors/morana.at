import {Box, Button, GridItem, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {Button2FontSizes, ButtonFontSizes, Header1FontSizes, Header2LineHeight, SectionFontSizes} from "../components/ResponsiveSizes";

export default function ContactSection() {
    return <>
        <SimpleGrid
            width={"100%"}
            maxW={["100%", "100%", "1024px"]}
            zIndex={2}
            pt={["0em", "2em","2em", "3em"]}
            mb={"5em"}
            columns={[12, 12, 12, 12, 12]}
            id={"contactSection"}
            pb={"5em"}
        >
            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 12, 12]}
                      display={"flex"} flexDirection={"row"}
                      pt={["70px", "70px", "100px","100px","100px"]}>
                <Heading fontSize={SectionFontSizes}
                         variant="services"
                         textAlign={"center"}
                         color={"brand.secondary"}>
                    /
                </Heading>

                <Heading fontSize={SectionFontSizes}
                         lineHeight={"23px"}
                         variant="services" textAlign={"center"} whiteSpace={"break-spaces"}>
                    {" "} Contact
                </Heading>
            </GridItem>


            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[12, 11, 11, 12, 12]}
                      display={"flex"}
                      flexDirection="row"
                      pt={["5em", "4em"]}
                      justifySelf={"start"}
            >
                <Heading variant="header2"
                         lineHeight={["40px","60px","60px","60px","90px"]}
                         fontSize={["28px","50px","50px","50px","76px"]}
                         fontFamily={"Fugaz One"}
                         color={"black"}
                         display={"inline"}
                         whiteSpace={"break-spaces"}
                         textAlign={["start", "start", "start"]}
                >
                    <Text as={"span"}>
                        Does this{" "}
                    </Text>
                    <Text as={"span"} color={"brand.secondary"}>
                        sound good{" "}
                    </Text>
                    <Text as={"span"}>
                        to you? Let’s make things{" "}
                    </Text>
                    <Text as={"span"} color={"brand.secondary"}>
                        happen
                    </Text>
                    <Text as={"span"}>
                        .
                    </Text>

                </Heading>
            </GridItem>




            <GridItem  pt={"0.5em"}
                       colStart={[1, 1, 2, 2, 1]} colEnd={[13, 13, 13, 13, 13]}>
                <Box display={"flex"} justifyContent={["center", "center","start", "start"]}>
                    <Link
                        fontSize={Button2FontSizes}
                        width={["245px", "339px", "339px", "339px", "339px"]}
                        height={["50px", "67px", "67px", "67px", "67px"]}
                        justifySelf={["center", "center","start", "start"]}
                        mt={["1em", "2em"]}
                        href="mailto:oana.moraru@morana.at" isExternal
                    >
                        Get in touch!
                    </Link>
                </Box>
            </GridItem>

        </SimpleGrid>
    </>;
}
