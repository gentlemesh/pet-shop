import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';

import Error404Page from './pages/Error404Page/Error404Page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />

                    <Route path='categories' element={<CategoriesPage />} />
                    <Route path='categories/:id' element={<CategoryPage />} />

                    <Route path='products' element={<ProductsPage />} />
                    <Route path='products/:id' element={<ProductPage />} />

                    <Route path='discounts' element={<ProductsPage isDiscountPage={true} />} />

                    <Route path='cart' element={<CartPage />} />

                    <Route path='*' element={<Error404Page />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;