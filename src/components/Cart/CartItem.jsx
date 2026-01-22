import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";
import { Typography, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { BASE_URL } from '../../constants';
import { updateItemCount, removeItem } from '../../redux/reducers/cart';
import { ItemBlock, ImageBox, DataBox, ItemTitle, ItemValuesStack, ItemPrice, RemoveItemBtn } from './Cart.styled';
import ProductCartCountButtons from '../Products/ProductCartCountButtons/ProductCartCountButtons';

function CartItem({ item: { product: { id, title, image, price, discont_price }, count: startCount } }) {
    const dispatch = useDispatch();

    const [count, setCount] = useState(startCount);
    const [outputCount] = useDebounce(count, 800);

    const [isSlideIn, setIsSlideIn] = useState(true);
    const removeFromCart = useDebouncedCallback(id => dispatch(removeItem(id)), 300);
    const handleItemRemove = e => {
        e.preventDefault();
        e.stopPropagation();

        setIsSlideIn(false);
        removeFromCart(id);
    }

    const handleLinkClick = e => {
        if (e.nativeEvent.composedPath().some(node => node.id === 'cart_count_buttons')) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    useEffect(() => {
        if (outputCount !== startCount) {
            dispatch(updateItemCount(id, outputCount));
        }
    }, [dispatch, id, startCount, outputCount]);

    return (
        <Slide direction="right" in={isSlideIn} appear={false} timeout={300} easing="ease-in" mountOnEnter unmountOnExit>
            <Link to={`/products/${id}`} style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                <ItemBlock>
                    <ImageBox sx={{ backgroundImage: `url("${BASE_URL}${image}")` }} />
                    <DataBox>
                        <ItemTitle title={title}>{title}</ItemTitle>

                        <ItemValuesStack>
                            <ProductCartCountButtons count={count} setCount={setCount} />
                            <ItemPrice>
                                <Typography variant="h2" sx={{ fontWeight: 600 }}>${discont_price ?? price}</Typography>
                                {discont_price && <Typography variant="bodyGrey" sx={{ textDecoration: 'line-through' }}>${price}</Typography>}
                            </ItemPrice>
                        </ItemValuesStack>
                    </DataBox>

                    <RemoveItemBtn onClick={handleItemRemove}>
                        <CloseIcon fontSize="small" />
                    </RemoveItemBtn>
                </ItemBlock>
            </Link>
        </Slide>
    );
}

export default CartItem;