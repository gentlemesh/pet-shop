import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const PercentLabel = styled(Typography)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.layout.radius.small,
    fontWeight: 600,
    lineHeight: '130%',
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
}));