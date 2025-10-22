import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const MobilePlaceholder = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height: '102px',
    }
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
        marginLeft: `calc(-1 * ${theme.layout.paddingX})`,
        marginRight: `calc(-1 * ${theme.layout.paddingX})`,
        paddingLeft: theme.layout.paddingX,
        paddingRight: theme.layout.paddingX,
        zIndex: 1,
    },
    [theme.breakpoints.up('sm')]: {
        position: 'static',
    },
}));

export const HeaderMainStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: `${theme.spacing(2)} 0 ${theme.spacing(1)}`,
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        padding: `${theme.spacing(3.75)} 0 ${theme.spacing(3.5)}`,
    }
}));

export const BottomLine = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mediumGrey.main,
    height: '1px',
    marginLeft: `calc(-1 * ${theme.layout.paddingX})`,
    marginRight: `calc(-1 * ${theme.layout.paddingX})`,
}));