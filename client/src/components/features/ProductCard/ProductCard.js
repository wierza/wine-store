import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss'
import { IMGS_URL } from '../../../config';

const ProductCard = ({ id, title, photo, price }) => {
  const formattedPrice = parseFloat(price).toFixed(2);
  const photos = photo.split(' ');

  return (
    <div>
      <Card className={`${styles.card} d-flex my-5 mx-auto rounded`} >
        <div>
          <Card.Img src={IMGS_URL + photos[0]} className={`${styles.img} p-2`} />
        </div>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title className='text-center'>{title}</Card.Title>
          <Card.Text className='text-center'>
            <span>Price:</span>
            <span> $</span>
            <span>{formattedPrice}</span>
          </Card.Text>
          <Link to={`/products/${id}`} >
            <Button className='mt-3'>Show more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;