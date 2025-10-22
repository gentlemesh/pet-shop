import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { selectItemsCount } from '../../redux/reducers/cart';
import TitleDivider from '../../components/Common/TitleDivider/TitleDivider';
import CartList from '../../components/Cart/CartList';
import CartForm from '../../components/Cart/CartForm/CartForm';

function CartPage() {
    const theme = useTheme();

    const cartItemsCount = useSelector(selectItemsCount);

    const continueShoppingUrl = '/categories';

    return (
        <Box sx={{ paddingBottom: theme.layout.sectionPaddingBottom }}>
            <title>{`${APP_TITLE} - Shopping cart`}</title>
            <TitleDivider
                title="Shopping cart"
                linkTo={continueShoppingUrl}
                btnTitle="Back to the store"
                sx={{ padding: `${theme.spacing(5)} 0` }}
            />
            {cartItemsCount === 0
                ? (<>
                    <Typography>Looks like you have no items in your basket currently.</Typography>
                    <Link to={continueShoppingUrl}>
                        <Button
                            variant="contained"
                            sx={{
                                marginTop: 4,
                                paddingLeft: 7,
                                paddingRight: 7,
                            }}
                        >Continue Shopping</Button>
                    </Link>
                </>) : (
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <CartList />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <CartForm />
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default CartPage;