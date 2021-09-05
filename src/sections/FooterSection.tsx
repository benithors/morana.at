import {Box, GridItem, Link, SimpleGrid, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import Oana3 from "../../public/static/images/Oana3.png";
import Oana1 from "../../public/static/images/Oana1.png";
export default function FooterSection() {
    return (
        <Box w={["100%","100%","75%"]}
             alignSelf={"flex-end"}
             display="flex"
             flexDirection="column"
             alignItems={"center"}
             overflowX={"hidden"}
             backgroundSize={"100% 100%"}
             backgroundRepeat={"no-repeat"}
             bgImage={["url('/static/svg/bg3Mobile.svg')","url('/static/svg/bg3Mobile.svg')","url('/static/svg/bg3Desktop.svg')"]}>
        <SimpleGrid
        columns={12}
        maxW={["100%", "100%", "1055px"]}
        pt={["10em", "16em", "2em"]}
        zIndex={2}
        w={"100%"}
    >

            <GridItem
                colStart={3} colEnd={11}
                display={"block"}
                position={"relative"}
                alignSelf={"center"}
                boxSizing={"border-box"}
                pt={"1em"}
            >
                <MoranaImageContainer  height={"94%"} width={"94%"} ml={"4px"} mt={"4px"} oanaPic={Oana3}/>
            </GridItem>


        <GridItem colSpan={12}
                  justifySelf={["center", "center", "flex-end"]}
                  justifyContent={"space-between"}
                  display={"flex"} flexDirection={"row"}
                  w={"100px"}
                  mb={"2em"}

        >

            <Box id={"mail"} mt={"3px"}
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66659 6.66602H33.3333C35.1666 6.66602 36.6666 8.16602 36.6666 9.99935V29.9993C36.6666 31.8327 35.1666 33.3327 33.3333 33.3327H6.66659C4.83325 33.3327 3.33325 31.8327 3.33325 29.9993V9.99935C3.33325 8.16602 4.83325 6.66602 6.66659 6.66602Z" stroke="#4CE6C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M36.6666 10L19.9999 21.6667L3.33325 10" stroke="#4CE6C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


            </Box>
            <Box id={"linkedin"}
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6666 13.334C29.3188 13.334 31.8623 14.3876 33.7377 16.2629C35.6131 18.1383 36.6666 20.6818 36.6666 23.334V35.0007H30V23.334C30 22.4499 29.6488 21.6021 29.0237 20.977C28.3985 20.3518 27.5507 20.0007 26.6666 20.0007C25.7826 20.0007 24.9347 20.3518 24.3096 20.977C23.6845 21.6021 23.3333 22.4499 23.3333 23.334V35.0007H16.6666V23.334C16.6666 20.6818 17.7202 18.1383 19.5956 16.2629C21.4709 14.3876 24.0145 13.334 26.6666 13.334V13.334Z" stroke="#4CE6C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 15H3.33337V35H10V15Z" stroke="#4CE6C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66671 10.0006C8.50765 10.0006 10 8.50827 10 6.66732C10 4.82637 8.50765 3.33398 6.66671 3.33398C4.82576 3.33398 3.33337 4.82637 3.33337 6.66732C3.33337 8.50827 4.82576 10.0006 6.66671 10.0006Z" stroke="#4CE6C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </Box>
        </GridItem>

        <GridItem   colStart={[2, 2, 2, 2, 1]} colEnd={[11, 12, 7, 7, 7]}
                  mb={"3em"}
                  display={"flex"} flexDirection={"row"} justifyContent={"space-between"} pt={"3em"}>
            <Box>

                <Text fontSize={["10px", "20px"]} fontFamily={"AbeeZee"} color={["white", "white", "black"]}>
                    Copyright @Morana.at
                </Text>
            </Box>
            <Box display={["none","none","auto"]}>
                <Text color={"brand.secondary"} fontSize={["10px", "20px"]} fontFamily={"AbeeZee"}>
                    Privacy
                </Text>

            </Box>

        </GridItem>




    </SimpleGrid>
        </Box>)
};
