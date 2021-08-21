import React from 'react'
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import HeadyMobile, {headerHeightPx} from "./HeadyMobile";
import MoranaImageContainer from "./MoranaImageContainer";
import MoranaButton from "./MoranaButton";


const MobileContent = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start" height="100vh">

            <Box zIndex={-1} position={"absolute"} top={0} left={0} width={"100%"} overflow={"hidden"} lineHeight={0}>
                <svg width={"100vw"} height="729" preserveAspectRatio="none" viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
                </svg>


            </Box>

            <HeadyMobile/>
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

                <MoranaImageContainer width={248} height={242} imagePath={"/static/images/OanaMain.png"}/>

                <Box w={"310px"}>
                    <Text variant={"primary"}
                          fontSize={"14px"}
                          align={"center"}
                          verticalAlign={"center"}
                          lineHeight={"17px"}>
                        IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                    </Text>
                </Box>

                <Button variant={"mobile"}>
                    Get in touch!
                </Button>


            </Box>
        </Flex>

    )
}

export default MobileContent

