import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CartBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: theme.spacing(6),
    height: theme.spacing(6),
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1.2),
    },
}));

export const Counter = styled('div')(({ theme }) => ({
    fontSize: '0.6rem',
    fontWeight: 600,
    lineHeight: '90%',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    top: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));