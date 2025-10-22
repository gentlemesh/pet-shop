import styled from "@emotion/styled";
import { Box, Stack, Typography, Button } from "@mui/material";

export const DiscountOfferBox = styled(Box)(({ theme }) => ({
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, rgba(36, 81, 198, 1))`,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.layout.sectionPaddingBottom,
    padding: theme.spacing(4),
    borderRadius: theme.layout.radius.big,
}));

export const DiscountOfferContentBox = styled(Stack)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: '2.4%',
    }
}));

export const DiscountOfferImageBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        width: '58.83%',
    }
}));

export const DiscountOfferImage = styled('img')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block',
        width: '100%',
        maxWidth: '830px',
        margin: 'auto',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: `calc(-1 * ${theme.spacing(4)})`,
    }
}));

export const DiscountOfferFormBox = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        width: '38.77%',
    }
}));

export const DiscountOfferInput = styled('input')(({ theme }) => ({
    color: 'white',
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: theme.layout.radius.small,
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: '130%',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    '&::placeholder': {
        color: 'white',
    },
    '&:focus': {
        outline: 'none',
    },
    '&:disabled': {
        opacity: 0.5,
    },
}));

export const DiscountOfferInputError = styled(Typography)(({ theme }) => ({
    position: 'relative',
    height: 0,
    top: '-1rem',
    color: theme.palette.error.main,
    textShadow: '1px 1px 1px black',
}));

export const DiscountOfferFormButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: theme.palette.secondary.main,
    '&:hover': {
        color: 'white',
    },
    '&.is-accepted': {
        backgroundColor: theme.palette.lightGrey.main,
        color: theme.palette.primary.main,
    },
    '&.is-error': {
        backgroundColor: theme.palette.lightGrey.main,
        color: theme.palette.error.main,
    }
}));