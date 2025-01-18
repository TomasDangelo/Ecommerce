import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Button, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { addToCart } from '../utils/cartUtils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);
  
  // Cargar detalles del producto
  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/products/${id}`)
    .then((response) => {
      setProduct(response.data.product);
    })
    .catch((error) => {
      console.error('Error obteniendo detalles del producto', error);
    });
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, dispatch)
  };
}

  

  // Mostrar mientras se cargan los detalles
  if (!product) return <h1>Cargando detalles del producto...</h1>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6">Precio: ${product.price}</Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;


