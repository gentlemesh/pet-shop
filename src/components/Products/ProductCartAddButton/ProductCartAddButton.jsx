import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { selectIsInCart, addItem } from '../../../redux/reducers/cart';
import { CartAddButton } from './ProductCartAddButton.styled';
import ProductCartAnimatedGhost from '../ProductCartAnimatedGhost/ProductCartAnimatedGhost.js';

function ProductCartAddButton({ product, count = 1 }) {
    const dispatch = useDispatch();

    const isInCart = useSelector(state => selectIsInCart(state, product.id));

    const [ghostTrigger, setGhostTrigger] = useState(null);

    const putToCart = useDebouncedCallback((product, count) => dispatch(addItem(product, count)), 301);

    return (
        <>
            <ProductCartAnimatedGhost trigger={ghostTrigger} setTrigger={setGhostTrigger} duration={300} />
            <CartAddButton
                variant="contained"
                className={isInCart ? 'in-cart' : ''}
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();

                    setGhostTrigger(e.target);
                    putToCart(product, count);
                }}
            >
                <span className="title-std">Add to Cart</span>
                <span className="title-in-cart">Added</span>
            </CartAddButton>
        </>
    );
}

export default ProductCartAddButton;