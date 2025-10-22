import { useSelector } from "react-redux";

import { selectItems } from '../../redux/reducers/cart';
import { ItemsList } from './Cart.styled';
import CartItem from './CartItem';

function CartList() {
    const cartItems = useSelector(selectItems);

    return (
        <ItemsList>
            {Object.values(cartItems).map(item =>
                <CartItem key={item.product.id} item={item} />
            )}
        </ItemsList>
    );
}

export default CartList;