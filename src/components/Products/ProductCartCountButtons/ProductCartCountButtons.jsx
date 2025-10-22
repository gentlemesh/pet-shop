import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add"; // +
import RemoveIcon from "@mui/icons-material/Remove"; // -

import {
    ProductCartCountButtonsBox,
    ProductCartCountButton,
    ProductCartCount,
    ProductCartCountInput,
} from './ProductCartCountButtons.styled';

function ProductCartCountButtons({ count, setCount, minCount = 1, maxCount = 9999 }) {
    // handle [-],[+] buttons
    const handleCountIncrement = () => setCount(prev => prev < maxCount ? prev + 1 : prev);
    const handleCountDecrement = () => setCount(prev => prev > minCount ? prev - 1 : minCount);

    const [intervalId, setIntervalId] = useState();
    const handleMouseDown = ({ target: { name } }) => {
        setIntervalId(
            setInterval(() => ({
                'countBtnIncrement': handleCountIncrement,
                'countBtnDecrement': handleCountDecrement,
            }[name])(), 100)
        );
    }
    useEffect(() => {
        const handleMouseUpGlobal = () => {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
        document.addEventListener('mouseup', handleMouseUpGlobal);

        return () => {
            document.removeEventListener('mouseup', handleMouseUpGlobal);
        };
    }, [intervalId]);


    // handle input field
    const handleManualCountChange = ({ target: { value } }) => {
        const normalizedValue = value.trim();
        setCount(prev => {
            if (value && (Number.isNaN(+normalizedValue) || +normalizedValue === 0)) {
                return prev;
            }
            if (+normalizedValue > maxCount) {
                return prev;
            }

            return normalizedValue.length ? +normalizedValue : '';
        });
    }
    const handleManualCountBlur = ({ target: { value } }) => {
        if (!value || +value === 0) {
            setCount(minCount);
        }
    }

    return (
        <ProductCartCountButtonsBox id="cart_count_buttons">
            <ProductCartCountButton
                name="countBtnDecrement"
                onClick={handleCountDecrement}
                onMouseDown={handleMouseDown}
            >
                <RemoveIcon fontSize="small" sx={{ pointerEvents: 'none' }} />
            </ProductCartCountButton>

            <ProductCartCount>
                <ProductCartCountInput
                    name="countInput"
                    value={count}
                    placeholder={minCount}
                    onChange={handleManualCountChange}
                    onBlur={handleManualCountBlur}
                />
            </ProductCartCount>

            <ProductCartCountButton
                name="countBtnIncrement"
                onClick={handleCountIncrement}
                onMouseDown={handleMouseDown}
            >
                <AddIcon fontSize="small" sx={{ pointerEvents: 'none' }} />
            </ProductCartCountButton>
        </ProductCartCountButtonsBox>
    );
}

export default ProductCartCountButtons;