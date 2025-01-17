import React, { useEffect, useState } from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import axios from 'axios';
import chocotorta from '../assets/chocotorta.jpg'
import cookies from '../assets/cookies.jpg'
import alfajor from '../assets/alfajor.jpg'
import postres from '../assets/postre.jpg'



const ProductosPage = () => {
/*   const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/`) // Cambiar el puerto aquí
      .then((response) => {
        console.log(response.data.product); // Verificar la respuesta
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error('Error obteniendo detalles del producto', error);
      });
  }, []); */

  return (
    <Container>
    <Typography variant="h2" component="h4" color="pink" textAlign="center"  gutterBottom>Nuestros Productos</Typography>
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3} margin="20px">

  {/* Producto 1 */}
  <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{ cursor: "pointer" }}>
    <CardMedia component="img" height="200" image={chocotorta} alt="Tortas" />
    <CardContent>
      <Typography variant="h5">Tortas</Typography>
    </CardContent>
  </Card>

  {/* Producto 2 */}
  <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{ cursor: "pointer" }}>
    <CardMedia component="img" height="200" image={alfajor} alt="Alfajores" />
    <CardContent>
      <Typography variant="h5">Alfajores</Typography>
    </CardContent>
  </Card>

  {/* Producto 3 */}
  <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{ cursor: "pointer" }}>
    <CardMedia component="img" height="200" image={cookies} alt="Cookies" />
    <CardContent>
      <Typography variant="h5">Cookies</Typography>
    </CardContent>
  </Card>

  {/* Producto 4 */}
  <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{ cursor: "pointer" }}>
    <CardMedia component="img" height="200" image={postres} alt="Postres individuales" />
    <CardContent>
      <Typography variant="h5">Postres individuales</Typography>
    </CardContent>
  </Card>

  {/* Producto 5 */}
  <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} style={{ cursor: "pointer" }}>
    <CardMedia component="img" height="200" image={'/ruta-de-tu-imagen/catering.jpg'} alt="Catering salado" />
    <CardContent>
      <Typography variant="h5">Catering salado</Typography>
    </CardContent>
  </Card>
</Box>
</Container>
    


  );
};

export default ProductosPage;
