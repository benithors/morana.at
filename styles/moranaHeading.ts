const moranaHeading = {
    // The styles all button have in common
    baseStyle: {},
    // Two sizes: sm and md
    sizes: {
        sm: {},
        md: {},
    },
    // Two variants: outline and solid
    variants: {
        header1: {
            fontStyle: "regular",
            color: "brand.white",
            fontSize: "20px",
            fontWeight:"400",
            fontFamily: "Fugaz One"
        },
        header2: {
            fontWeight: "400",
            fontStyle: "normal",
            color: "brand.secondary",
            fontSize: "40px",
            fontFamily: "Fugaz One"
        },
        header3: {
            fontWeight: "400",
            fontStyle: "normal",
            color: "brand.white",
            fontSize: "22px",
            fontFamily: "Fugaz One"
        },
        heading4:{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            size:"26px",

            textAlign:"center",
            fontFamily: "Fugaz One",
        }
    },
    // The default size and variant values
    defaultProps: {},
}

export default moranaHeading
