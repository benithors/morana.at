import {Box, Button, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export default function ContactSection() {
    return <>
        <SimpleGrid
            width={["80%", "80%", "85%", "85%"]}
            maxW={["100%", "100%", "1024px"]}
        >
            <Box display={"flex"} flexDirection={"row"} pt={"9em"} colSpan={[1, 1, 7, 7]}>
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
            </Box>


            <Box display={"flex"}
                 flexDirection="row"
                 pt={"25px"}
                 width={["100%", "80%", "80%", "80%","100%"]}
                 justifySelf={"start"}
            >
                <Heading variant="header2"
                         lineHeight={["40px","40px","40px","40px","90px"]}
                         fontSize={["28px", "35px","40px","50px","76px"]}
                         color={"black"}
                         display={"inline"}
                         whiteSpace={"break-spaces"}

                         textAlign={["start", "start", "start"]}>
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
                        happen.
                    </Text>

                </Heading>
            </Box>



            <Button variant={"desktop"}
                    fontSize={["24px","24px","30px"]}
                    width={["245px","245px","339px","339px","339px"]}
                    height={["64px","64px","67px","67px","67px"]}
                    display={"flex"}
                    justifySelf={"center"}
            >
                Get in touch!
            </Button>



            <Box
                display={["flex", "flex", "flex"]}
                position={["relative", "relative", "relative", "relative"]}
                alignSelf={"center"}
                boxSizing={"border-box"}
                w={["310px", "310px", "340px", "340px"]}
                justifySelf={"center"}
            >
                <MoranaImageContainer imagePath={"/static/images/Oana3.png"}/>
            </Box>
        </SimpleGrid>
    </>;
}
