import styled from "@emotion/styled";
import { Box, Stack, Typography, Button } from "@mui/material";

export const OrderDataBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.lightGrey.main,
    padding: theme.spacing(4),
    borderRadius: theme.layout.radius.big,
}));

export const OrderDataText = styled(Typography)(() => ({
    fontSize: '2rem',
    lineHeight: '130%',
}));

export const OrderFormBox = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
}));

export const OrderFormInput = styled('input')(({ theme }) => ({
    color: theme.typography.body1.color,
    backgroundColor: theme.palette.background.main,
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: '130%',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    '&::placeholder': {
        color: theme.typography.bodyGrey.color,
    },
    '&:focus': {
        outline: 'none',
    },
    '&:disabled': {
        opacity: 0.5,
    },
}));

export const OrderFormInputError = styled(Typography)(({ theme }) => ({
    position: 'relative',
    height: 0,
    top: '-1rem',
    color: theme.palette.error.main,
    textShadow: `1px 1px 1px ${theme.palette.mediumGrey.main}`,
}));

export const OrderFormButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    '&.is-accepted, &.is-error': {
        backgroundColor: theme.palette.background.main,
        border: `1px solid ${theme.typography.body1.color}`,
    },
    '&.is-accepted': {
        color: theme.typography.body1.color,
    },
    '&.is-error': {
        color: theme.palette.error.main,
    }
}));