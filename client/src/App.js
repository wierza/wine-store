import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsRedux';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Logout from './components/pages/Logout/Logout';
import MainLayout from './components/layout/MainLayout/MainLayout';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <MainLayout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </MainLayout>
    
  );
}

export default App;
