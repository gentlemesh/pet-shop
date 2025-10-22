import { Link } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { ContentWrapper } from './Error404Page.styled';
import Image from '../../assets/404.png';

function Error404Page() {
    const theme = useTheme();

    return (
        <Box>
            <title>{`${APP_TITLE} - Page Not Found`}</title>
            <ContentWrapper>
                <img src={Image} alt="Page Not Found" />
                <Box>
                    <Typography variant="h1" sx={{ marginBottom: theme.spacing(2) }}>Page Not Found</Typography>
                    <Typography variant="bodyGrey">
                        We’re sorry, the page you requested could not be found. Please go back to the homepage.
                    </Typography>
                </Box>
                <Link to="/">
                    <Button variant="contained" sx={{ width: '209px' }}>Go Home</Button>
                </Link>
            </ContentWrapper>
        </Box>
    );
}

export default Error404Page;