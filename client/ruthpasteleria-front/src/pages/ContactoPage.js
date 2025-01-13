import React from 'react';
import { Typography, Container } from '@mui/material';

const ContactoPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1">
        ¿Tienes alguna pregunta? No dudes en enviarnos un mensaje o visitarnos en nuestras redes sociales.
      </Typography>
    </Container>
  );
};

export default ContactoPage;
