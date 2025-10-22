import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Typography, Stack } from "@mui/material";

import { selectItems, selectItemsCount, clearCart } from '../../../redux/reducers/cart';
import { selectIsOrderAccepted, selectOrderError, resetOrderState } from '../../../redux/reducers/orders';
import { createOrder } from '../../../redux/actions/orders';
import { declension } from '../../../helpers/utils';
import {
    OrderDataBox,
    OrderDataText,
    OrderFormBox,
    OrderFormInput,
    OrderFormInputError,
    OrderFormButton,
} from './CartForm.styled';
import OrderSuccessDialog from '../OrderSuccessDialog/OrderSuccessDialog';

function CartForm() {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectItems);
    const cartItemsCount = useSelector(selectItemsCount);
    const isAccepted = useSelector(selectIsOrderAccepted);
    const error = useSelector(selectOrderError);

    const [isResponseError, setIsResponseError] = useState(false);

    const [isDialogOpened, setIsDialogOpened] = useState(false);
    const openDialog = () => setIsDialogOpened(true);
    const closeDialog = () => {
        setIsDialogOpened(false);
        dispatch(clearCart());
        dispatch(resetOrderState());
    }

    const totalSum = Object.values(cartItems)
        .reduce((sum, { product: { discont_price, price }, count }) => sum + ((discont_price ?? price) * count), 0)
        .toFixed(2)
        ;

    const defaultValues = { name: '', email: '', phone: '' };
    const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitted, errors } } = useForm({ defaultValues });
    const sendData = data => dispatch(createOrder({ ...data, products: Object.values(cartItems), totalSum }));

    useEffect(() => {
        if (isAccepted) {
            reset();
            openDialog();
        } else if (isSubmitted) {
            setIsResponseError(true);
            console.error(error);
        }
    }, [isSubmitted, isAccepted, error, reset]);

    return (
        <>
            <OrderDataBox>
                <Typography variant="h2" marginBottom={3}>Order details</Typography>

                <OrderDataText component="p" variant="bodyGrey">
                    {cartItemsCount} {declension(cartItemsCount, ['item', 'items', 'items'])}
                </OrderDataText>

                <Stack flexDirection="row" justifyContent="space-between" alignItems="baseline">
                    <OrderDataText component="p" variant="bodyGrey">Total</OrderDataText>
                    <Typography component="p" variant="h1">
                        ${totalSum.replace('.', ',')}
                    </Typography>
                </Stack>

                <OrderFormBox component="form" onSubmit={handleSubmit(sendData)}>
                    <OrderFormInput
                        label="Name"
                        placeholder="Name"
                        disabled={isAccepted}
                        {...register('name', {
                            required: "Name is required",
                        })}
                    />
                    {errors.name && <OrderFormInputError color="error">{errors.name.message}</OrderFormInputError>}

                    <OrderFormInput
                        label="Phone Number"
                        placeholder="Phone Number"
                        disabled={isAccepted}
                        {...register('phone', {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[\d\s+-]+$/i,
                                message: "Invalid phone number"
                            },
                        })}
                    />
                    {errors.phone && <OrderFormInputError color="error">{errors.phone.message}</OrderFormInputError>}

                    <OrderFormInput
                        label="Email"
                        placeholder="Email"
                        disabled={isAccepted}
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                            },
                        })}
                    />
                    {errors.email && <OrderFormInputError color="error">{errors.email.message}</OrderFormInputError>}

                    <OrderFormButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting || isAccepted}
                        className={(isAccepted && 'is-accepted') || (isResponseError && 'is-error')}
                    >
                        {isAccepted ? 'The Order is Placed' : (isResponseError ? 'The Order is Not Placed' : 'Order')}
                    </OrderFormButton>
                </OrderFormBox>
            </OrderDataBox>

            <OrderSuccessDialog isOpened={isDialogOpened} onClose={closeDialog} />
        </>
    );
}

export default CartForm;