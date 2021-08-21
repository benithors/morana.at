import {Button} from "@chakra-ui/react";
import React from "react";

const homieButton = {
    // The styles all button have in common
    baseStyle: {
        background:"brand.secondary",
        fontFamily:"Fugaz One",
        textDecoration:"underLine",
        fontWeight:"400"

    },

    // Two variants: outline and solid
    variants: {
        mobile: {
            width:"245px",
            height:"50px",
            fontSize:"24px"

        },
        desktop: {
            width:"339px",
            height:"67px",
            fontSize:"30px"
        },
    },
    // The default size and variant values
    defaultProps: {},
}

export default homieButton
