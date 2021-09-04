import {Box, Button, GridItem, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import Experience from "../components/Experience";
import React from "react";

export default function ExpierenceSection() {
    const spacing = "15px";
    const servicesFontSize = ["14px", "15px", "16px", spacing];
    return <SimpleGrid
        zIndex={2}
        width={"100%"}
        maxW={["100%", "100%", "1024px"]}
        pt={"2.5em"}
        columns={[12, 12, 12, 12, 12]}
        spacing={10} pb={"35px"}>


        <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={[11, 11, 11, 11, 5]}>


            <Experience
                title={"Experience"}>
                <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={servicesFontSize}>
                    <ListItem>Freelance Product Owner, Scrum Master, UX/UI-Designer at Morana.at</ListItem>
                    <ListItem>Team Lead, Lead Product Owner, Scrum Master at XXXLdigital</ListItem>
                    <ListItem>Business Analyst, Requirements Engineer, UX/Usability Expert and Trainer at BearingPoint</ListItem>
                    <ListItem>Team Lead, Product Owner, Scrum Master, PMO at IBM</ListItem>
                    <ListItem>Software Developer at IBM</ListItem>
                </UnorderedList>
            </Experience>
        </GridItem>

        <GridItem colStart={[2, 2, 2, 2, 5]} colEnd={[11, 11, 6, 11, 9]} display={"flex"} flexDirection={"column"}>
            <Experience
                title={"Capabilities\n"}>

                <Box display={["block", "block", "block", "flex", "block"]} flexDirection={"row"}>


                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={servicesFontSize}>
                        <ListItem>Agile Process Management</ListItem>
                        <ListItem>Product Ownership</ListItem>
                        <ListItem>UX-Design & Usability</ListItem>
                        <ListItem>Requirements Engineering</ListItem>

                    </UnorderedList>

                    <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} pl={["0em", "0em", "0em", "5em", "0em"]} fontSize={servicesFontSize}>

                        <ListItem>Leadership skills</ListItem>
                        <ListItem>Taking responsibility</ListItem>
                        <ListItem>Continuous improvement</ListItem>
                        <ListItem>Recruiting</ListItem>
                    </UnorderedList>

                </Box>
            </Experience>
                <Button variant={"desktop"}
                        fontSize={["24px", "24px", "30px"]}
                        height={["50px", "50px", "67px", "67px", "67px"]}
                        display={["flex", "flex", "none"]}
                        mt={"2.5em"}
                        w={"245px"}
                >
                    Download Resume
                </Button>

        </GridItem>


        <GridItem colStart={[2, 2, 2, 2, 9]} colEnd={[11, 11, 11, 11, 13]}>
            <Experience
                title={"Work & Life"}>
                <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={servicesFontSize}>
                    <ListItem>over 5 years of experience in software development projects, agile process management, user centered product development, usability and team leading</ListItem>
                    <ListItem>confident working in a range of roles from product ownership, to UI/UX Frontend app & website design, requirements engineering, coaching and leading a team with Scrum</ListItem>
                    <ListItem>Outside of work, I&apos;m a singer in the rock band ARDENITE, painter, trainer, sports enthusiast and dog mom</ListItem>
                </UnorderedList>
            </Experience>
        </GridItem>

    </SimpleGrid>


}
