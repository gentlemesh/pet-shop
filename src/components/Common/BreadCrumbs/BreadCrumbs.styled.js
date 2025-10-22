import styled from "@emotion/styled";
import { Breadcrumbs, Typography } from "@mui/material";

export const BreadcrumbsBox = styled(Breadcrumbs)(({ theme }) => ({
    padding: `${theme.spacing(5)} 0`,
    '& .MuiBreadcrumbs-separator': {
        display: 'block',
        width: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.mediumGrey.main}`,
        margin: 0,
    },
    '& .MuiBreadcrumbs-ol': {
        rowGap: theme.spacing(1),
    },
}));

export const BreadcrumbBtn = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey.main,
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    fontSize: '0.8rem',
    fontWeight: 500,
    lineHeight: '126%',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    '&:hover': {
        color: theme.typography.body1.color,
    },
    '&.bc-current': {
        color: theme.typography.body1.color,
    },
    '&.bc-current:hover': {
        cursor: 'default',
    },
}));