import React from 'react'
import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, GridItem, Heading, SimpleGrid, Text, useDisclosure} from "@chakra-ui/react";
import Image from 'next/image'
import moranaIcon from '../../public/static/svg/moranaIcon.svg'
import {useRouter} from "next/router";
import {BasicTextSizes} from "./ResponsiveSizes";

export const headerHeightPx = ["54px", "80px"];


const HeadyDesktop = () => {
    const height = ["54px", "54px", "54px","54px","80px"];
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    const router = useRouter()

    function scrollHome() {
        router.push('/#');
        onClose();
    }


    function jumpToAbout(){
        router.push('/#about');
        onClose();
    }

    function jumpToServices(){
        router.push('/#services');
        onClose();
    }

    function jumpToContact(){
        if (router.pathname == '/') {
            router.push('/#contact');
        } else {
            router.push('/privacy#contact');
            onClose();
        }
        onClose();
    }

    function jumpToPrivacy(){
        router.push('/privacy');
        onClose();
    }

    const menuSpacing = "2em";
    const ptServices = ["17px", "17px", "17px", "17px", "30px"];
    const desktopHeaderSectionWidth = ["70px","80px","80px","100px","100px"];
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
            width={"100vw"}
            bg={"brand.maintransparent"}
        >
            <SimpleGrid
                width={"100%"}
                columns={24}
                maxW={["100%", "100%", "1440px"]}
                id={"privacy"}
            >


                <GridItem
                    colStart={[2, 2,3, 3, 3]} colEnd={[20, 20, 12, 12, 12]}
                    display={"flex"}
                    flexDirection={"row"}
                    onClick={scrollHome}
                >
                    <Box
                        minH={height}
                        minW={"41px"}
                        pt={["15px","15px","15px","15px","20px"]}
                        mr={["8px","8px","8px","8px","15px"]}
                        height={["41px", "41px", "41px", "41px", "100px"]}
                        w={["51px", "51px", "51px", "51px", "87px"]}
                    >
                        <Image
                            src={moranaIcon}
                            alt={"Morana Icon"}
                            quality={100}
                            layout={"responsive"}
                        />
                    </Box>

                    <Heading
                         color={"white"} fontSize={["20px", "20px","20px","20px","26px"]} height={height} pt={ptServices}>
                        Morana.at
                    </Heading>
                </GridItem>

                <GridItem colSpan={[2, 2, 11, 11]}
                          display={["none", "none","flex", "flex"]}
                          flexDirection="row"
                          justifySelf={"end"}
                          pl={"5em"}
                >


                    <Box height={height} pt={ptServices} width={desktopHeaderSectionWidth}       onClick={jumpToServices} >

                            <Text variant={"primary"} fontSize={BasicTextSizes} lineHeight={"25px"} align={"left"} verticalAlign={"center"} color={"white"}>
                                Services
                            </Text>
                    </Box>
                    <Box height={height} pt={ptServices} width={desktopHeaderSectionWidth} onClick={jumpToAbout}>

                            <Text variant={"primary"} fontSize={BasicTextSizes} lineHeight={"25px"} align={"center"} verticalAlign={"center"}>
                                About
                            </Text>
                    </Box>
                    <Box height={height} pt={ptServices} width={desktopHeaderSectionWidth}  onClick={jumpToContact}>

                            <Text variant={"primary"} fontSize={BasicTextSizes} lineHeight={"25px"} align={"right"} verticalAlign={"center"} color={"white"}>
                                Contact
                            </Text>
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
                            <DrawerCloseButton >
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="21.2129" width="30" height="3" rx="1.5" transform="rotate(-45 0 21.2129)" fill="white"/>
                                    <rect x="2.78857" y="0.167969" width="30" height="3" rx="1.5" transform="rotate(45 2.78857 0.167969)" fill="white"/>
                                </svg>
                            </DrawerCloseButton>



                            <DrawerBody pl={"3em"} pb={"7em"} background={"brand.main"} display={"flex"} flexDirection={"column"} justifyContent={"center"} color={"white"} fontFamily={"Fugaz One"}>
                                <Box onClick={scrollHome}>
                                    Home
                                </Box>
                                <Box pt={menuSpacing} onClick={jumpToServices}>

                                        Services
                                </Box>

                                <Box pt={menuSpacing} onClick={jumpToAbout}>
                                        About
                                </Box>

                                <Box pt={menuSpacing} onClick={jumpToContact}>
                                        Contact
                                </Box>


                                <Box pt={menuSpacing}  onClick={jumpToPrivacy}>


                                    <Text variant="footerTextImprint">
                                        Privacy
                                    </Text>
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

