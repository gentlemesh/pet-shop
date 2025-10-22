import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const CategoryStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.layout.sectionPaddingBottom,
}));

export const CategoryBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    flex: '1 1 44%',
    [theme.breakpoints.up('md')]: {
        flexBasis: '20%',
    },
    '& img': {
        transform: 'scale(1, 1)',
        boxShadow: `0 0 0 ${theme.palette.background.main}`,
        transition: 'transform .2s ease-in, box-shadow .2s ease-in',
        borderRadius: theme.layout.radius.big,
    },
    '&:hover img': {
        transform: 'scale(1.03, 1.03)',
        boxShadow: `0 5px 15px ${theme.palette.shadowCard.main}`,
    }
}));

export const CategoriesEmptyMessage = styled(Typography)(({ theme }) => ({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.layout.sectionPaddingBottom,
}));