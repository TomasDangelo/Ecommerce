import {React, useEffect, useState} from 'react';
import { Box,  Card, CardMedia, CardContent, Typography } from '@mui/material';
import axios from "axios"
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async() =>{
        try {
          const response = await axios.get('/api/products')
          setProducts(response.data)
        } catch (error) {
          console.error("Error obteniendo productos:", error)
        }
    }
    fetchProducts()
  }, [])


  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3}>
  {products.map(product => (
    <Card key={product._id}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Link to={`/productos/${product._id}`}>Ver Detalles</Link>
      </CardContent>
    </Card>
  ))}
</Box>
  );
};

export default HomePage;
