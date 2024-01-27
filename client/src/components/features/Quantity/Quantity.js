import React, { useState, useEffect } from 'react';
import { Button, FormControl, Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Quantity = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        onQuantityChange(quantity);
      }, [quantity, onQuantityChange]);

    const decQuantity = e => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    }
    
    const incQuantity = e => {
        if (quantity < 50) {
          setQuantity(quantity + 1);
        } else if (quantity > 50) {
          setQuantity(50);
        }
    }

    return (
        <Row>
            <Col xs={12}>
                <Button
                    onClick={decQuantity}
                    disabled={quantity <= 1}
                    className={styles.btn}
                >
                -
                 </Button>
                <FormControl
                    type="number"
                    value={quantity}
                    readOnly
                    className={styles.form}
                />
                <Button
                    onClick={incQuantity}
                    disabled={quantity >= 50}
                    className={styles.btn}
                >
                +
                </Button>
            </Col>
        </Row>
    )
    
}


export default Quantity;