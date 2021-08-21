import React from 'react'
import {Box, Button, Heading, ListItem, SimpleGrid, Text, UnorderedList} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import MoranaImageContainer from "./MoranaImageContainer";
import MoranaService from "./Service";
import Experience from "./Experience";

function DesktopBackgroundOne() {
    return <Box minW={"1024px"} zIndex={-1} position={"absolute"} top={0} left={0} width={"100%"} overflow={"hidden"} lineHeight={0}
    height={["1100","754"]}>
        <svg width={"100%"} height="100%" preserveAspectRatio="none" viewBox="0 0 1440 754" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 754V0H1440C1440 509.115 764.123 734.654 0 754Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

function DesktopBackgroundTwo() {
    return <Box minW={"1024px"} zIndex={-1} position={"absolute"} top={["2287px", "1450px", "1187px"]} left={0} width={"100%"} overflow={"hidden"} lineHeight={0} height={["4037", "2437", "2137"]}>

        <svg width={"100%"} height={"100%"} preserveAspectRatio="none" viewBox="0 0 1440 2137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 963V396.5C93 490 697.18 614.643 1124 407.211C1216 362.5 1375.2 231.12 1441 0V963H0Z" fill="#4CE6C4"/>
            <path d="M0 2137V429.701C172.946 535.551 389.284 584 745.043 584C782.571 584 1289.44 584 1440.55 218V1362.15C1440.55 1530.21 1482.5 1848 950.204 1916.62C802 1935.73 259.189 1904.23 0 2137Z" fill="#5F05AB"/>
        </svg>

    </Box>;
}

function DesktopBackgroudThree() {
    return <Box minW={"1024px"} zIndex={-1} position={"absolute"} top={["6787px", "4747px", "4047px"]} left={0} width={"100%"} overflow={"hidden"} lineHeight={0} height={["524", "524", "524"]}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1094 524" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1095 524H0C306.336 162.767 751.64 -33.719 1095 4.76702V524Z" fill="#4CE6C4"/>
            <path d="M1095 524H33C270.88 267.145 795.272 61.6621 1095 135.05V524Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

const DesktopContent = () => {
    return (
        <SimpleGrid display="flex"
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
                    <MoranaImageContainer width={464} height={448} imagePath={"/static/images/Oana1.png"}/>
                </Box>
            </SimpleGrid>

            <SimpleGrid pt={"9em"} columns={[1, 2]}>
                <Box display={"flex"} width={"602px"} pt={"25px"}>
                    <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                        /
                    </Heading>

                    <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"}>
                        {' '} Services
                    </Heading>
                </Box>
            </SimpleGrid>

            <SimpleGrid pt={"5em"} columns={[1, 2, 3]} spacing={10}>
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
                               title={"UX/UI Design"}>
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

            <DesktopBackgroundTwo/>

            <SimpleGrid pt={["9em"]} columns={[1, 2]}>
                <Box display={"flex"} width={"602px"} pt={"110px"}>
                    <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                        /
                    </Heading>

                    <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"} color={"white"}>
                        {' '} About
                    </Heading>
                </Box>
            </SimpleGrid>


            <SimpleGrid pt={["2em", "5em"]} columns={[1, 2]}>
                <Box width={"464px"}
                     pt={["3em", "0em"]}
                     justifySelf={"center"}>
                    <MoranaImageContainer width={464} height={448} imagePath={"/static/images/Oana2.png"}/>
                </Box>
                <Box display="flex"
                     flexDirection="column"
                     width={"602px"}>

                    <Heading variant="header2" pt={"25px"} fontSize={"76px"}>
                        My heart beats agile
                    </Heading>

                    <Box w={"589px"} pt={"50px"} pb={"35px"}>

                        <Text variant={"primary"}
                              fontSize={"18px"}
                              lineHeight={"24px"}
                        >
                            Hi, I am Oana! - very open and determined, a go-getter, who achieves the goals she sets her mind to. Always giving 110%, I am reliable and autonomous, more than happy to take on the responsibility of my team and/or product.
                        </Text>
                        <Text variant={"primary"}
                              fontSize={"18px"}
                              lineHeight={"24px"}
                              pt={"30px"}
                        >

                            I bring structure, transparence and drive into your projects & teams, helping you reach your business goals in a timely and highly qualitative manner.
                        </Text>
                    </Box>


                </Box>

            </SimpleGrid>


            <SimpleGrid pt={"5em"} columns={[1, 2, 3]} spacing={10} pb={"35px"}>
                <Experience
                    title={"Work & Life"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"} color={"white"} spacing={"20px"}>
                        <ListItem>over 5 years of experience in software development projects, agile process management, user centered product development, usability and team leading</ListItem>
                        <ListItem>confident working in a range of roles from product ownership, to UI/UX Frontend app & website design, requirements engineering, coaching and leading a team with Scrum</ListItem>
                        <ListItem>Outside of work, I&apos;m a singer in the rock band ARDENITE, painter, trainer, sports enthusiast and dog mom</ListItem>
                    </UnorderedList>
                </Experience>


                <Experience
                    title={"Experience"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"} color={"white"} spacing={"20px"}>
                        <ListItem>Freelance Product Owner, Scrum Master, UX/UI-Designer at Morana.at</ListItem>
                        <ListItem>Team Lead, Lead Product Owner, Scrum Master at XXXLdigital</ListItem>
                        <ListItem>Business Analyst, Requirements Engineer, UX/Usability Expert and Trainer at BearingPoint</ListItem>
                        <ListItem>Team Lead, Product Owner, Scrum Master, PMO at IBM</ListItem>
                        <ListItem>Software Developer at IBM</ListItem>
                    </UnorderedList>
                </Experience>

                <Experience
                    title={"Capabilities\n"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} fontSize={"20px"} color={"white"} spacing={"20px"}>
                        <ListItem>Agile Process Management</ListItem>
                        <ListItem>Product Ownership</ListItem>
                        <ListItem>UX-Design & Usability</ListItem>
                        <ListItem>Requirements Engineering</ListItem>
                        <ListItem>Leadership skills</ListItem>
                        <ListItem>esponsibility Continuous improvement</ListItem>
                        <ListItem>Recruiting</ListItem>
                    </UnorderedList>
                </Experience>

            </SimpleGrid>

            <Button variant={"desktop"}>
                Download Resume
            </Button>

            <SimpleGrid pt={["9em", "15em"]} columns={[1, 2]}>
                <Box display={"flex"} width={"602px"} pt={"25px"}>
                    <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                        /
                    </Heading>

                    <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"}>
                        {' '} Contact
                    </Heading>
                </Box>
            </SimpleGrid>


            <SimpleGrid pt={["9em"]} columns={[1]}>
                <Box display={"flex"}
                     flexDirection="row"
                     pt={"25px"}
                     width={["600px", "1203px"]}
                >
                    <Heading variant="header2" fontSize={["35px", "76px"]} color={"black"} display={"inline"} whiteSpace={"break-spaces"}>
                        <Text as={"span"}>
                            Does this{' '}
                        </Text>
                        <Text as={"span"} color={"brand.secondary"}>
                            sound good{' '}
                        </Text>
                        <Text as={"span"}>
                            to you?
                        </Text>
                    </Heading>
                </Box>

                <Box width={["500px", "1203px"]}>

                    <Heading variant="header2" fontSize={["35px", "76px"]} color={"black"} display={"inline"} whiteSpace={"break-spaces"}>
                        <Text as={"span"}>
                            Lets make things {' '}
                        </Text>
                        <Text as={"span"} color={"brand.secondary"}>
                            happen.
                        </Text>

                    </Heading>

                </Box>
            </SimpleGrid>


            <SimpleGrid pt={"1em"} columns={[1, 2]}>
                <Box width={"602px"} pt={"25px"}>
                    <Button variant={"desktop"}>
                        Get in touch!
                    </Button>
                </Box>
            </SimpleGrid>

            <Box width={"464px"}
                 pt={["3em", "0em"]}
                 justifySelf={"center"}>
                <MoranaImageContainer width={464} height={448} imagePath={"/static/images/oana3.png"}/>
            </Box>

            <DesktopBackgroudThree/>


        </SimpleGrid>


    )
}

export default DesktopContent

