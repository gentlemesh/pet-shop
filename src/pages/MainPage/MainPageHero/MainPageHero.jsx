import { Button } from '@mui/material';

import { HeroBox, HeroHeading } from './MainPageHero.styled';

function MainPageHero() {
    return (
        <HeroBox>
            <HeroHeading variant="h1">Amazing Discounts on&nbsp;Pets Products!</HeroHeading>
            <Button variant="contained" href="/categories" sx={{ marginTop: '40px', width: '218px' }}>Check out</Button>
        </HeroBox>
    );
}

export default MainPageHero;