import { APP_TITLE } from '../../constants';
import MainPageHero from './MainPageHero/MainPageHero';
import MainCategories from './MainCategories/MainCategories';
import DiscountOffer from './DiscountOffer/DiscountOffer';
import RandomDiscounts from './RandomDiscounts/RandomDiscounts';

function MainPage() {
    return (
        <>
            <title>{`${APP_TITLE} - Main Page`}</title>
            <MainPageHero />
            <MainCategories />
            <DiscountOffer />
            <RandomDiscounts />
        </>
    );
}

export default MainPage;