import {Container} from '../components/Container'
import Heady, {headerHeightPx} from "../components/Heady";
import {Box, Heading, Text, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import MoranaButton from "../components/MoranaButton";


export default function Index() {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
    return (

        <Container height="100vh">
            {!isLargerThan1280 ?
                <Container height="100vh">

                    <Box zIndex={0} position={"absolute"}>
                        <svg width="100vw" preserveAspectRatio="none" height="729" viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
                        </svg>
                    </Box>

                    <Heady/>
                    <Box pt={headerHeightPx} zIndex={1} display="flex"
                         flexDirection="column"
                         alignItems="center"
                    >
                        <Heading variant="header2" pt={"35px"}>
                            Oana Moraru
                        </Heading>
                        <Heading variant="header3" pt={"35px"}>
                            Agile Consultant • Freelancer
                        </Heading>

                        <MoranaImageContainer/>

                        <Box w={"310px"}>
                            <Text variant={"primary"}
                                  fontSize={"14px"}
                                  align={"center"}
                                  verticalAlign={"center"}
                                  lineHeight={"17px"}>
                                IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                            </Text>
                        </Box>

                        <MoranaButton>
                            Get in touch!
                        </MoranaButton>


                    </Box>
                </Container>
                :
                <Container w={"100vw"}>
                    <Box zIndex={0} position={"absolute"}>
                        <svg width="100vw" height="754" preserveAspectRatio="none" viewBox="0 0 1440 754" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 754V0H1440C1440 509.115 764.123 734.654 0 754Z" fill="#5F05AB"/>
                        </svg>
                    </Box>
                    <Heady/>
                    <Box display="flex"
                         zIndex={1}
                         justifyContent={"space-around"}
                         flexDirection="row"
                         pt={"180px"}
                         w={"100%"}
                    >

                        <Box>
                            <Heading variant="header2" pt={"35px"} fontSize={"76px"}>
                                Oana Moraru
                            </Heading>
                            <Heading variant="header3" pt={"35px"} fontSize={"40px"}>
                                Agile Consultant • Freelancer
                            </Heading>
                            <Box w={"589px"}>
                                <Text variant={"primary"}
                                      fontSize={"18px"}
                                      alignItems={"center"}
                                      display={"flex"}
                                      verticalAlign={"center"}
                                      lineHeight={"24px"}
                                >
                                    I am an IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                                </Text>
                            </Box>
                            <MoranaButton>
                                Get in touch!
                            </MoranaButton>
                        </Box>
                        <Box>

                            <MoranaImageContainer/>
                        </Box>
                    </Box>

                </Container>
            }

        </Container>
    )

}



