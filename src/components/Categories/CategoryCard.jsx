import { Link } from "react-router-dom";
import { Grow, Typography } from "@mui/material";

import { CategoryBox } from './Category.styled';
import { BASE_URL } from '../../constants';

function CategoryCard({ category: { id, title, image } }) {
    return (
        <Grow in={true} timeout={600} style={{ transformOrigin: '50% 40%' }}>
            <CategoryBox>
                <Link to={`/categories/${id}`}>
                    <img src={`${BASE_URL}${image}`} alt={title} />
                    <Typography>{title}</Typography>
                </Link>
            </CategoryBox>
        </Grow>
    );
}

export default CategoryCard;