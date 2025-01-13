import React from 'react';
import { Typography, Container } from '@mui/material';

const ProductosPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Nuestros Productos
      </Typography>
      <Typography variant="body1">
        Aquí encontrarás una variedad de productos frescos y deliciosos.
      </Typography>
    </Container>
  );
};

export default ProductosPage;
