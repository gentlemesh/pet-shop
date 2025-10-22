import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const ContentWrapper = styled(Stack)(({ theme }) => ({
    padding: `${theme.layout.sectionPaddingBottom} 0`,
    margin: 'auto',
    maxWidth: '690px',
    gap: theme.spacing(4),
    textAlign: 'center',
}));