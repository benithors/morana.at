import {Grid, GridItem, Heading, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import MoranaService from "../components/Service";
import React from "react";
import {BasicTextSizes, SectionFontSizes} from "../components/ResponsiveSizes";

export default function ServicesSection() {
    const servicesFontSize = ["14px", "15px", "16px", "20px"];
    const servicesListHeadingPadding = "0.7em";
    return (
        <SimpleGrid
            maxW={["100%", "100%", "1440px"]}
            columns={12}
            pb={["0em", "0em", "0em", "0em", "3em"]}
            w={"100%"}
        >
            <GridItem
                colStart={[2, 2, 2, 2, 2]} colEnd={13}
                width={"100%"}
                maxW={["100%", "100%", "1440px"]}
                zIndex={2}
                columns={12}

            >
                <GridItem

                    id={"services"}
                    pt={["70px", "70px", "100px", "100px", "70px"]}
                    colStart={[2, 2, 2, 2, 2]} colEnd={13}
                    display={"flex"} flexDirection={"row"}>
                    <Heading fontSize={SectionFontSizes}
                             variant="services"
                             textAlign={"center"}
                             color={"brand.secondary"}>
                        /
                    </Heading>

                    <Heading fontSize={SectionFontSizes}
                             variant="services" textAlign={"center"} whiteSpace={"break-spaces"}>
                        {" "} Services
                    </Heading>
                </GridItem>
            </GridItem>

<GridItem   colStart={[2, 2, 2, 2, 2]} colEnd={12}>


            <SimpleGrid


                pt={["2em", "2em", "3em"]} columns={[1, 1, 2, 2, 3]} spacing={10}>
                <MoranaService imagePath={"/static/svg/PO-Icon-Group.svg"}
                               height={102}
                               width={112}
                               title={"Product Ownership"}>
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
                    <UnorderedList fontFamily={"ABeeZee"} pt={servicesListHeadingPadding} fontSize={BasicTextSizes}>
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
