import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { MenuStack, MenuToggleButton } from './TopMenu.styled';

function TopMenu() {
    const [isOpened, setIsOpened] = useState(false);
    const toggleMenu = () => setIsOpened(prev => !prev);

    const links = [
        { title: 'Main Page', to: '/' },
        { title: 'Categories', to: '/categories' },
        { title: 'All products', to: '/products' },
        { title: 'All sales', to: '/discounts' },
    ];

    return (
        <Box alignSelf="center">
            <MenuStack className={isOpened && 'is-visible'}>
                {links.map(({ title, to }) => (
                    <Link key={title} to={to} onClick={() => setIsOpened(false)}>
                        <Typography>{title}</Typography>
                    </Link>
                ))}
            </MenuStack>
            <MenuToggleButton selected={isOpened} onChange={toggleMenu}>
                {isOpened ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </MenuToggleButton>
        </Box>
    );
}

export default TopMenu;