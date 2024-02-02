import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/usersRedux';
import { getProductById, fetchProducts } from '../../../redux/productsRedux';
import { useState, useEffect } from 'react';
import Quantity from '../../features/Quantity/Quantity'; 
import React from 'react';
import { IMGS_URL } from '../../../config';
import { API_URL } from '../../../config';
import { Button, Container, Spinner, Alert, Modal } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";
import styles from './ProductDetails.module.scss'
import "react-image-gallery/styles/css/image-gallery.css"

const ProductDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const  {id}  = useParams();
  const user = useSelector((state) => getUser(state));
  const data = useSelector(state => getProductById(state, id));

  const [productQuantity, setProductQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const photos = data.photo.split(' ');
  const images = [];

  const formatPrice = (price) => {
    const formattedPrice = parseFloat(price).toFixed(2);
    return `$${formattedPrice}`;
  };
  
  const formatAlcohol = (alcohol) => {
    const formattedAlcohol = parseFloat(alcohol).toFixed(2);
    return `${formattedAlcohol}%`;
  };

  photos.forEach(photo => {
      images.push({
        original: IMGS_URL + photo,
        thumbnail: IMGS_URL + photo,
      });
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, id]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!productQuantity || productQuantity < 1) {
      setValidationError(
        'Quanttity must be at least 1.',
      );
      return;
    }

    const cartData = {
      productId: id,
      amount: productQuantity,
      
    };

    try {
      const response = await fetch(`${API_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(
          'Something went wrong! Please, try again later.',
        );
      }

      setValidationError(null);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      setValidationError(
        <>
          We apologize, but the item couldn't be added to your Cart.
        </>,
      );
    }
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const goToCart = () => {
    navigate('/cart');
  };


  if (!data) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <Container>
        <div className='min-vh-100 px-4'>
          <h2 className='text-center py-4'>Product details</h2>
          <div className='row py-3'>
            <div className='col-md-6 p-3' >
              <ImageGallery 
                showPlayButton={false} 
                showNav={true}
                showFullscreenButton={false}
                items={images} 
                className={styles.image}
              />
            </div>
            <div className={'col-md-6 p-3'} >
              <h3>{data.title}</h3>
              <p>Origin: {data.origin}</p>
              <p>Color: {data.color}</p>
              <p>Vintage: {data.vintage}</p>
              <p>Varietal: {data.origin}</p> 
              <p>Voltage: {formatAlcohol(data.alcohol)}</p> 
              <p>Content: {data.content}ml</p> 
              <p>Price: {formatPrice(data.price)}</p>
              <p>Description: </p>
              <p>{data.description}</p>
              <Quantity
                title="Quantity"
                onAmountChange={setProductQuantity}
                defaultValue={1}
              />
              {validationError && (
                <Alert variant="danger" className={styles.alert}>
                  {validationError}
                </Alert>
              )}
              <div>
                <Button onClick={handleAddToCart} className='mt-3'>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={closeModal} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <p>Product added to cart.</p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={closeModal} className={styles.button}>
            Stay On Page
          </Button>
          <Button onClick={goToCart} className={styles.button}>
            Go To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      
  );
}
  
export default ProductDetails;