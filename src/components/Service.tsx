import React from 'react'
import {Box, Center, Heading} from "@chakra-ui/react";
import Image from "next/image";
import {Header3FontSizes} from "./ResponsiveSizes";


interface IProps {
    children: any;
    title: string;
    imagePath: string
    width: number
    height: number
}

const MoranaService = (props: IProps) => {
    return (
        <Box display={"flex"}
             flexDirection="column"
             justifyContent={"flex-start"}
             minH={"130px"}>

            <Center>
                <Image
                    src={props.imagePath}
                    width={props.width}
                    height={props.height}
                    alt={props.title}
                />
            </Center>

            <Box>
                <Heading variant="heading4" pt={"0.7em"} color={"black"} fontSize={Header3FontSizes}>
                    {props.title}
                </Heading>
            </Box>

            <Box  pl={"0.5em"}>
                {props.children}
            </Box>


        </Box>
    );
}

export default MoranaService

