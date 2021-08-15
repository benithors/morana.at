import {Container} from '../components/Container'
import Heady, {headerHeightPx} from "../components/Heady";
import {Box, Button, Heading, Text, useBreakpointValue, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import MoranaButton from "../components/MoranaButton";



export default function Index(props) {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    return (

        <Container height="100vh">
            {  !isLargerThan1280 ?
                <Container height="100vh">

                    <Box width={"100%"} zIndex={0} position={"absolute"}>
                        <svg viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
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
                            <Text fontWeight={400} size={"14px"} fontFamily={"ABeeZee"} fontSize={"14px"} align={"center"} verticalAlign={"center"} color={"white"} lineHeight={"17px"}>
                                IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                            </Text>
                        </Box>

                        <MoranaButton>
                            Get in touch!
                        </MoranaButton>


                    </Box>
                </Container>
                :
                <Container height="100vh">
                   TODO responsive design
                </Container>
            }

        </Container>
    )

}



