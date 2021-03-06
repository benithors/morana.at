import {Box, Button, GridItem, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import Experience from "../components/Experience";
import React from "react";
import Link from 'next/link'
import {BasicTextSizes, Button2FontSizes} from "../components/ResponsiveSizes";


export const servicesFontSize = ["14px", "15px", "16px", "16px"];
export default function ExpierenceSection() {
    const spacing = "15px";
    return <SimpleGrid
        zIndex={2}
        width={"100%"}
        maxW={["100%", "100%", "1440px"]}
        pt={["1em", "1em", "2em" ,"3em", "1em"]}
        columns={12}
        pb={"4em"}>


        <GridItem colStart={[2, 2, 2, 2, 2]} colEnd={12}>


            <SimpleGrid
                zIndex={2}
                pt={["2em", "2em", "3em"]} columns={[12, 12, 12, 12, 24]}>

                <GridItem colStart={[1, 1, 1, 1, 1]} colEnd={[13, 13, 13, 13, 9]}>
                    <Experience
                        title={"Experience"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={BasicTextSizes} >
                            <ListItem>Freelance Product Owner, Scrum Master, UX/UI-Designer at Morana.at</ListItem>
                            <ListItem>Team Lead, Lead Product Owner, Scrum Master at XXXLdigital</ListItem>
                            <ListItem>Business Analyst, Requirements Engineer, UX/Usability Expert and Trainer at BearingPoint</ListItem>
                            <ListItem>Team Lead, Product Owner, Scrum Master, PMO at IBM</ListItem>
                            <ListItem>Software Developer at IBM</ListItem>
                        </UnorderedList>
                    </Experience>
                </GridItem>

                <GridItem colStart={[1, 1, 1, 1, 10]} colEnd={[12, 12, 11, 11, 16]} pt={["2em", "2em", "4em", "4em", "0em"]}>
                    <Experience
                        title={"Capabilities\n"}>
                        <Box display={["block", "block", "flex", "flex", "block"]} flexDirection={"row"}>
                            <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={BasicTextSizes}>
                                <ListItem>Agile Process Management</ListItem>
                                <ListItem>Product Ownership</ListItem>
                                <ListItem>UX-Design & Usability</ListItem>
                                <ListItem>Requirements Engineering</ListItem>
                            </UnorderedList>

                            <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} pl={["0em", "0em", "5em", "5em", "0em"]} fontSize={BasicTextSizes}>

                                <ListItem>Leadership skills</ListItem>
                                <ListItem>Taking responsibility</ListItem>
                                <ListItem>Continuous improvement</ListItem>
                                <ListItem>Recruiting</ListItem>
                            </UnorderedList>

                        </Box>
                    </Experience>
                </GridItem>

                <GridItem pt={["4em", "4em", "0em"]}
                          colStart={[1, 1, 1, 1, 0]} colEnd={[13, 13, 6, 11, 0]} display={["auto", "auto", "none"]}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <Link href="CV_Moraru.pdf">
                            <Button variant={"desktop"}
                                    fontSize={Button2FontSizes}
                                    width={["245px", "339px", "339px", "339px", "339px"]}
                                    height={["50px", "67px", "67px", "67px", "67px"]}
                                    w={"245px"}
                            >
                                Download Resume
                            </Button>
                        </Link>
                    </Box>
                </GridItem>

                <GridItem colStart={[1, 1, 1, 1, 17]} colEnd={[13, 13, 13, 13, 25]} pt={["4em", "4em", "4em", "4em", "0em"]}>
                    <Experience
                        title={"Work & Life"}>
                        <UnorderedList fontFamily={"ABeeZee"} pt={"17px"} color={"white"} spacing={spacing} fontSize={BasicTextSizes}>
                            <ListItem>over 5 years of experience in software development projects, agile process management, user centered product development, usability and team leading</ListItem>
                            <ListItem>confident working in a range of roles from product ownership, to UI/UX Frontend app & website design, requirements engineering, coaching and leading a team with Scrum</ListItem>
                            <ListItem>Outside of work, I&apos;m a singer in the rock band ARDENITE, painter, trainer, sports enthusiast and dog mom</ListItem>
                        </UnorderedList>
                    </Experience>
                </GridItem>
            </SimpleGrid>
        </GridItem>
    </SimpleGrid>


}
