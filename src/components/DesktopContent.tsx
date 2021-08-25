import React from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react";
import HeadyDesktop from "./HeadyDesktop";
import ServicesSection from "../sections/ServicesSection";
import IntroSection from "../sections/IntroSection";

function DesktopBackgroundOne() {
    return <Box zIndex={1} position={"absolute"} top={[0, 0, 0, "inherit"]} left={[0, 0, 0, "inherit"]} alignSelf={"center"} width={["100%", "100%", "100%", "100%"]} overflow={"hidden"} lineHeight={0}
                height={["600px", "600px", "600px"]} display={["none", "none", "flex"]}>
        <svg width={"100%"} height="100%" preserveAspectRatio="none" viewBox="0 0 1440 754" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 754V0H1440C1440 509.115 764.123 734.654 0 754Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}


function MobilBackgroundOne() {
    return <Box zIndex={1} position={"absolute"} top={0} left={0} width={["100%", "100%"]} overflow={"hidden"} lineHeight={0}
                height={["750", "800px"]} display={["flex", "flex", "none"]}>
        <svg width={"100%"} height="100%" preserveAspectRatio="none" viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
        </svg>

    </Box>
}

function DesktopBackgroundTwo() {
    return <Box zIndex={1} position={"absolute"} top={["2287px", "1450px", "1187px"]} left={0} width={"100%"} overflow={"hidden"} lineHeight={0} height={["4037", "2437", "2137"]}>

        <svg width={"100%"} height={"100%"} preserveAspectRatio="none" viewBox="0 0 1440 2137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 963V396.5C93 490 697.18 614.643 1124 407.211C1216 362.5 1375.2 231.12 1441 0V963H0Z" fill="#4CE6C4"/>
            <path d="M0 2137V429.701C172.946 535.551 389.284 584 745.043 584C782.571 584 1289.44 584 1440.55 218V1362.15C1440.55 1530.21 1482.5 1848 950.204 1916.62C802 1935.73 259.189 1904.23 0 2137Z" fill="#5F05AB"/>
        </svg>

    </Box>;
}

function DesktopBackgroudThree() {
    return <Box zIndex={-1} position={"absolute"} top={["6787px", "4747px", "4047px"]} left={"25%"} width={"75%"} overflow={"hidden"} lineHeight={0} height={["524", "524", "524"]}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1094 524" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1095 524H0C306.336 162.767 751.64 -33.719 1095 4.76702V524Z" fill="#4CE6C4"/>
            <path d="M1095 524H33C270.88 267.145 795.272 61.6621 1095 135.05V524Z" fill="#5F05AB"/>
        </svg>
    </Box>;
}

const DesktopContent = () => {
    return (
        <Box display={"flex"} justifyContent={"center"}>
            <SimpleGrid display="flex"
                        flexDirection="column"
                        w={"100vw"}
                        alignItems={"center"}
                        overflowX={"hidden"}
                        h={"8000px"}
                        bg={"white"}
            >
                <HeadyDesktop/>

                <DesktopBackgroundOne/>
                <MobilBackgroundOne/>

                <IntroSection/>

                <ServicesSection/>

                <DesktopBackgroundTwo/>
                {/*<AboutSection/>*/}

                {/*<Button variant={"desktop"}>*/}
                {/*    Download Resume*/}
                {/*</Button>*/}

                {/*<ContactSection/>*/}


                {/*<FooterSection/>*/}


                {/*<DesktopBackgroudThree/>*/}


            </SimpleGrid>

        </Box>
    )
}

export default DesktopContent

