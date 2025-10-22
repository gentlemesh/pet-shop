import styled from "@emotion/styled";
import { Stack, Typography, ToggleButton } from "@mui/material";
import Select, { selectClasses } from "@mui/material/Select";

export const FilterBox = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(4),
}));

export const FilterFieldBox = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

export const FilterLabel = styled(Typography)(() => ({
    display: 'inline-block',
    fontWeight: 600,
}));

export const FilterInput = styled('input')(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: '0.8rem',
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: '126%',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    width: '112px',
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

export const FilterCheckbox = styled(ToggleButton)(({ theme }) => ({
    padding: '5px',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: 'white',
    },
    '&:not(.Mui-selected) .MuiSvgIcon-root': {
        opacity: 0,
    },
}));

export const FilterSelect = styled(Select)(({ theme }) => ({
    minWidth: '200px',
    fontSize: '0.8rem',
    lineHeight: '126%',
    [`& .${selectClasses.select}`]: {
        background: 'transparent',
        boxSizing: 'border-box',
        border: `1px solid ${theme.palette.mediumGrey.main}`,
        borderRadius: theme.layout.radius.small,
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        '&:focus': {
            borderRadius: theme.layout.radius.small,
            background: 'transparent',
        },
    },
    [`& .${selectClasses.icon}`]: {
        right: theme.spacing(1),
    },
}));