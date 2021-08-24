import Image from 'next/image'
import {Box} from "@chakra-ui/react";


interface IProps {
    imagePath: string

}


const MoranaImageContainer = (props: IProps) => {

    return (
        <Box zIndex={5} minW={"300px"}  w={"inherit"} h={"inherit"}>

            <Box position={"absolute"} width={"95%"} height={"95%"} pl={"0.4em"} pt={"0.3em"}  >
                <Image
                    src={props.imagePath}
                    width={496}
                    height={482}
                    alt={"Oana Moraru"}
                    layout={"responsive"}
                />
            </Box>
            <Box>

                <Box>
                    <svg viewBox="0 0 268 258" fill="none" xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}>
                        <path
                            d="M259.038 112.501C261.997 141.036 258.065 170.538 242.929 195.208C227.896 219.712 201.452 240.036 158.189 249.793C124.879 254.052 87.6273 245.233 58.5438 227.01C29.3925 208.744 9.14766 181.532 8.38677 149.355C6.80562 82.4913 54.4219 9.9088 131.786 8.07934C194.998 6.58454 251.947 44.124 259.038 112.501Z"
                            fill="#4CE6C4" stroke="#4CE6C4" strokeWidth="10"/>
                    </svg>
                </Box>
            </Box>
        </Box>


    )
}

export default MoranaImageContainer;
