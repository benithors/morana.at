import {Box, Button, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";

export default function ContactSection() {
    return <>
        <SimpleGrid pt={["9em", "15em"]} columns={[1, 2]}>
            <Box display={"flex"} width={"602px"} pt={"25px"}>
                <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                    /
                </Heading>

                <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"}>
                    {" "} Contact
                </Heading>
            </Box>
        </SimpleGrid>


        <SimpleGrid pt={["9em"]} columns={[1]}>
            <Box display={"flex"}
                 flexDirection="row"
                 pt={"25px"}
                 width={["100%", "600px", "1203px"]}

            >
                <Heading variant="header2" fontSize={["35px", "76px"]} color={"black"} display={"inline"} whiteSpace={"break-spaces"} textAlign={["center", "start", "start"]}>
                    <Text as={"span"}>
                        Does this{" "}
                    </Text>
                    <Text as={"span"} color={"brand.secondary"}>
                        sound good{" "}
                    </Text>
                    <Text as={"span"}>
                        to you?
                    </Text>
                </Heading>
            </Box>

            <Box width={["100%", "500px", "1203px"]}>

                <Heading variant="header2" fontSize={["35px", "76px"]} color={"black"} display={"inline"} whiteSpace={"break-spaces"}>
                    <Text as={"span"}>
                        Lets make things {" "}
                    </Text>
                    <Text as={"span"} color={"brand.secondary"}>
                        happen.
                    </Text>

                </Heading>

            </Box>
        </SimpleGrid>


        <SimpleGrid pt={"1em"} columns={[1, 2]}>
            <Box width={["100%", "100%"]} pt={"25px"}>
                <Button variant={"desktop"}>
                    Get in touch!
                </Button>
            </Box>
        </SimpleGrid>
        <MoranaImageContainer imagePath={"/static/images/oana3.png"}/>
    </>;
}
