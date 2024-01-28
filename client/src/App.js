import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsRedux';
import Home from './components/pages/Home/Home';
import MainLayout from './components/layout/MainLayout/MainLayout';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <MainLayout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </MainLayout>
    
  );
}

export default App;
