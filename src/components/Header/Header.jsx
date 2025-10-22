import { Link } from "react-router-dom";

import LogoIcon from '../../assets/logo.svg';
import MiniCart from '../Cart/MiniCart/MiniCart';
import TopMenu from '../Common/TopMenu/TopMenu';

import { MobilePlaceholder, HeaderBox, HeaderMainStack, BottomLine } from './Header.styled';

function Header() {
    return (
        <>
            <HeaderBox component="header">
                <HeaderMainStack>
                    <Link to='/'>
                        <img src={LogoIcon} alt="Logo" />
                    </Link>
                    <TopMenu />
                    <MiniCart />
                </HeaderMainStack>
                <BottomLine />
            </HeaderBox>
            <MobilePlaceholder />
        </>
    );
}

export default Header;