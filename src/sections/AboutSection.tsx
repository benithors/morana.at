import {Box, Heading, ListItem, SimpleGrid, Text, UnorderedList} from "@chakra-ui/react";
import MoranaImageContainer from "../components/MoranaImageContainer";
import Experience from "../components/Experience";
import React from "react";

export function AboutSection() {
    return <>
        <SimpleGrid pt={["9em"]} columns={[1, 2]}>
            <Box display={"flex"} width={"602px"} pt={"110px"}>
                <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                    /
                </Heading>

                <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"} color={"white"}>
                    {" "} About
                </Heading>
            </Box>
        </SimpleGrid>


        <SimpleGrid pt={["2em", "5em"]} columns={[1, 2]}>
            <Box width={"464px"}
                 pt={["3em", "0em"]}
                 justifySelf={"center"}>
                <MoranaImageContainer imagePath={"/static/images/Oana2.png"}/>
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
    </>;
}
