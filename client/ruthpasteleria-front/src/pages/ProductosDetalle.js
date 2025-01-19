import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
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
    <Box 
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    p: 2,
  }}
>
  <Card sx={{ width: '100%', maxWidth: 450 }}>
    <CardMedia 
      component="img" 
      image={product.image || '/default-image.jpg'} 
      alt={product.title}
      sx={{
        height: 'auto',
        maxHeight: '400px',
        width: '100%',
        objectFit: 'cover', // Mantiene las proporciones de la imagen y recorta si es necesario
        objectPosition: 'center',
      }}
    />
    <CardContent>
      <Typography variant="h5" gutterBottom>{product.title}</Typography>
      <Typography variant="body1" gutterBottom>{product.description}</Typography>
      <Typography variant="h6" gutterBottom>Precio: ${product.price}</Typography>
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
    </CardContent>
  </Card>
</Box>

  );
};

export default ProductDetail;


