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
             justifyContent={"start"}
        >
            <Box>
                <Heading textAlign={["start","start","center"]} variant="heading4" pt={"25px"} color={"white"} fontSize={["24px","24px","24px","26px"]}>
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

