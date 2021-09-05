import React from 'react'
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import ServicesSection from "../sections/ServicesSection";
import IntroSection from "../sections/IntroSection";
import {AboutSection} from "../sections/AboutSection";
import ExpierenceSection from '../sections/ExperienceSection';
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";

function DesktopBackgroundOne() {
    return <Box zIndex={1} position={"absolute"} top={[0, 0, 0, "inherit"]} left={[0, 0, 0, "inherit"]} alignSelf={"center"} width={["100%", "100%", "100%", "100%"]} overflow={"hidden"} lineHeight={0}
                height={["600px", "600px", "600px"]} display={["none", "none", "flex"]}>
        <svg width={"100%"} height="100%" preserveAspectRatio="none" viewBox="0 0 1440 754" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 754V0H1440C1440 509.115 764.123 734.654 0 754Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}


function MobileBackgroundOne() {
    return <Box zIndex={1} position={"absolute"} top={0} left={0} width={["100%", "100%"]} overflow={"hidden"} lineHeight={0}
                height={["690px", "810px"]} display={["flex", "flex", "none"]}>
        <svg width={"100%"} height="100%" preserveAspectRatio="none" viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
        </svg>

    </Box>
}

function DesktopBackgroundTwo() {
    return <Box zIndex={1} position={"absolute"} top={["2287px", "1450px", "1187px", "1187px", "1087px"]} left={0} width={"100%"} overflow={"hidden"} lineHeight={0} height={["4037", "2437", "2537", "3137", "2510px"]}
                display={["none", "none", "none", "flex"]}>

        <svg width={"100%"} height={"100%"} preserveAspectRatio="none" viewBox="0 0 1440 2137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 963V396.5C93 490 697.18 614.643 1124 407.211C1216 362.5 1375.2 231.12 1441 0V963H0Z" fill="#4CE6C4"/>
            <path d="M0 2137V429.701C172.946 535.551 389.284 584 745.043 584C782.571 584 1289.44 584 1440.55 218V1362.15C1440.55 1530.21 1482.5 1848 950.204 1916.62C802 1935.73 259.189 1904.23 0 2137Z" fill="#5F05AB"/>
        </svg>

    </Box>;
}

function MobileBackgroundTwo() {
    return <Box zIndex={1} position={"absolute"} top={["2587px", "1950px", "1650px"]} left={0} width={"100%"} overflow={"hidden"} lineHeight={0} height={["2400", "2550", "2337"]} display={["flex", "flex", "flex", "none"]}>


        <svg width={"100%"} height={"100%"} preserveAspectRatio="none" viewBox="0 0 375 2433" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 842.779V134.561C108 199.935 230.34 166.292 301.5 104.598C348 64.2844 375 0 375 0V842.779H0Z" fill="#4CE6C4"/>
            <path d="M0 2433V149.007C49 191.983 165 193.327 197 186.985C229 180.644 341.5 162 375 67.5537V2204.71C375 2346.38 228.5 2357.33 189.5 2367.63C150.5 2377.93 62.5 2374.16 0 2433Z" fill="#5F05AB"/>
        </svg>

    </Box>;
}


function DesktopBackgroudThree() {
    return <Box zIndex={1} position={"absolute"} bottom={0} left={"30%"} width={"70%"} overflow={"hidden"} lineHeight={0} height={["524", "524", "355", "400"]} display={["none", "none", "none","none","flex"]}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1094 524" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1095 524H0C306.336 162.767 751.64 -33.719 1095 4.76702V524Z" fill="#4CE6C4"/>
            <path d="M1095 524H33C270.88 267.145 795.272 61.6621 1095 135.05V524Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

function MobileBackgroudThree() {
    return <Box zIndex={1} position={"absolute"} bottom={0} left={0} width={"100%"} overflow={"hidden"} lineHeight={0}
                height={"622px"} display={["flex", "flex", "flex","flex","none"]}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 375 622" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M-0.000244141 622H375L375.001 0C369.337 1.35608 362.092 2.83529 353.522 4.5849C279.236 19.7511 105.431 55.2347 -0.000244141 206.948V622Z" fill="#4CE6C4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 622L375 622L375 43.9941C254.391 54.5588 89.4512 114.725 0 229.005V622Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

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



                <Box zIndex={2}>
                    <Button variant={"desktop"}
                            fontSize={["24px", "24px", "30px"]}
                            width={["245px", "245px", "339px", "339px", "339px"]}
                            height={["50px", "50px", "67px", "67px", "67px"]}
                            display={["none", "none", "flex"]}
                    >
                        Download Resume
                    </Button>

                </Box>

                <ContactSection/>


                <FooterSection/>




            </SimpleGrid>

        </Box>
    )
}

export default DesktopContent

