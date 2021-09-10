import {Box, Button, GridItem, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import React from "react";
import Oana1 from "../../public/static/images/Oana1.png"


export default function IntroSection() {
    return (
        <Box w={"100%"}
             display="flex"
             flexDirection="column"
             alignItems={"center"}
             overflowX={"hidden"}
            backgroundImage={["url('/static/svg/bg1Mobile.svg')","url('/static/svg/bg1Mobile.svg')","url('/static/svg/bg1Desktop.svg')"]}
            backgroundSize={"100% 100%"}
             backgroundRepeat={"no-repeat"}
        pb={"5em"}>


        <SimpleGrid pt={["4em", "4em", "10em"]}
                    maxW={["100%", "100%", "1024px"]}
                    columns={[12, 12, 12, 12]}
                   >


            <GridItem display={"flex"}
                      flexDirection="column"
                      zIndex={2}
                      colStart={[2, 2, 2, 2, 1]} colEnd={[12, 12, 7, 7, 7]}

            >


                <Heading variant="header2"
                         pt={["0.8em", "0.5em", "0px", "0px"]}
                         fontSize={["40px", "50px", "50px", "50px", "76px"]}
                         textAlign={["center", "center", "start"]}>
                    Oana Moraru
                </Heading>
                <Heading variant="header3"
                         pt={"0.3em"}
                         fontSize={["20px", "25px", "22px", "28px", "33px"]}
                         textAlign={["center", "center", "start"]}>
                    Agile Consultant • Freelancer
                </Heading>

            </GridItem>

            <GridItem
                colStart={[3, 3, 2, 2, 1]} colEnd={[11, 11, 7, 7, 7]}
                display={["flex", "flex", "none"]}
                position={"relative"}
                alignSelf={"center"}
                boxSizing={"border-box"}
                pt={"1em"}
            >
                <MoranaImageContainer  height={"94%"} width={"94%"} ml={"4px"} mt={"4px"} oanaPic={Oana1} priority={true}/>
            </GridItem>
            <GridItem
                colStart={[1, 1, 8, 8, 8]} colEnd={[1, 1, 12, 12, 13]}
                rowSpan={2}
                display={["none", "none", "flex"]}
                flexDirection={"row"}
                position={["relative", "relative", "relative", "relative"]}
                boxSizing={"border-box"}
                w={["100%"]}
                maxW={"510px"}
                maxH={"510px"}

            >
                <MoranaImageContainer  height={"94%"} width={"94%"} ml={"9px"} mt={"6px"} oanaPic={Oana1} priority={true}/>
            </GridItem>
            <GridItem display={"flex"}
                      flexDirection="column"
                      zIndex={2}
                      colStart={[2, 2, 2, 2, 1]} colEnd={[12, 12, 7, 7, 7]}
            >
                <Text
                    variant={"primary"}
                    fontSize={["14px", "16px", "14px", "18px"]}
                    lineHeight={["17px", "20px", "20px", "24px"]}
                    textAlign={["center", "center", "start"]}
                    order={[1, 1, 0]}
                    pt={["1.4em", "1.2em", "1.2em", "1.2em"]}
                    pb={"1.7em"}
                    alignSelf={["center", "center", "flex-start"]}>
                    IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                </Text>


                <Link
                    fontSize={["24px", "24px", "30px"]}
                    width={["245px", "245px", "339px", "339px", "339px"]}
                    height={["50px", "50px", "67px", "67px", "67px"]}
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
