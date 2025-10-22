import styled from "@emotion/styled";
import { Stack, ToggleButton } from "@mui/material";

export const MenuStack = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        '&:not(.is-visible)': {
            display: 'none',
        },
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        gap: theme.spacing(3),
    },
}));

export const MenuToggleButton = styled(ToggleButton)(({ theme }) => ({
    display: 'block',
    border: 'none',
    color: theme.typography.body1.color,
    margin: 'auto',
    lineHeight: 0,
    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));