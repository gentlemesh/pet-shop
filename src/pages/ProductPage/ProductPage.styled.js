import styled from "@emotion/styled";
import { Box, Grid, Typography, Stack } from "@mui/material";

export const ProductImageGridCell = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
        textAlign: 'right',
    }
}));

export const ProductImageWrapper = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    paddingTop: theme.spacing(2),
    maxWidth: '548px',
    maxHeight: '572px',
}));

export const ProductContentGridCell = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
}));

export const ProductPrices = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacing(4),
    alignItems: 'baseline',
}));

export const ProductPrice = styled(Typography)(() => ({
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: '110%',
}));

export const ProductOldPrice = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    color: theme.typography.bodyGrey.color,
    textDecoration: 'line-through',
}));

export const ProductCartButtons = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        gap: theme.spacing(4),
    },
}));

export const ProductDescriptionBlock = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
}));

export const ProductDescriptionText = styled(Typography)(({ theme }) => ({
    fontSize: '0.8rem',
    fontWeight: 400,
    textAlign: 'justify',
    position: 'relative',
    paddingRight: '0.5rem',
    '&.partially-hidden': {
        overflow: 'hidden',
        maxHeight: 'calc(10 * 1.2rem)',
        '&::before': {
            position: 'absolute',
            content: '"…"',
            insetBlockEnd: 0,
            insetInlineEnd: 0,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            insetInlineEnd: 0,
            width: '0.5rem',
            height: '0.5rem',
            background: theme.palette.background.main,
        },
    },
}));

export const ProductDescriptionReadMoreButton = styled(Typography)(({ theme }) => ({
    fontSize: '0.8rem',
    textDecoration: 'underline',
    marginTop: theme.spacing(2),
    cursor: 'pointer',
}));