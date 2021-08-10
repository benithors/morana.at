import React from 'react'
import {Box, Heading} from "@chakra-ui/react";

export const headerHeight: number = 60
export const headerHeightPx = headerHeight + "px"

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
                <Box height={headerHeightPx} pt={"9px"}>
                    test
                </Box>
            </Box>
            <Box height={headerHeightPx} pt={"9px"}>
                <Heading variant="header2">
                    Morana
                </Heading>
            </Box>
            <Box height={headerHeightPx} pt={"16px"} pb={"15px"}>

                blub

            </Box>


        </Box>
    );
}

export default Heady

