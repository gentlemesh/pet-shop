import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

import { FooterGrid, FooterText } from './Footer.styled';
import IconSocialInstagram from '../../assets/icons/social/instagram.svg';
import IconSocialWhatsapp from '../../assets/icons/social/whatsapp.svg';
import BottomMap from '../Common/BottomMap/BottomMap';

function Footer() {
    const theme = useTheme();

    return (
        <Stack component="footer" paddingBottom={theme.layout.sectionPaddingBottom}>
            <Typography variant="h1" paddingBottom={4}>Contact</Typography>
            <Grid container spacing={4}>
                <FooterGrid size={{ xs: 12, sm: 7 }}>
                    <Stack>
                        <Typography variant="bodyGrey">Phone</Typography>
                        <FooterText>
                            <a href="tel:+493091588492">+49 30 915-88492</a>
                        </FooterText>
                    </Stack>
                </FooterGrid>
                <FooterGrid size={{ xs: 12, sm: 5 }}>
                    <Stack>
                        <Typography variant="bodyGrey">Socials</Typography>
                        <Stack flexDirection="row" paddingTop="16px" gap={3}>
                            <a href="https://instagram.com/shopets" target="_blank">
                                <img src={IconSocialInstagram} alt="Link to Instagram" />
                            </a>
                            <a href="https://wa.me/493091588492">
                                <img src={IconSocialWhatsapp} alt="Link to Whatsapp" />
                            </a>
                        </Stack>
                    </Stack>
                </FooterGrid>
                <FooterGrid size={{ xs: 12, sm: 7 }}>
                    <Stack>
                        <Typography variant="bodyGrey">Address</Typography>
                        <FooterText>Wallstraẞe&nbsp;9-13, 10179 Berlin, Deutschland</FooterText>
                    </Stack>
                </FooterGrid>
                <FooterGrid size={{ xs: 12, sm: 5 }}>
                    <Stack>
                        <Typography variant="bodyGrey">Working Hours</Typography>
                        <FooterText>24&nbsp;hours a&nbsp;day</FooterText>
                    </Stack>
                </FooterGrid>
            </Grid>
            <Box marginTop={4}>
                <BottomMap />
            </Box>
        </Stack>
    );
}

export default Footer;