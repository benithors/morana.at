import {Box, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import HeadyDesktop from "../components/HeadyDesktop";
import FooterSection from "../sections/FooterSection";
import ContactSection from "../sections/ContactSection";
import {BasicTextLineHeight, BasicTextSizes, Header1FontSizes, Header2FontSizes} from "../components/ResponsiveSizes";


const privacy = () => {
    const HeadingPaddingTop1 = "2em";
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

                <Box w={"100%"}
                     display="flex"
                     flexDirection="column"
                     alignItems={"center"}
                     overflowX={"hidden"}
                     backgroundImage={["url('/static/svg/bgImprintMobile.svg')", "url('/static/svg/bgImprintMobile.svg')", "url('/static/svg/bgImprintDesktop.svg')"]}
                     backgroundSize={"100% 100%"}
                     backgroundRepeat={"no-repeat"}
                     pb={["10em","10em","15em"]}>


                    <SimpleGrid pt={["4em", "4em", "10em"]}
                                maxW={["100%", "100%", "1440px"]}
                                columns={[12, 12, 12, 12]}
                                width={"100%"}
                    >
                        <GridItem display={"flex"}
                                  flexDirection="column"
                                  zIndex={2}
                                  colStart={[2, 2, 2, 2, 2]} colEnd={[12, 12, 12, 12, 13]}
                        >
                            <Heading variant="header2"
                                     lineHeight={["40px", "60px", "80px"]}
                                     pt={"1em"}
                                     fontSize={Header1FontSizes}
                                     textAlign={["center", "center", "start"]}
                                     alignSelf={"center"}>
                                Imprint
                            </Heading>
                        </GridItem>

                        <GridItem colStart={2} colEnd={[12, 12, 12, 12, 13]}>
                            <Heading textAlign={"start"}
                                     variant={"heading4"}
                                     pt={HeadingPaddingTop1}
                                     color={"white"}
                                     fontSize={Header1FontSizes}>
                                Company
                            </Heading>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                Dipl.-Ing. Oana-Aurora
                            </Text>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                Laaer-Berg-Straße 47/259 1100 Vienna, Austria
                            </Text>


                            <Heading textAlign={"start"} variant="heading4" pt={"15px"} color={"brand.secondary"}
                                     fontSize={Header2FontSizes}>
                                Business purpose
                            </Heading>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                IT Services
                            </Text>

                            <Heading textAlign={"start"} variant="heading4" pt={HeadingPaddingTop1} color={"white"}
                                     fontSize={Header1FontSizes}>
                                Contact
                            </Heading>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                +43 699 150 28996
                            </Text>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                oana.moraru@morana.at
                            </Text>

                            <Heading textAlign={"start"} variant="heading4" pt={"15px"} color={"brand.secondary"}
                                     fontSize={Header2FontSizes}>
                                UID-Number
                            </Heading>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                ATU76949812
                            </Text>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                Member of the Vienna Chamber of Commerce (Wirtschaftskammer Wien)
                            </Text>


                            <Heading textAlign={"start"} variant="heading4" pt={HeadingPaddingTop1} color={"white"}
                                     fontSize={Header1FontSizes}>
                                Professional Law
                            </Heading>
                            <Heading textAlign={"start"} variant="heading4" pt={"15px"} color={"brand.secondary"} fontSize={["22px", "22px", "24px", "26px"]}>
                                Commerce Order (Gewerbeordnung)
                            </Heading>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                www.ris.bka.gv.at
                            </Text>

                            <Heading textAlign={"start"} variant="heading4" pt={"15px"} color={"brand.secondary"}
                                     fontSize={Header2FontSizes}>
                                Supervisory authority/commercial authority
                            </Heading>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                Authority according to ECG (E-Commerce Act) Municipal District Office of the 10th District, MBA 10
                            </Text> <Text
                            variant={"primary"}
                            fontSize={BasicTextSizes}
                            lineHeight={BasicTextLineHeight}
                            textAlign={"start"}
                            pt={"1.5em"}
                            alignSelf={["center", "center", "flex-start"]}>
                            Consumers have the possibility to submit complaints to the EU online dispute resolution platform: https://ec.europa.eu/odr
                        </Text>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                You can also send any complaints to the above e-mail address.
                            </Text>
                            <Heading textAlign={"start"} variant="heading4" pt={HeadingPaddingTop1} color={"white"}
                                     fontSize={Header1FontSizes}>
                                Liability for the content of this website
                            </Heading>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>

                                I am constantly developing the content of this website and strive to provide correct and up-to-date information. Unfortunately, I cannot assume any liability for the correctness of all contents on this website, especially
                                for those provided by third parties.
                            </Text>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                If you notice any problematic or illegal content, please contact me immediately at the email mentioned above!
                            </Text>

                            <Heading textAlign={"start"} variant="heading4" pt={HeadingPaddingTop1} color={"white"}
                                     fontSize={Header1FontSizes}>
                                Copyright notice
                            </Heading>
                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                All contents of this website (pictures, photos, texts, videos) are subject to copyright. If necessary, I will legally pursue the unauthorized use of parts of the content of my site.
                            </Text>

                            <Heading textAlign={"start"} variant="heading4" pt={HeadingPaddingTop1} color={"white"}
                                     fontSize={Header1FontSizes}>
                                Recording of data on this website
                            </Heading>


                            <Heading textAlign={"start"} variant="heading4" pt={"15px"} color={"brand.secondary"}
                                     fontSize={Header2FontSizes}>
                                Cookies
                            </Heading>

                            <Text
                                variant={"primary"}
                                fontSize={BasicTextSizes}
                                lineHeight={BasicTextLineHeight}
                                textAlign={"start"}
                                pt={"1.5em"}
                                alignSelf={["center", "center", "flex-start"]}>
                                My websites does not use any cookies.
                            </Text>
                        </GridItem>


                    </SimpleGrid>

                </Box>

                <ContactSection/>

                <FooterSection/>

            </SimpleGrid>
        </Box>
    )

}

export default privacy
