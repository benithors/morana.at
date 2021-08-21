import React from 'react'
import {Box, Center, Heading} from "@chakra-ui/react";
import Image from "next/image";


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
             justifyContent={"center"}
             minW={props.width}
             minH={props.height}>

            <Center>
                <Image
                    src={props.imagePath}
                    width={props.width}
                    height={props.height}
                    alt={"Oana Moraru"}
                />
            </Center>

            <Box>
                <Heading variant="services" pt={"25px"}>
                    {props.title}
                </Heading>
            </Box>

            <Box>
                {props.children}
            </Box>


        </Box>
    );
}

export default MoranaService

