import React from 'react'
import {Box, Heading} from "@chakra-ui/react";


interface IProps {
    children: any;
    title: string;
}

const Experience = (props: IProps) => {

    return (
        <Box display={"flex"}
             flexDirection="column">
            <Heading textAlign={"start"} variant="heading4" pt={"25px"} color={"white"} fontSize={["18px", "20px", "24px", "26px"]}>
                {props.title}
            </Heading>
            {props.children}
        </Box>


    );
}

export default Experience

