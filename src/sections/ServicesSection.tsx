import {Box, Heading, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import MoranaService from "../components/Service";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export default function ServicesSection() {
    const servicesFontSize = ["14px","15px","16px","20px"];
    const servicesListHeadingPadding = "17px";
    return (
        <SimpleGrid
            width={["80%", "80%", "85%", "85%"]}
            maxW={["100%", "100%", "1024px"]}
            id={"servicesSection"}
        >
            <Box display={"flex"} flexDirection={"row"} pt={["10em","11em","11em","8em","1em"]} colSpan={[1, 1, 7, 7]}>
                <Heading fontSize={SectionHeaderSizes}
                        variant="services"
                         textAlign={"center"}
                         color={"brand.secondary"}>
                    /
                </Heading>

                <Heading fontSize={SectionHeaderSizes}
                         lineHeight={"23px"}
                    variant="services" textAlign={"center"} whiteSpace={"break-spaces"}>
                    {" "} Services
                </Heading>
            </Box>

            <SimpleGrid pt={"5em"} columns={[1, 2, 2,2,3]} spacing={10}>
                <MoranaService imagePath={"/static/images/PO-Icon-Group.png"}
                               height={102}
                               width={112}
                               title={"Product Ownership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>Backlog management & refinement</ListItem>
                        <ListItem>Prioritization of requirements User</ListItem>
                        <ListItem>User stories & acceptance criteria</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/SM-Icon-Group.png"}
                               height={104}
                               width={110}
                               title={"Scrum Master"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>SCRUM process setup & initiation</ListItem>
                        <ListItem>ceremony moderation</ListItem>
                        <ListItem>conflict resolution</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/UX-Icon-Group.png"}
                               height={100}
                               width={108}
                               title={"UX/UI Design"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>Low & High fidelity Prototypes</ListItem>
                        <ListItem>Mockups, Click Dummies</ListItem>
                        <ListItem>Usability Analysis</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/TL-Icon-Group.png"}
                               height={106}
                               width={111}
                               title={"Team Leadership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>Recruiting team members</ListItem>
                        <ListItem>Leadership skills</ListItem>
                        <ListItem>Teambuilding</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/BA-Icon-Group.png"}
                               height={102}
                               width={112}
                               title={"Business Analysis"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>Stakeholder management</ListItem>
                        <ListItem>Requirements analysis</ListItem>
                        <ListItem>Workshop moderation</ListItem>
                    </UnorderedList>
                </MoranaService>

                <MoranaService imagePath={"/static/images/RE-Icon-Group.png"}
                               height={106}
                               width={111}
                               title={"Requirements Engineering"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                        <ListItem>Requirements elicitation</ListItem>
                        <ListItem>Requirements analysis</ListItem>
                        <ListItem>Requirements documentation</ListItem>
                        <ListItem>Requirements alignment</ListItem>
                    </UnorderedList>
                </MoranaService>


            </SimpleGrid>
        </SimpleGrid>

    )
};
