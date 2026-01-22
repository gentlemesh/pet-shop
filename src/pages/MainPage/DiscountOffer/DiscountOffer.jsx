import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

import { postDiscount } from '../../../redux/actions/orders';
import { selectIsQueryAccepted, selectQueryError } from '../../../redux/reducers/orders';
import {
    DiscountOfferBox,
    DiscountOfferContentBox,
    DiscountOfferImageBox,
    DiscountOfferImage,
    DiscountOfferFormBox,
    DiscountOfferInput,
    DiscountOfferInputError,
    DiscountOfferFormButton,
} from './DiscountOffer.styled';
import CtaFormPets from '../../../assets/cta-form-pets.png';
import validationRules from '../../../helpers/formValidationRules';

function DiscountOffer() {
    const dispatch = useDispatch();

    const defaultValues = { name: '', email: '', phone: '' };
    const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitted, errors } } = useForm({ defaultValues });
    const isAccepted = useSelector(selectIsQueryAccepted);
    const error = useSelector(selectQueryError);

    const [isResponseError, setIsResponseError] = useState(false);

    const sendData = data => dispatch(postDiscount(data));

    useEffect(() => {
        if (isAccepted) {
            reset();
        } else if (isSubmitted) {
            setIsResponseError(true);
            console.error(error);
        }
    }, [isSubmitted, isAccepted, error, reset, dispatch]);

    return (
        <DiscountOfferBox>
            <Typography variant="h1" textAlign="center" color="white">5&nbsp;% off on the first order</Typography>
            <DiscountOfferContentBox>
                <DiscountOfferImageBox>
                    <DiscountOfferImage src={CtaFormPets} alt="pets" />
                </DiscountOfferImageBox>
                <DiscountOfferFormBox component="form" onSubmit={handleSubmit(sendData)}>
                    <DiscountOfferInput
                        label="Name"
                        placeholder="Name"
                        disabled={isAccepted}
                        {...register('name', validationRules.name)}
                    />
                    {errors.name && <DiscountOfferInputError color="error">{errors.name.message}</DiscountOfferInputError>}

                    <DiscountOfferInput
                        label="Phone Number"
                        placeholder="Phone Number"
                        disabled={isAccepted}
                        {...register('phone', validationRules.phone)}
                    />
                    {errors.phone && <DiscountOfferInputError color="error">{errors.phone.message}</DiscountOfferInputError>}

                    <DiscountOfferInput
                        label="Email"
                        placeholder="Email"
                        disabled={isAccepted}
                        {...register('email', validationRules.email)}
                    />
                    {errors.email && <DiscountOfferInputError color="error">{errors.email.message}</DiscountOfferInputError>}

                    <DiscountOfferFormButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting || isAccepted}
                        className={(isAccepted && 'is-accepted') || (isResponseError && 'is-error')}
                    >
                        {isAccepted ? 'Request Submitted' : (isResponseError ? 'Request Not Submitted' : 'Get a discount')}
                    </DiscountOfferFormButton>
                </DiscountOfferFormBox>
            </DiscountOfferContentBox>
        </DiscountOfferBox>
    );
}

export default DiscountOffer;