import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout() {
    const theme = useTheme();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    return (
        <Box
            margin="auto"
            paddingX={theme.layout.paddingX}
            maxWidth={theme.layout.maxWidth}
        >
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
}

export default Layout;