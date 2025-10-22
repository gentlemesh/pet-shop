import styled from "@emotion/styled";
import { Button, Divider, Stack } from "@mui/material";

export const DividerStack = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const DividerLine = styled(Divider)(({ theme }) => ({
    color: theme.palette.mediumGrey.main,
    borderColor: theme.palette.mediumGrey.main,
    flexGrow: '1',
    height: '1px',
    marginLeft: theme.spacing(4),
}));

export const DividerButton = styled(Button)(({ theme }) => ({
    color: theme.palette.grey.main,
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    borderRadius: theme.layout.radius.small,
    fontSize: '0.8rem',
    fontWeight: 500,
    lineHeight: '126%',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.typography.body1.color,
    }
}));