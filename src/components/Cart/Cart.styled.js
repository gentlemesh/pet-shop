import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

const imageFlexSize = '200px';

export const ItemsList = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
}));

export const ItemBlock = styled(Stack)(({ theme }) => ({
    position: 'relative',
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.big,
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    }
}));

export const ImageBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: theme.layout.radius.big,
    borderTopRightRadius: theme.layout.radius.big,
    borderBottom: `1px solid ${theme.palette.mediumGrey.main}`,
    flex: `0 0 ${imageFlexSize}`,
    minHeight: '180px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto 100%',
    [theme.breakpoints.up('sm')]: {
        borderTopRightRadius: 0,
        borderBottomLeftRadius: theme.layout.radius.big,
        borderBottom: 'none',
        borderRight: `1px solid ${theme.palette.mediumGrey.main}`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
    },
}));

export const DataBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${imageFlexSize})`,
        paddingRight: theme.spacing(9),
    }
}));

export const ItemTitle = styled(Typography)(() => ({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    lineHeight: '130%',
}));

export const ItemValuesStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: `${theme.spacing(2)} ${theme.spacing(4)}`,
    marginTop: theme.spacing(4),
    alignItems: 'center',
}));

export const ItemPrice = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacing(2),
    alignItems: 'baseline',
    flexGrow: 1,
}));

export const RemoveItemBtn = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    color: theme.typography.body1.color,
    borderRadius: '100%',
    '&:hover, &:focus:not(:hover)': {
        backgroundColor: theme.palette.background.main,
    },
    boxSizing: 'border-box',
    minWidth: 'initial',
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    marginTop: '-2px',
}));