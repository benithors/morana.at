import React from 'react'
import {Box, Heading} from "@chakra-ui/react";
import {Header2FontSizes} from "./ResponsiveSizes";


interface IProps {
    children: any;
    title: string;
}

const Experience = (props: IProps) => {

    return (
        <Box display={"flex"}
             flexDirection="column" >
            <Heading textAlign={"start"} variant="heading4" pt={"25px"} color={"white"} fontSize={Header2FontSizes}>
                {props.title}
            </Heading>
            <Box ml={"1em"} >


            {props.children}
            </Box>
        </Box>


    );
}

export default Experience

