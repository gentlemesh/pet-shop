import { CategoryStack, CategoriesEmptyMessage } from './Category.styled';
import CategoryCard from './CategoryCard';

function CategoryList({ categories }) {
    return (
        (categories && categories.length > 0)
            ? <CategoryStack>
                {categories.map(category => <CategoryCard key={category.id} category={category} />)}
            </CategoryStack >
            : <CategoriesEmptyMessage>No categories to display.</CategoriesEmptyMessage>
    );
}

export default CategoryList;