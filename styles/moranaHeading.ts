const moranaHeading = {
    // The styles all button have in common
    baseStyle: {
        fontFamily: "Fugaz One",
        fontStyle: "regular",
        fontWeight: "400",
    },
    // Two sizes: sm and md
    sizes: {
        sm: {},
        md: {},
    },
    // Two variants: outline and solid
    variants: {
        header1: {
            fontWeight: "400",
            fontStyle: "normal",
            color: "brand.secondary",
        },
        header2: {
            fontWeight: "400",
            fontStyle: "normal",
            color: "brand.secondary",
        },
        header3: {
            fontStyle: "normal",
            color: "brand.white",
            fontSize: "22px",
        },
        heading4:{
            fontStyle: "normal",
            fontSize: "26px",
            size:"26px",
            textAlign:"center",
        }
        , services:{
            fontStyle: "normal",
        }
    },
    // The default size and variant values
    defaultProps: {},
}

export default moranaHeading
