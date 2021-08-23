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
                <Heading variant="heading4" pt={"25px"} color={"black"}>
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

