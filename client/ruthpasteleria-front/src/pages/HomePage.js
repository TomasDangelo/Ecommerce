import React from 'react';
import { Typography, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenido a Nuestra Pastelería
      </Typography>
      <Typography variant="body1">
        Descubre nuestras deliciosas creaciones y disfruta de la mejor pastelería en la ciudad.
      </Typography>
    </Container>
  );
};

export default HomePage;
