import React from 'react'
import {Box, Button, Heading, ListItem, SimpleGrid, Text, UnorderedList} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import MoranaImageContainer from "./MoranaImageContainer";
import MoranaService from "./Service";

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

            <SimpleGrid pt={["5em", "10em"]} columns={[1, 2]}>

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
                    </Box>
                    <Button variant={"desktop"}>
                        Get in touch!
                    </Button>

                </Box>
                <Box width={"464px"}
                     pt={["3em", "0em"]}
                     justifySelf={"center"}>
                    <MoranaImageContainer width={464} height={448} imagePath={"/static/images/OanaMain.png"}/>
                </Box>
            </SimpleGrid>

            <SimpleGrid pt={"10em"} columns={[1, 2, 3]} spacing={10}>
                <MoranaService imagePath={"/static/images/PO-Icon-Group.png"}
                               height={102}
                               width={112}
                               title={"Product Ownership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>Backlog management & refinement</ListItem>
                        <ListItem>Prioritization of requirements User</ListItem>
                        <ListItem>User stories & acceptance criteria</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/SM-Icon-Group.png"}
                               height={104}
                               width={110}
                               title={"Scrum Master"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>SCRUM process setup & initiation</ListItem>
                        <ListItem>ceremony moderation</ListItem>
                        <ListItem>conflict resolution</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/UX-Icon-Group.png"}
                               height={100}
                               width={108}
                               title={"Product Ownership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>Low & High fidelity Prototypes</ListItem>
                        <ListItem>Mockups, Click Dummies</ListItem>
                        <ListItem>Usability Analysis</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/TL-Icon-Group.png"}
                               height={106}
                               width={111}
                               title={"Team Leadership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>Recruiting team members</ListItem>
                        <ListItem>Leadership skills</ListItem>
                        <ListItem>Teambuilding</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/RE-Icon-Group.png"}
                               height={106}
                               width={111}
                               title={"Requirements Engineering"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>Requirements elicitation</ListItem>
                        <ListItem>Requirements analysis</ListItem>
                        <ListItem>Requirements documentation</ListItem>
                        <ListItem>Requirements alignment</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/BA-Icon-Group.png"}
                               height={102}
                               width={112}
                               title={"Business Analysis"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"}>
                        <ListItem>Stakeholder management</ListItem>
                        <ListItem>Requirements analysis</ListItem>
                        <ListItem>Workshop moderation</ListItem>
                    </UnorderedList>
                </MoranaService>
            </SimpleGrid>


        </Box>


    )
}

export default DesktopContent

