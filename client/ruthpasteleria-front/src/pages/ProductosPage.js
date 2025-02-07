import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import chocotorta from '../assets/chocotorta.jpg';
import cookies from '../assets/cookies.jpg';
import alfajor from '../assets/alfajor.jpg';
import postres from '../assets/postre.jpg';

const productos = [
  { id: 1, nombre: 'Tortas', imagen: chocotorta },
  { id: 2, nombre: 'Alfajores', imagen: alfajor },
  { id: 3, nombre: 'Cookies', imagen: cookies },
  { id: 4, nombre: 'Postres individuales', imagen: postres },
];

const ProductosPage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h2" color="primary" component={motion.h1} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} gutterBottom>
          Nuestros productos
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {productos.map((producto) => (
          <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
                <CardMedia component="img" height="290" image={producto.imagen} alt={producto.nombre} />
                <CardContent>
                  <Typography variant="h5" textAlign="center">{producto.nombre}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductosPage;
