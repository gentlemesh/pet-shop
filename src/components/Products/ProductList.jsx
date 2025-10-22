import { ProductStack, ProductsEmptyMessage } from './Product.styled';
import ProductCard from './ProductCard';

function ProductList({ products }) {
    return (
        (products && products.length > 0)
            ? <ProductStack>
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </ProductStack>
            : <ProductsEmptyMessage>No products to display.</ProductsEmptyMessage>
    );
}

export default ProductList;