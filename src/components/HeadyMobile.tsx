import React from 'react'
import {Box, Heading, Text, useMediaQuery} from "@chakra-ui/react";
import Image from 'next/image'
import {MenuToggle} from "./icons/AnimatedMoranaBurger";

export const headerHeight: number = 54
export const headerHeightPx = ["54px", "80px"];


const HeadyMobile = () => {
    const ptArray = ["15px", "27px"];
    return (
        <Box
            display="flex"
            flexDirection="row"
            minH={headerHeightPx}
            height={headerHeightPx}
            bg="brand.maintransparent"
            w="100vw"
            maxW={"100vw"}
            position={"fixed"}
            top={0}
            zIndex={10}
            justifyContent={"space-around"}

        >
            <Box height={headerHeightPx} >
                <Box height={headerHeightPx} pl={"0.5em"} pr={"0.5em"} pt={["0px", "12px"]} >
                    <Image
                        src="/static/images/moranaIcon.svg"
                        width={61}
                        height={53}
                        alt={"Morana"}
                    />
                </Box>
            </Box>
            <Box height={headerHeightPx} pt={ptArray}  flexGrow={1} >
                <Heading variant="header1">
                    Morana.at mobile
                </Heading>
            </Box>


                <Box height={headerHeightPx} pr={"0.5em"} pt={["0px", "15px"]} >
                    <MenuToggle/>
                </Box>


        </Box>
    );
}

export default HeadyMobile

