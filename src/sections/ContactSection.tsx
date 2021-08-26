import {Button, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export default function ContactSection() {
    return <>
        <SimpleGrid
            width={"100%"}
            maxW={["100%", "100%", "1024px"]}
            zIndex={2}
            pt={["6em", "3em", "15em"]}
            columns={[12, 12, 12, 12, 12]}
        >
            <GridItem colSpan={[12, 12, 12, 12]}
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


            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 12, 12]}
                      display={"flex"}
                      flexDirection="row"
                      pt={["3em", "4em"]}
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


            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 11, 11]}>
                <Button
                    variant={"desktop"}
                    fontSize={["24px", "24px", "30px"]}
                    height={["50px", "50px", "67px", "67px", "67px"]}
                    display={"flex"}
                    justifySelf={["center", "center", "start"]}
                    mt={["1em", "2em"]}
                >
                    Get in touch!
                </Button>

            </GridItem>


        </SimpleGrid>
    </>;
}
