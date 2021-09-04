import React from 'react'
import {Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, GridItem, Heading, SimpleGrid, Text, useDisclosure} from "@chakra-ui/react";
import Image from 'next/image'
import moranaIcon from '../../public/static/svg/moranaIcon.svg'
import {Link as ScrollLink} from 'react-scroll'
import * as Scroll from 'react-scroll';
export const headerHeightPx = ["54px", "80px"];
import Link from "next/link";


const HeadyDesktop = () => {
    const height = ["54px", "54px", "80px"];
    var scroll    = Scroll.animateScroll;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    function scrollHome(){
        scroll.scrollToTop();
        onClose();
    }
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
                    colStart={[2, 2, 2, 2, 1]} colEnd={[20, 20, 12, 12 ,12]}
                    display={"flex"}
                    flexDirection={"row"}

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
                        variant="header1" fontSize={["22px", "22px"]} height={height} pt={["15px", "15px", "28px"]}>

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
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                            Services
                        </Text>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"}>
                            About
                        </Text>
                    </Box>
                    <Box height={height} pt={"27px"} width={"100px"}>
                        <Text variant={"primary"} fontSize={"20px"} lineHeight={"25px"} align={"center"} verticalAlign={"center"} color={"white"}>
                            Contact
                        </Text>
                    </Box>
                </GridItem>
                <GridItem
                    pt={"8px"}
                    colStart={[24, 24, 24, 24, 24]} colEnd={[24, 24, 24, 24, 24]}
                    height={headerHeightPx} pr={"0.5em"} justifySelf={"end"} display={["flex", "flex", "none"]}>


                    <Button variant={"unstyled"} ref={btnRef} colorScheme="teal" onClick={onOpen}>
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="3" rx="1.5" fill="white"/>
                            <rect y="11.25" width="30" height="3" rx="1.5" fill="white"/>
                            <rect y="22.5" width="30" height="3" rx="1.5" fill="white"/>
                        </svg>
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}

                    >
                        <DrawerOverlay/>
                        <DrawerContent>
                            <DrawerCloseButton/>

                            <DrawerBody background={"brand.main"} display={"flex"} flexDirection={"column"} justifyContent={"center"} color={"white"} fontFamily={"ABeeZee"}>
                                <Box onClick={scrollHome} >
                                        Home
                                </Box>
                                <Box pt={"1em"}>


                                    <ScrollLink onClick={onClose} activeClass="active" to="servicesSection" spy={true} smooth={true} offset={50} duration={500}>
                                        Services
                                    </ScrollLink>
                                </Box>

                                <Box pt={"1em"}>
                                    <ScrollLink onClick={onClose} activeClass="active" to="aboutSection" spy={true} smooth={true} offset={50} duration={500}>
                                        About
                                    </ScrollLink>
                                </Box>

                                <Box pt={"1em"}>
                                    <ScrollLink onClick={onClose} activeClass="active" to="contactSection" spy={true} smooth={true} offset={50} duration={500}>
                                        Contact
                                    </ScrollLink>
                                </Box>

                                <Box pt={"1em"}>

                                    <Link href="/terms-and-conditions">
                                        <Text variant="footerTextImprint">
                                            Terms & Conditions
                                        </Text>
                                    </Link>
                                </Box>
                                <Box pt={"1em"}>

                                    <Link href="/privacy">
                                        <Text variant="footerTextImprint">
                                          Privacy
                                        </Text>
                                    </Link>
                                </Box>

                            </DrawerBody>


                        </DrawerContent>
                    </Drawer>
                </GridItem>

            </SimpleGrid>
        </Box>


    )
}

export default HeadyDesktop

