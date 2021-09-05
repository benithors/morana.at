import {Box, Heading} from "@chakra-ui/react";
import React from "react";
import bg1 from "../../public/static/svg/bg1Mobile.svg"


const privacy = () => {
    return (
        <Box>
            <Box bg={"blue"} style={{
                backgroundImage: `url("data:image/svg+xml,${bg1}")`
            }}>
                <Heading variant="header2" h={["500px", "800px"]}>
                    ONE
                </Heading>
                <svg style={{position: "absolute", backgroundColor: "yellow", top: 0, left: 0, width: "100%", height: "100%"}} preserveAspectRatio={"none"} viewBox="0 0 375 729" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V723.677C0 723.677 244.452 767.203 375 605.324V0H0Z" fill="#5F05AB"/>
                </svg>

            </Box>
            <Box bg={"green"} h={"500px"}>
                <Box pt={"3.9vh"} pb="3.9vh" zIndex={2}>
                    <Heading variant="header2" color={"red"}>
                        TWO
                    </Heading>

                </Box>

            </Box>
        </Box>

    )

}

export default privacy
