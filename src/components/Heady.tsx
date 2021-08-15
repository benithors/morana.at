import React from 'react'
import {Box, Center, Heading} from "@chakra-ui/react";
import Image from 'next/image'
import {MenuToggle} from "./icons/AnimatedMoranaBurger";
export const headerHeight: number = 54
export const headerHeightPx = 54 + "px"

interface IProps {

}

const Heady = (props: IProps) => {

    return (
        <Box
            flexShrink={0}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems={"center"}
            minH={headerHeightPx}
            height={headerHeightPx}
            bg="brand.main"
            w="100%"
            position={"fixed"}
            top={0}
            zIndex={10}
        >
            <Box height={headerHeightPx}>
                <Box height={headerHeightPx} pl={"0.5em"} pr={"0.5em"}>
                    <Image
                        src="/static/images/moranaIcon.svg"
                        width={61}
                        height={53}
                        alt={"Morana"}
                    />
                </Box>
            </Box>
            <Box height={headerHeightPx} flexGrow={1} pt={"15px"}>
                <Heading variant="header1">
                    Morana.at
                </Heading>
            </Box>
            <Box height={headerHeightPx}pr={"0.5em"} >
                    <MenuToggle />
            </Box>


        </Box>
    );
}

export default Heady

