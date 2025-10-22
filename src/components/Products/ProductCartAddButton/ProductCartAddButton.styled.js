import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CartAddButton = styled(Button)(({ theme }) => ({
    width: '100%',
    '&.in-cart:not(:hover)': {
        color: theme.typography.body1.color,
        backgroundColor: theme.palette.background.main,
        border: `1px solid ${theme.typography.body1.color}`,
    },
    '&:not(.in-cart) .title-in-cart, &.in-cart:hover .title-in-cart, &.in-cart .title-std': {
        display: 'none',
    },
    '&.in-cart:hover .title-std': {
        display: 'inline',
    },
}));