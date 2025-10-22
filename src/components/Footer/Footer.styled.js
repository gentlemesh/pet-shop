import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const FooterGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.lightGrey.main,
    borderRadius: theme.layout.radius.big,
    padding: theme.spacing(4),
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: '110%',
    marginTop: theme.spacing(2),
}));