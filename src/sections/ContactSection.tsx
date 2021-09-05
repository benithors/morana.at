import {Box, Button, GridItem, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export default function ContactSection() {
    return <>
        <SimpleGrid
            width={"100%"}
            maxW={["100%", "100%", "1024px"]}
            zIndex={2}
            pt={["1em", "3em", "15em"]}
            mb={"5em"}
            columns={[12, 12, 12, 12, 12]}
            id={"contactSection"}
        >
            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 12, 12]}
                      display={"flex"} flexDirection={"row"} pt={"9em"}>
                <Heading fontSize={SectionHeaderSizes}
                         variant="services"
                         textAlign={"center"}
                         color={"brand.secondary"}>
                    /
                </Heading>

                <Heading fontSize={SectionHeaderSizes}
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
                         lineHeight={["40px", "40px", "40px", "50px", "90px"]}
                         fontSize={["28px", "35px", "40px", "50px", "70px"]}
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
                        to you? Lets make things{" "}
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
                       colStart={[1, 1, 2, 2, 5]} colEnd={[13, 13, 6, 11, 9]}>
                <Box display={"flex"} justifyContent={"center"}>
                    <Link
                        w={"245px"}
                        fontSize={["24px", "24px", "30px"]}
                        height={["50px", "50px", "67px", "67px", "67px"]}
                        justifySelf={["center", "center", "start"]}
                        mt={["1em", "2em"]}
                        href="mailto:test@email.com" isExternal
                    >
                        Get in touch!
                    </Link>
                </Box>
            </GridItem>

        </SimpleGrid>
    </>;
}
