import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

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
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3} margin="20px">
      {products.map(product => (
        <Card key={product._id} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{cursor: "pointer"}} >
          <CardMedia
            component="img"
            height="140"
            image={product.image || '/default-image.jpg'} // Imagen por defecto si no está disponible
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Button variant="contained">
            <Link to={`/productos/${product._id}`} style={{textDecoration: 'none'}}>
              <Typography variant="body2" style={{color: 'white'}}  >Ver Detalles</Typography>
            </Link>
            </Button>
            <Button variant="contained" color='secondary'>
            <Link to={`/carrito/${product._id}`} style={{textDecoration: 'none'}}>
              <Typography variant="body2" style={{color: 'white'}}  >Agregar al carrito</Typography>
            </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HomePage;
