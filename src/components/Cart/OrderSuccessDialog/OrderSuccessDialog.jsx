import { Dialog, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Title, Content, Paragraph, CloseBtn } from './OrderSuccessDialog.styled';

function OrderSuccessDialog({ isOpened, onClose }) {

    const theme = useTheme();

    return (
        <Dialog
            open={isOpened}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            slotProps={{
                paper: {
                    style: {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: theme.layout.radius.big,
                        padding: theme.spacing(4),
                        paddingRight: theme.spacing(9),
                        maxWidth: '548px',
                    },
                }
            }}

        >
            <Title id="alert-dialog-title">Congratulations!</Title>

            <Content>
                <Paragraph>Your order has been successfully placed on&nbsp;the&nbsp;website.</Paragraph>
                <Paragraph>A&nbsp;manager will contact you shortly to&nbsp;confirm your order.</Paragraph>
            </Content>

            <CloseBtn aria-label="close" onClick={onClose}>
                <CloseIcon fontSize="large" />
            </CloseBtn>
        </Dialog>
    );
}

export default OrderSuccessDialog;