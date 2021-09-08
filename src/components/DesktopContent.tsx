import React from 'react'
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import ServicesSection from "../sections/ServicesSection";
import IntroSection from "../sections/IntroSection";
import {AboutSection} from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import Link from 'next/link'

const DesktopContent = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} w={"100vw"}   id={"home"}>
            <SimpleGrid display="flex"
                        flexDirection="column"
                        w={"100%"}
                        alignItems={"center"}
                        overflowX={"hidden"}
                        bg={"white"}

            >
                <HeadyDesktop/>


                <IntroSection/>

                <ServicesSection/>


                <AboutSection/>



                <Box zIndex={2} justifyContent={"center"}  alignItems={"center"}>
                    <Link href="CV_Moraru.pdf">
                    <Button variant={"desktop"}
                            fontSize={["24px", "24px", "30px"]}
                            width={["245px", "245px", "339px", "339px", "339px"]}
                            height={["50px", "50px", "67px", "67px", "67px"]}
                            display={["none", "none", "flex"]}
                    >
                        Download Resume
                    </Button>
                    </Link>

                </Box>

                <ContactSection/>


                <FooterSection/>




            </SimpleGrid>

        </Box>
    )
}

export default DesktopContent

