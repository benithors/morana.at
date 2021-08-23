import React from 'react'
import {Box, Heading} from "@chakra-ui/react";


interface IProps {
    children: any;
    title: string;
}

const Experience = (props: IProps) => {

    return (
        <Box display={"flex"}
             flexDirection="column"
             justifyContent={"center"}
             width={["601px","587px","397px"]}
        >
            <Box>
                <Heading variant="heading4" pt={"25px"} color={"white"}>
                    {props.title}
                </Heading>
            </Box>

            <Box>
                {props.children}
            </Box>


        </Box>
    );
}

export default Experience

