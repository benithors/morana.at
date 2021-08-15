import React from 'react'
import {Box, Button, Center, Heading} from "@chakra-ui/react";
import Image from 'next/image'
import {MenuToggle} from "./icons/AnimatedMoranaBurger";
export const headerHeight: number = 54
export const headerHeightPx = 54 + "px"

interface IProps {
    children: any;

}

const MoranaButton = (props: IProps) => {

    return (
       <Button width={["245px","339px"]} height={["50px","67px"]} background={"brand.secondary"} boxSizing={"border-box"}  borderRadius={"30px 0px"} fontFamily={"Fugaz One"} textDecorationLine={"underline"} fontSize={["24px","30px"]} fontWeight={"400"}>
           {props.children}
       </Button>
    );
}

export default MoranaButton

