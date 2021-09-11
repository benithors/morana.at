import React from 'react'
import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, GridItem, Heading, SimpleGrid, Text, useDisclosure} from "@chakra-ui/react";
import Image from 'next/image'
import moranaIcon from '../../public/static/svg/moranaIcon.svg'
import * as Scroll from 'react-scroll'
import {Link as ScrollLink} from 'react-scroll'
import Link from "next/link";

export const headerHeightPx = ["54px", "80px"];


const HeadyDesktop = () => {
    const height = ["54px", "54px", "80px"];
    var scroll = Scroll.animateScroll;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    function scrollHome() {
        scroll.scrollToTop();
        onClose();
    }

    const menuSpacing = "2em";
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            minH={height}
            height={height}
            position={"fixed"}
            top={0}
            zIndex={10}
            // bg={["red","blue","gray","purple"]}
            width={"100%"}
            bg={"brand.maintransparent"}
        >
            <SimpleGrid
                width={"100%"}
                columns={24}
                maxW={["100%", "100%", "1024px"]}
            >


                <GridItem
                    colStart={[2, 2, 2, 2, 1]} colEnd={[20, 20, 12, 12, 12]}
                    display={"flex"}
                    flexDirection={"row"}
                    onClick={scrollHome}
                >
                    <Box
                        minH={height}
                        minW={"41px"}
                        pt={"15px"}
                        mr={"8px"}
                        height={["41", "53px", "87px"]}
                        w={["51px", "61px", "101px"]}

                    >
                        <Image
                            src={moranaIcon}
                            alt={"Morana"}
                            quality={100}
                            layout={"responsive"}
                        />
                    </Box>

                    <Heading
                        variant="header1" fontSize={["20px", "20px"]} height={height} pt={["15px", "15px", "28px"]}>

                        Morana.at
                    </Heading>
                </GridItem>

                <GridItem colSpan={[2, 2, 12, 12]}
                          display={["none", "none", "flex"]}
                          flexDirection="row"
                          justifySelf={"end"}
                          pl={"5em"}
                >


                    <Box height={height} pt={"27px"} width={"100px"}>
                        <ScrollLink onClick={onClose} activeClass="active" to="servicesSection" spy={true} smooth={true} offset={50} duration={500}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                            Services
                        </Text>
                        </ScrollLink>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
                        <ScrollLink onClick={onClose} activeClass="active" to="aboutSection" spy={true} smooth={true} offset={50} duration={500}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"}>
                            About
                        </Text>
                        </ScrollLink>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
                        <ScrollLink onClick={onClose} activeClass="active" to="contactSection" spy={true} smooth={true} offset={50} duration={500}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                            Contact
                        </Text>
                        </ScrollLink>
                    </Box>
                </GridItem>
                <GridItem

                    colStart={23} colEnd={23}
                    height={headerHeightPx} justifySelf={"end"} display={["flex", "flex", "none"]}>


                    <Box ref={btnRef} onClick={onOpen} pt={"15px"}>
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="3" rx="1.5" fill="white"/>
                            <rect y="11.25" width="30" height="3" rx="1.5" fill="white"/>
                            <rect y="22.5" width="30" height="3" rx="1.5" fill="white"/>
                        </svg>
                    </Box>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        trapFocus={false}
                    >
                        <DrawerOverlay/>
                        <DrawerContent>


                            <DrawerBody pl={"3em"} background={"brand.main"} display={"flex"} flexDirection={"column"} justifyContent={"center"} color={"white"} fontFamily={"Fugaz One"} >
                                <Box onClick={scrollHome} >
                                    Home
                                </Box>
                                <Box pt={menuSpacing}>


                                    <ScrollLink  onClick={onClose} activeClass="active" to="servicesSection" spy={true} smooth={true} offset={50} duration={500}>
                                        Services
                                    </ScrollLink>
                                </Box>

                                <Box pt={menuSpacing} >
                                    <ScrollLink onClick={onClose} activeClass="active" to="aboutSection" spy={true} smooth={true} offset={50} duration={500}>
                                        About
                                    </ScrollLink>
                                </Box>

                                <Box pt={menuSpacing}>
                                    <ScrollLink onClick={onClose} activeClass="active" to="contactSection" spy={true} smooth={true} offset={50} duration={500}>
                                        Contact
                                    </ScrollLink>
                                </Box>


                                <Box pt={menuSpacing}>

                                    <Link href="/privacy">
                                        <Text variant="footerTextImprint">
                                            Privacy
                                        </Text>
                                    </Link>
                                </Box>

                            </DrawerBody>

                            <DrawerCloseButton color={"white"}/>
                        </DrawerContent>
                    </Drawer>
                </GridItem>

            </SimpleGrid>
        </Box>


    )
}

export default HeadyDesktop

