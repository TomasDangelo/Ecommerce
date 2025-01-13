import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container style={{ padding: '1rem', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Ruth Pastelería. Todos los derechos reservados.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
