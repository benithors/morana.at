import {Button, GridItem, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import Experience from "../components/Experience";
import React from "react";

export default function ExpierenceSection() {
    const servicesFontSize = ["14px", "15px", "16px", "20px"];
    return <SimpleGrid
        zIndex={2}
        width={"100%"}
        maxW={["100%", "100%", "1024px"]}
        pt={"5em"}
        columns={[12, 12, 12, 12, 12]}
        spacing={10} pb={"35px"}>


        <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 5, 5]}>


            <Experience
                title={"Experience"}>
                <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={"20px"} fontSize={servicesFontSize}>
                    <ListItem>Freelance Product Owner, Scrum Master, UX/UI-Designer at Morana.at</ListItem>
                    <ListItem>Team Lead, Lead Product Owner, Scrum Master at XXXLdigital</ListItem>
                    <ListItem>Business Analyst, Requirements Engineer, UX/Usability Expert and Trainer at BearingPoint</ListItem>
                    <ListItem>Team Lead, Product Owner, Scrum Master, PMO at IBM</ListItem>
                    <ListItem>Software Developer at IBM</ListItem>
                </UnorderedList>
            </Experience>
        </GridItem>

        <GridItem colStart={[2, 2, 2, 5, 5]} colEnd={[11, 11, 6, 8, 9]}>
            <Experience
                title={"Capabilities\n"}>
                <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={"20px"} fontSize={servicesFontSize}>
                    <ListItem>Agile Process Management</ListItem>
                    <ListItem>Product Ownership</ListItem>
                    <ListItem>UX-Design & Usability</ListItem>
                    <ListItem>Requirements Engineering</ListItem>
                    <ListItem>Leadership skills</ListItem>
                    <ListItem>Taking responsibility</ListItem>
                    <ListItem>Continuous improvement</ListItem>
                    <ListItem>Recruiting</ListItem>
                </UnorderedList>
            </Experience>
            <Button variant={"desktop"}
                    fontSize={["24px", "24px", "30px"]}
                    height={["50px", "50px", "67px", "67px", "67px"]}
                    justifySelf={"center"}
                    display={["flex", "flex", "none"]}
                    mt={"0.5em"}
            >
                Download Resume
            </Button>

        </GridItem>


        <GridItem colStart={[2, 2, 2, 8, 9]} colEnd={[11, 11, 11, 12, 13]}>
            <Experience
                title={"Work & Life"}>
                <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={"20px"} fontSize={servicesFontSize}>
                    <ListItem>over 5 years of experience in software development projects, agile process management, user centered product development, usability and team leading</ListItem>
                    <ListItem>confident working in a range of roles from product ownership, to UI/UX Frontend app & website design, requirements engineering, coaching and leading a team with Scrum</ListItem>
                    <ListItem>Outside of work, I&apos;m a singer in the rock band ARDENITE, painter, trainer, sports enthusiast and dog mom</ListItem>
                </UnorderedList>
            </Experience>
        </GridItem>

    </SimpleGrid>


}
