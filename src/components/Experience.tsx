import React from 'react'
import {Box, GridItem, Heading} from "@chakra-ui/react";


interface IProps {
    children: any;
    title: string;
}

const Experience = (props: IProps) => {

    return (
        <GridItem display={"flex"}
                  flexDirection="column">
        <Box display={"flex"}
             alignSelf={["center", "center", "flex-start"]}
             flexDirection="column"
             justifyContent={"start"}
             w={["300px", "370px", "340px", "400px","320px"]}>
            <Box>
                <Heading textAlign={"start"} variant="heading4" pt={"25px"} color={"white"} fontSize={["18px","20px","24px","26px"]}>
                    {props.title}
                </Heading>
            </Box>

            <Box>
                {props.children}
            </Box>


        </Box>
        </GridItem>
    );
}

export default Experience

