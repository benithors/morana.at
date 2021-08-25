import {Box, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function FooterSection() {
    return <Box width={["100%", "600px", "1203px"]}
                pt={["3em", "0em"]}
                justifySelf={"center"}
                display={"flex"}
                flexDir={"column"}

                justifyContent={"space-between"}
    >
        <Box display={"flex"} flexDirection={"row"} alignSelf={"flex-end"}>
            <Box pt={"3px"} pr={"2em"}>
                <Image
                    src={"/static/images/mail.png"}
                    width={65}
                    height={65}
                    alt={"Mail"}
                />

            </Box>
            <Box>
                <Image
                    src={"/static/images/linkedin.png"}
                    width={65}
                    height={65}
                    alt={"Linkedin"}
                />
            </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} pt={"7em"}>
            <Box>

                <Text fontSize={"20px"} fontFamily={"AbeeZee"}>
                    Copyright @Morana.at
                </Text>
            </Box>
            <Box>
                <Text color={"brand.secondary"} fontSize={"20px"} fontFamily={"AbeeZee"}>
                    Privacy
                </Text>

            </Box>

        </Box>


    </Box>;
}
