import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const ProductCartCountButtonsBox = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    boxSizing: 'border-box',
    marginRight: 'auto',
}));

export const ProductCartCountButton = styled(Button)(({ theme }) => ({
    color: theme.palette.grey.main,
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.typography.body1.color,
    },
    padding: theme.spacing(1),
    minWidth: '58px',
    fontSize: '2rem',
    fontWeight: 200,
    lineHeight: '1rem',
}));

export const ProductCartCount = styled(Stack)(({ theme }) => ({
    width: theme.spacing(11),
    height: '58px',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ProductCartCountInput = styled('input')(({ theme }) => ({
    appearance: 'none',
    display: 'inline',
    border: 'none',
    padding: 0,
    margin: 'auto',
    textAlign: 'center',
    width: theme.spacing(11),
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    '&:focus': {
        outline: 'none',
    },
    '&::placeholder': {
        color: theme.typography.body1.color,
    },
}));