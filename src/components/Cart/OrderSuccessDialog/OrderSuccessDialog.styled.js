import styled from "@emotion/styled";
import { IconButton, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export const Title = styled(DialogTitle)(() => ({
    color: 'white',
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: '110%',
    padding: 0,
}));

export const Content = styled(DialogContent)(() => ({
    padding: 0,
    overflowY: 'visible',
}));

export const Paragraph = styled(DialogContentText)(({ theme }) => ({
    color: 'white',
    fontWeight: 600,
    lineHeight: '110%',
    marginTop: theme.spacing(2),
}));

export const CloseBtn = styled(IconButton)(({ theme }) => ({
    color: 'white',
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
}));