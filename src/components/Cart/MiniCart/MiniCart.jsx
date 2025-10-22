import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grow from "@mui/material/Grow";

import { selectItemsCount } from '../../../redux/reducers/cart';
import CartIcon from '../../../assets/cart.svg';
import { CartBox, Counter } from './MiniCart.styled';

function MiniCart() {
    const cartItemsCount = useSelector(selectItemsCount);

    return (
        <Link to='/cart'>
            <CartBox id="mini_cart">
                <img src={CartIcon} alt="Cart" />
                <Grow in={cartItemsCount > 0} timeout={400}>
                    <Counter>{cartItemsCount}</Counter>
                </Grow>
            </CartBox>
        </Link>
    );
}

export default MiniCart;