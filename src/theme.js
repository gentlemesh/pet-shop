import { createTheme } from "@mui/material"

const customTypography = {
    fontFamily: 'var(--text-basic-font-family)',
    h1: {
        fontSize: 'var(--text-heading-font-size)',
        fontWeight: 'var(--text-heading-font-weight)',
    },
    h2: {
        fontSize: 'var(--text-heading-h2-font-size)',
        fontWeight: 'var(--text-heading-font-weight)',
    },
    body1: {
        fontSize: 'var(--text-basic-font-size)',
        fontWeight: 'var(--text-basic-font-weight)',
    },
    bodyGrey: {
        fontSize: 'var(--text-basic-font-size)',
        fontWeight: 'var(--text-basic-font-weight)',
        color: 'var(--color-grey)',
    },
    allVariants: {
        color: 'var(--color-text-base)',
    },
}

export const theme = createTheme({
    typography: customTypography,
    palette: {
        primary: {
            main: 'rgb(13, 80, 255)', // CSS variables are not supported here :(
        },
        secondary: {
            main: 'rgb(40, 40, 40)',
        },
        background: {
            main: 'rgb(255, 255, 255)',
        },
        lightGrey: {
            main: 'rgb(241, 243, 244)',
        },
        mediumGrey: {
            main: 'rgb(221, 221, 221)',
        },
        grey: {
            main: 'rgb(139, 139, 139)',
        },
        shadowCard: {
            main: 'rgba(0, 0, 0, 0.3)',
        }
    },
    layout: {
        paddingX: 'var(--layout-padding-x)',
        maxWidth: 'var(--layout-max-width)',
        sectionPaddingBottom: 'var(--layout-section-padding-bottom)',
        radius: {
            small: 'var(--layout-radius-small)',
            big: 'var(--layout-radius-big)',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '16px 32px',
                    boxSizing: 'border-box',
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: '130%',
                    textTransform: 'none',
                    boxShadow: 'none',
                    border: '1px solid transparent',
                    '&:hover, &:focus, &:active': {
                        backgroundColor: 'rgb(40, 40, 40)',
                        boxShadow: 'none',
                    },
                    '&:disabled': {
                        backgroundColor: 'rgba(40, 40, 40, .5)',
                        color: 'white',
                    }
                },
            },
        },
    },
    cssVariables: true,
});
