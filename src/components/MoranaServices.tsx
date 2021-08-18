import React from 'react'
import {Button} from "@chakra-ui/react";

export const headerHeight: number = 54
export const headerHeightPx = 54 + "px"

interface IProps {
    children: any;

}

const MoranaServices = (props: IProps) => {

    return (
        <Button width={["245px", "339px"]} height={["50px", "67px"]} background={"brand.secondary"} boxSizing={"border-box"} borderRadius={"30px 0px"} fontFamily={"Fugaz One"} textDecorationLine={"underline"} fontSize={["24px", "30px"]} fontWeight={"400"}>
            {props.children}
        </Button>
    );
}

export default MoranaServices

