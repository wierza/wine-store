import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { fetchProducts, getProducts } from '../../../redux/productsRedux';
import ProductCard from '../ProductCard/ProductCard';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const [localProducts, setLocalProducts] = useState(null);

  const reduxProducts = useSelector(getProducts);

  useEffect(() => {
    if (reduxProducts && Array.isArray(reduxProducts)) {
      setLocalProducts(reduxProducts);
    }
  }, [reduxProducts]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  <div className="d-flex flex-row flex-wrap justify-content-around" >
      {localProducts ? (
        localProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            photo={product.photo}
            price={product.price}
          />
        ))
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ProductsPage;

//