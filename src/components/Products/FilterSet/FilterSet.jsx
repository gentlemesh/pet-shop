import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FilterBox, FilterFieldBox, FilterLabel, FilterInput, FilterCheckbox, FilterSelect } from './FilterSet.styled';

function FilterSet({ products, setFilteredProducts, isDiscountPage }) {
    const theme = useTheme();

    const [minPrice, setMinPrice] = useState('');
    const handleMinPriceChange = ({ target: { value } }) => setMinPrice(value);

    const [maxPrice, setMaxPrice] = useState('');
    const handleMaxPriceChange = ({ target: { value } }) => setMaxPrice(value);

    const [showDiscounted, setShowDiscounted] = useState(false);
    const handleDiscountedChange = () => setShowDiscounted(prev => !prev);

    const selectOptions = [
        'by default',
        'newest',
        'price: high-low',
        'price: low-high',
    ];
    const [sortOption, setSortOption] = useState(selectOptions[0]);
    const handleSortChange = ({ target: { value } }) => setSortOption(value);

    useEffect(() => {
        let filtered = [...products];
        filtered = filtered.filter(product =>
            (product.discont_price ?? product.price) >= +minPrice
            && (product.discont_price ?? product.price) <= (+maxPrice || Infinity)
        );

        if (showDiscounted) {
            filtered = filtered.filter(product => product.discont_price !== null);
        }

        switch (sortOption) {
            case 'price: low-high':
                filtered.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
                break;
            case 'price: high-low':
                filtered.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
                break;
            case 'newest':
                filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                break;
            default: // do nothing
        }

        setFilteredProducts(filtered);
    }, [minPrice, maxPrice, showDiscounted, sortOption, products, setFilteredProducts]);

    return (
        <FilterBox>
            <FilterFieldBox>
                <FilterLabel>Price</FilterLabel>
                <FilterInput placeholder="from" type="number" min="0" value={minPrice} onChange={handleMinPriceChange} />
                <FilterInput placeholder="to" type="number" min="0" value={maxPrice} onChange={handleMaxPriceChange} />
            </FilterFieldBox>

            {!isDiscountPage && (
                <FilterFieldBox>
                    <FilterLabel>Discounted Items</FilterLabel>
                    <FilterCheckbox size="small" selected={showDiscounted} onChange={handleDiscountedChange}>
                        <CheckIcon fontSize="small" />
                    </FilterCheckbox>
                </FilterFieldBox>
            )}

            <FilterFieldBox>
                <FilterLabel>Sorted</FilterLabel>
                <FilterSelect
                    value={sortOption}
                    onChange={handleSortChange}
                    disableUnderline
                    variant="standard"
                    size="small"
                    IconComponent={ExpandMoreIcon}
                    MenuProps={{
                        sx: {
                            [`& .${menuClasses.paper}`]: {
                                borderRadius: theme.layout.radius.small,
                                boxShadow: 'none',
                            },
                            [`& .${menuClasses.list}`]: {
                                paddingTop: theme.spacing(2),
                                paddingBottom: theme.spacing(2),
                                backgroundColor: 'white',
                                '& li': {
                                    color: theme.palette.grey.main,
                                    fontSize: '0.8rem',
                                    lineHeight: '126%',
                                    paddingTop: theme.spacing(0.25),
                                    paddingBottom: theme.spacing(0.25),
                                },
                                '& li:hover': {
                                    color: theme.palette.secondary.main,
                                    backgroundColor: 'transparent',
                                },
                                '& li.Mui-selected': {
                                    color: theme.palette.secondary.main,
                                    backgroundColor: 'transparent',
                                },
                                '& li.Mui-selected:hover': {
                                    backgroundColor: 'transparent',
                                },
                            },
                        },
                    }}
                >
                    {selectOptions.map(option => <MenuItem value={option}>{option}</MenuItem>)}
                </FilterSelect>
            </FilterFieldBox>
        </FilterBox>
    );
}

export default FilterSet;