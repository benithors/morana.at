import {Box, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MoranaImageContainer from "../components/MoranaImageContainer";

export default function FooterSection() {
    return <SimpleGrid
        columns={12}
        maxW={["100%", "100%", "1055px"]}
        width={["92%", "92%", "88%", "88%"]}
        pt={["16em", "16em", "2em"]}
        zIndex={2}

    >
        <GridItem colSpan={12}
                  display={["flex", "flex", "flex"]}
                  position={["relative", "relative", "relative", "relative"]}
                  alignSelf={"center"}
                  boxSizing={"border-box"}
                  w={["310px", "310px", "340px", "478px"]}
                  justifySelf={"center"}
                  zIndex={2}
                  pb={"1em"}
        >
            <MoranaImageContainer imagePath={"/static/images/Oana3.png"}/>
        </GridItem>
        <GridItem colSpan={12}
                  justifySelf={["center", "center", "flex-end"]}
                  justifyContent={"space-between"}
                  display={"flex"} flexDirection={"row"}
                  w={"100px"}

        >

            <Box
                w={"100%"} mr={"1em"}
            >
                <Image
                    src={"/static/images/mail.png"}
                    width={65}
                    height={65}
                    alt={"Mail"}
                    layout={"responsive"}
                />

            </Box>
            <Box
                w={"100%"}
                ml={"1em"}
            >
                <Image
                    src={"/static/images/linkedin.png"}
                    width={65}
                    height={65}
                    alt={"Linkedin"}
                    layout={"responsive"}
                />
            </Box>
        </GridItem>

        <GridItem colSpan={12} mb={"2em"}
                  display={"flex"} flexDirection={"row"} justifyContent={"space-between"} pt={"3em"}>
            <Box>

                <Text fontSize={["10px", "20px"]} fontFamily={"AbeeZee"} color={["white", "white", "black"]}>
                    Copyright @Morana.at
                </Text>
            </Box>
            <Box>
                <Text color={"brand.secondary"} fontSize={["10px", "20px"]} fontFamily={"AbeeZee"}>
                    Privacy
                </Text>

            </Box>

        </GridItem>


    </SimpleGrid>
}
