import React, { useEffect, useState, useContext } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { updateQuantity,  addToCart} = useContext(CartContext)

    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data.product); 
      } catch (error) {
        console.error('Error obteniendo productos:', error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <Box sx={{display:"flex", flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center',  gap: 2}} margin="20px">
      {products.map(product => (
        <Card key={product._id} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{cursor: "pointer"}} >
          <CardMedia
            component="img"
            height="200"
            image={product.image || '/default-image.jpg'} // Imagen por defecto si no está disponible
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6" textAlign="center">{product.title}</Typography>
            <Button variant="contained" fullWidth="true" sx={{margin: {xs: '10px 0', sm: '10px'}}}>
            <Link to={`/productos/${product._id}`} style={{textDecoration: 'none'}}>
              <Typography variant="body2" style={{color: 'white'}}  >Ver Detalles</Typography>
            </Link>
            </Button>
            <Button variant="contained" fullWidth="true" sx={{margin: {xs: '10px 0', sm: '10px'}}} color='secondary' onClick={() => addToCart({  id: product._id, title: product.title, price: product.price, size: product.size, // Asegura que cualquier propiedad distintiva se pase
  image: product.image})}>
              <Typography variant="body2" style={{color: 'white'}}  >Agregar al carrito</Typography>
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HomePage;
