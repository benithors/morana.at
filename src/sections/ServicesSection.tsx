import {GridItem, Heading, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import MoranaService from "../components/Service";
import React from "react";
import {SectionHeaderSizes} from "../components/ResponsiveSizes";

export default function ServicesSection() {
    const servicesFontSize = ["14px", "15px", "16px", "20px"];
    const servicesListHeadingPadding = "0.7em";
    return (
        <SimpleGrid
            maxW={["100%", "100%", "1024px"]}
            columns={12}
            id={"servicesSection"}
        >
            <GridItem
                colStart={[2, 2, 2, 2, 1]} colEnd={13}
                display={"flex"} flexDirection={"row"} pt={["4em", "5em", "5em", "8em", "1em"]}>
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
            </GridItem>
            <GridItem colStart={[2, 2, 2, 2, 1]} colEnd={12}>


                <SimpleGrid

                    pt={"2em"} columns={[1, 1, 2, 2, 3]} spacing={10}>
                    <MoranaService imagePath={"/static/svg/PO-Icon-Group.svg"}
                                   height={102}
                                   width={112}
                                   title={"Product Ownership"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                            <ListItem>Backlog setup, management & refinement </ListItem>
                            <ListItem>Prioritization of requirements</ListItem>
                            <ListItem>User stories & acceptance criteria acquisition</ListItem>
                            <ListItem>Value maximization of the product</ListItem>
                        </UnorderedList>
                    </MoranaService>

                    <MoranaService imagePath={"/static/svg/SM-Icon-Group.svg"}
                                   height={104}
                                   width={110}
                                   title={"Scrum Master"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                            <ListItem>SCRUM process setup & initiation</ListItem>
                            <ListItem>Ceremonies preparation & moderation</ListItem>
                            <ListItem>Conflict identification, analysis & resolution</ListItem>
                            <ListItem>Process illustration & optimization</ListItem>
                        </UnorderedList>
                    </MoranaService>

                    <MoranaService imagePath={"/static/svg/UX-Icon-Group.svg"}
                                   height={100}
                                   width={108}
                                   title={"UX/UI Design"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                            <ListItem>Low & high fidelity prototypes</ListItem>
                            <ListItem>Mockups, click dummies</ListItem>
                            <ListItem>Usability analysis & improvement suggestions</ListItem>
                            <ListItem>UX/UI design from scratch</ListItem>
                        </UnorderedList>
                    </MoranaService>

                    <MoranaService imagePath={"/static/svg/TL-Icon-Group.svg"}
                                   height={106}
                                   width={111}
                                   title={"Team Leadership"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                            <ListItem>Establish team goals, structure & values</ListItem>
                            <ListItem>Recruiting of team members</ListItem>
                            <ListItem>Leadership skills</ListItem>
                            <ListItem>Assuming responsibility</ListItem>
                            <ListItem>Teambuilding activities</ListItem>
                        </UnorderedList>
                    </MoranaService>

                    <MoranaService imagePath={"/static/svg/BA-Icon-Group.svg"}
                                   height={102}
                                   width={112}
                                   title={"Business Analysis"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={servicesFontSize}>
                            <ListItem>Stakeholder management</ListItem>
                            <ListItem>IS-state analysis</ListItem>
                            <ListItem>SHOULD BE-state analysis</ListItem>
                            <ListItem>Workshop organization, preparation & moderation</ListItem>
                        </UnorderedList>
                    </MoranaService>

                    <MoranaService imagePath={"/static/svg/RE-Icon-Group.svg"}
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
            </GridItem>
        </SimpleGrid>

    )
};
