import {Box, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import Oana3 from "../../public/static/images/Oana3.png";
import Link from 'next/link'
import Image from "next/image";
import linkedInSvg from "../../public/static/svg/linkedin.svg"
import mailSvg from "../../public/static/svg/mail.svg"

export default function FooterSection() {
    return (
        <Box w={"100%"}
             alignSelf={"flex-end"}
             display="flex"
             flexDirection="column"
             alignItems={"center"}
             overflowX={"hidden"}
             backgroundSize={"100% 100%"}
             backgroundRepeat={"no-repeat"}
             bgImage={["url('/static/svg/bg3Mobile.svg')", "url('/static/svg/bg3Mobile.svg')", "url('/static/svg/bg3Ipad.svg')", "url('/static/svg/bg3Ipad.svg')", "url('/static/svg/bg3Desktop.svg')"]}>
            <SimpleGrid
                columns={24}
                maxW={["100%", "100%", "1440px"]}
                pt={["10em", "16em", "20em", "20em", "0em"]}
                zIndex={2}
                w={"100%"}
            >

                <GridItem
                    colStart={[5, 7, 8, 8, 9]} colEnd={[21, 19, 18, 18, 17]}
                    display={"block"}
                    position={"relative"}
                    alignSelf={"center"}
                    boxSizing={"border-box"}

                >
                    <MoranaImageContainer height={"99%"} width={"99%"} ml={"3px"} mt={"1px"} oanaPic={Oana3} priority={false}/>
                </GridItem>


                <GridItem colStart={[2,2,2,2,21]} colEnd={[24, 24, 24, 24, 23]}
                          justifySelf={["center", "center", "center", "center", "flex-end"]}
                          justifyContent={"space-between"}
                          display={"flex"}
                          flexDirection={"row"}
                          mb={"2em"}
                          pt={["1.5em","1.5em","1.5em","1.5em","12em"]}

                >
                    <Link href="mailto:oana.moraru@morana.at" passHref={true}
                    >
                        <Box w={["40px", "40px", "60px", "70px", "70px"]} mr={["0.5em","0.5em","0.5em","0.5em","0.8em",]} pt={["2px","2px","4px"]}>


                            <Image
                                src={mailSvg}
                                alt={"Oana Moraru"}
                                layout={"responsive"}
                                loading={"lazy"}/>

                        </Box>

                    </Link>
                    <Link href="https://at.linkedin.com/in/oana-moraru" passHref={true}
                    >
                        <Box w={["40px", "40px", "60px", "70px", "70px"]} ml={["0.5em","0.5em","0.5em","0.5em","0.8em",]}>

                            <Image
                                src={linkedInSvg}
                                alt={"Oana Moraru"}
                                layout={"responsive"}
                                loading={"lazy"}
                            />


                        </Box>
                    </Link>
                </GridItem>

                <GridItem colStart={[3, 3, 3, 3,3]} colEnd={[12, 12, 23, 23, 23]}
                          mb={"2em"}
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                          pt={"3em"}>
                    <Box>
                        <Text fontSize={["10px", "12px", "12px", "14px", "16px"]} fontFamily={"AbeeZee"} color={["white", "white", "white"]}>
                            Copyright @Morana.at
                        </Text>
                    </Box>
                    <Box display={["none", "none", "block"]}>
                        <Link href="/privacy">
                            <Text color={"brand.secondary"} fontSize={["10px", "12px", "12px", "14px", "16px"]} fontFamily={"AbeeZee"}>
                                Privacy
                            </Text>
                        </Link>
                    </Box>

                </GridItem>


            </SimpleGrid>
        </Box>)
};
