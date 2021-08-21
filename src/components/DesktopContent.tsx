import React from 'react'
import {Box, Button, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import MoranaImageContainer from "./MoranaImageContainer";


function DesktopBackgroundOne() {
    return <Box minW={"1024px"} zIndex={-1} position={"absolute"} top={0} left={0} width={"100%"} overflow={"hidden"} lineHeight={0}>
        <svg width={"100%"} height="754" preserveAspectRatio="none" viewBox="0 0 1440 754" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 754V0H1440C1440 509.115 764.123 734.654 0 754Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

const DesktopContent = () => {
    const ptArray = ["15px", "27px"];
    return (
        <Box display="flex"
             flexDirection="column"
             w={"100%"}
             alignItems={"center"}>
            <HeadyDesktop/>

            <DesktopBackgroundOne/>

            <SimpleGrid pt={"10em"} columns={[1, 2]}>

                <Box display="flex"
                     flexDirection="column"
                     width={"602px"}>

                    <Heading variant="header2" pt={"25px"} fontSize={"76px"}>
                        Oana Moraru
                    </Heading>
                    <Heading variant="header3" pt={"10px"} fontSize={"40px"}>
                        Agile Consultant • Freelancer
                    </Heading>
                    <Box w={"589px"} pt={"50px"} pb={"35px"}>

                        <Text variant={"primary"}
                              fontSize={"18px"}
                              lineHeight={"24px"}
                        >
                            I am an IT Product Owner, Scrum Master, UX-Designer and Team Lead searching for Frontend Software Development Projects with a positive impact on environment or society.
                        </Text>
                    </Box >
                    <Button variant={"desktop"} >
                        Get in touch!
                    </Button>

                </Box>
                <Box width={"464px"}
                justifySelf={"center"} >
                    <MoranaImageContainer width={464} height={448} imagePath={"/static/images/OanaMain.png"}/>
                </Box>
            </SimpleGrid>

        </Box>


    )
}

export default DesktopContent

