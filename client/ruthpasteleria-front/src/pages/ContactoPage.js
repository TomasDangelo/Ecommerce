import React from 'react';
import { Typography, Container, Card, CardMedia, CardContent, Box } from '@mui/material';
import whatsappLogo from '../assets/logo-instagram.avif'; // Ruta al logo de WhatsApp
import instagramLogo from '../assets/logo-whatsapp.png'; // Ruta al logo de Instagram
import ruthLogo from "../assets/ruth-logo.jpg"

const ContactoPage = () => {
  return (
    <Container>
      <Card style={{margin:'1rem'}}>
        <CardContent style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', margin:'1rem'}}>
          <CardMedia component="img" style={{ objectFit: 'contain', maxWidth: '300px', height: 'auto', margin:"0 auto" }} image={ruthLogo} alt="logo-ruthpasteleria" />
          <Typography variant="h2" component="h1" gutterBottom>Contactanos</Typography>
          
          <Box display="flex" alignItems="center" marginBottom={2}>
            <img src={whatsappLogo} alt="WhatsApp" style={{ width: '42px', marginRight: '8px' }} />
            <a href="https://www.instagram.com/ruthpasteleria/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
              <Typography variant="body2" color="secondary">Ver en Instagram</Typography>
            </a>
          </Box>

          <Box display="flex" alignItems="center">
            <img src={instagramLogo} alt="Instagram" style={{ width: '42px', marginRight: '8px' }} />
            <a href="https://wa.me/message/XFQJ5E5SZ5QGK1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
              <Typography variant="body2" color="secondary"> Contactar por WhatsApp </Typography>
            </a>
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactoPage;
