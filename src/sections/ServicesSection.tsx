import {Box, Heading, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import MoranaService from "../components/Service";
import React from "react";

export default function ServicesSection() {
    return <>
        <SimpleGrid pt={"9em"} columns={[1, 2]}>
            <Box display={"flex"} width={"602px"} pt={"25px"}>
                <Heading variant="services" textAlign={"start"} color={"brand.secondary"}>
                    /
                </Heading>

                <Heading variant="services" textAlign={"start"} whiteSpace={"break-spaces"}>
                    {" "} Services
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


    </>;
}
