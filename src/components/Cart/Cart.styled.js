import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const ItemsList = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
}));

export const ItemBlock = styled(Stack)(({ theme }) => ({
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.big,
    flexDirection: 'row',
}));

export const ImageBox = styled(Box)(({ theme }) => ({
    borderRight: `1px solid ${theme.palette.mediumGrey.main}`,
    borderTopLeftRadius: theme.layout.radius.big,
    borderBottomLeftRadius: theme.layout.radius.big,
    flex: '0 0 200px',
    minHeight: '180px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
}));

export const DataBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: `${theme.spacing(4)} ${theme.spacing(9)} ${theme.spacing(4)} ${theme.spacing(4)}`,
    width: 'calc(100% - 200px)',
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
    backgroundColor: 'transparent',
    color: theme.typography.body1.color,
    borderRadius: '100%',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    boxSizing: 'border-box',
    minWidth: 'initial',
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    marginTop: '-2px',
}));