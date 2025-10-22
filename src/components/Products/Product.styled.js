import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const ProductStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.layout.sectionPaddingBottom,
}));

export const ProductBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.big,
    backgroundColor: theme.palette.background.main,
    boxShadow: `0 0 0 ${theme.palette.background.main}`,
    flex: '0 0 100%',
    [theme.breakpoints.up('sm')]: {
        flexBasis: '47%',
    },
    [theme.breakpoints.up('md')]: {
        flexBasis: '23.2%',
    },
    transform: 'scale(1, 1)',
    transition: 'transform .2s ease-in, box-shadow .2s ease-in',
    '&:hover': {
        transform: 'scale(1.03, 1.03)',
        boxShadow: `0 5px 15px ${theme.palette.shadowCard.main}`,
    },
}));

export const ProductImageBox = styled(Stack)(({ theme }) => ({
    borderTopLeftRadius: theme.layout.radius.big,
    borderTopRightRadius: theme.layout.radius.big,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    height: '284px',
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.mediumGrey.main}`,
}));

export const ProductButtonAddToCartWrapper = styled(Box)(() => ({
    marginTop: 'auto',
    opacity: 0,
    transition: 'opacity .2s ease-in',
    '&:is(.product-card:hover &)': {
        opacity: 1,
    }
}));

export const ProductText = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    padding: `20px ${theme.spacing(4)} ${theme.spacing(4)}`,
}));

export const ProductTitle = styled(Typography)(() => ({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '230px',
}));

export const ProductPrice = styled(Typography)(() => ({
    display: 'inline-block',
    fontSize: '2rem',
    fontWeight: 600,
}));

export const ProductOldPrice = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    fontSize: theme.typography.bodyGrey.fontSize,
    fontWeight: theme.typography.bodyGrey.fontWeight,
    color: theme.typography.bodyGrey.color,
    textDecoration: 'line-through',
    marginLeft: theme.spacing(2),
}));

export const ProductsEmptyMessage = styled(Typography)(({ theme }) => ({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.layout.sectionPaddingBottom,
}));