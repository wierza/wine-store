import { useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/usersRedux';
import { getProductById } from '../../../redux/productsRedux';
import Quantity from '../../features/Quantity/Quantity'; 
import React from 'react';import { IMGS_URL } from '../../../config';
import { Button, Container } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";
import styles from './ProductDetails.module.scss'
import "react-image-gallery/styles/css/image-gallery.css"

const ProductDetails = () => {


    const user = useSelector((state) => getUser(state));
    const  {id}  = useParams();
    const product = useSelector(state => getProductById(state, id));
    const productId = product.id;
    const photos = product.photo.split(' ');
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


      if (!product) return <Navigate to="/" />;
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
                  <h3>{product.title}</h3>
                  <p>Origin: {product.origin}</p>
                  <p>Color: {product.color}</p>
                  <p>Vintage: {product.vintage}</p>
                  <p>Varietal: {product.origin}</p> 
                  <p>Voltage: {formatAlcohol(product.alcohol)}</p> 
                  <p>Content: {product.content}ml</p> 
                  <p>Price: {formatPrice(product.price)}</p>
                  <p>Description: </p>
                  <p>{product.description}</p>
                  <Quantity />
                  <div>
                    <Button type="submit" className='mt-3'>Add to cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      
    );
  }
  
export default ProductDetails;