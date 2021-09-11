import React from 'react'
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import IntroSection from "../sections/IntroSection";
import Link from 'next/link'
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

                <Box zIndex={2} justifyContent={"center"} alignItems={"center"}>
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

