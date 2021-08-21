import Image from 'next/image'
import {Box} from "@chakra-ui/react";


interface IProps {
    imagePath: string
    width: number
    height: number

}


const MoranaImageContainer = (props: IProps) => {
    const width = props.width * 1.07;
    const height = props.height * 1.07;
    return (
        <Box zIndex={5} minW={width}>

            <Box position={"absolute"} pl={["0.7em"]} pt={["1em"]} minW={width}>
                <Image
                    src={props.imagePath}
                    width={props.width}
                    height={props.height}
                    alt={"Oana Moraru"}
                />
            </Box>
            <svg width={width + "px"} height={height + "px"} viewBox="0 0 268 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M259.038 112.501C261.997 141.036 258.065 170.538 242.929 195.208C227.896 219.712 201.452 240.036 158.189 249.793C124.879 254.052 87.6273 245.233 58.5438 227.01C29.3925 208.744 9.14766 181.532 8.38677 149.355C6.80562 82.4913 54.4219 9.9088 131.786 8.07934C194.998 6.58454 251.947 44.124 259.038 112.501Z"
                    fill="#4CE6C4" stroke="#4CE6C4" strokeWidth="10"/>
            </svg>

        </Box>


    )
}

export default MoranaImageContainer;
