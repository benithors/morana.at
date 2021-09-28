import React from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import IntroSection from "../sections/IntroSection";
import dynamic from "next/dynamic";

const FooterSection = dynamic(() => import('../sections/FooterSection'));
const ContactSection = dynamic(() => import('../sections/ContactSection'));
const AboutSection = dynamic(() => import('../sections/AboutSection'));
const ServicesSection = dynamic(() => import('../sections/ServicesSection'));

const DesktopContent = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} w={"100vw"} id={"home"}>
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


                <ContactSection/>


                <FooterSection/>


            </SimpleGrid>

        </Box>
    )
}

export default DesktopContent

