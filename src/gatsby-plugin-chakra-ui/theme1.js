import { theme as defaultTheme } from "@chakra-ui/react"
export default {
    colors: {
        ...defaultTheme.colors,
        brandPrimary: "#FF3FB4",
        brandLightPrimary: "#E9F4FA",
        brandLight2: "#FFE073",
        brandDark1:"#063462",
        brandDark2:"#08BDBA",
        "brand.light.primary": "#FF3FB4",
        brand:{
            "light.primary": "#FF3FB4",
            "light.2": "#FFE073",
            "dark.1": "#063462",
            "dark.2": "#08BDBA",
        }
    },
    fonts: {
        ...defaultTheme.fonts,
        body: "Source Sans Pro, sans-serif",
        heading: "Source Sans Pro, sans-serif",
        mono: "Source Sans Pro",
    },

    //   },
    //   fontSizes: {
    //     xs: "12px",
    //     sm: "14px",
    //     md: "16px",
    //     lg: "18px",
    //     xl: "20px",
    //     "2xl": "24px",
    //     "3xl": "28px",
    //     "4xl": "36px",
    //     "5xl": "48px",
    //     "6xl": "64px",
    //   },
    //   fontWeights: {
    //     normal: 400,
    //     medium: 500,
    //     bold: 700,
    //   },
    //   lineHeights: {
    //     normal: "normal",
    //     none: "1",
    //     shorter: "1.25",
    //     short: "1.375",
    //     base: "1.5",
    //     tall: "1.625",
    //     taller: "2",
    //   },
    //   letterSpacings: {
    //     tighter: "-0.05em",
    //     tight: "-0.025em",
    //     normal: "0",
    //     wide: "0.025em",
    //     wider: "0.05em",
    //     widest: "0.1em",
    //   },
}