import {React, useEffect, useState} from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
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
    <Container>
      <Typography variant="h4" gutterBottom>
        Productos de Pastelería
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Link to={`/productos/${product._id}`}>Ver Detalles</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
