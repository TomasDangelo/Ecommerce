import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import instagramLogo from '../assets/logo-whatsapp.png';
import pyLogo from '../assets/PedidosYa_logo.png';
import whatsappLogo from '../assets/logo-instagram.avif';

const Footer = () => {
  return (
    <footer>
      <Container style={{ padding: '1rem', marginTop: '1rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body2" color="textSecondary" style={{marginRight: '1rem'}}>
          &copy; {new Date().getFullYear()} Ruth Pastelería. Todos los derechos reservados.
        </Typography>

        <a href="https://www.instagram.com/ruthpasteleria/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}> {/* Contenedor flex para alinear imagen y texto (si lo añades) */}
          <motion.img src={whatsappLogo} alt="WhatsApp" style={{ width: '25px', height: '25px', marginRight: '0.5rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
        </a>

        <a href="https://wa.me/message/XFQJ5E5SZ5QGK1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <motion.img src={instagramLogo} alt="Instagram" style={{ width: '25px', height: '25px', marginRight: '0.5rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
        </a>

        <a href="https://www.pedidosya.com.ar/restaurantes/rosario/ruth-pasteleria-856d9f6b-c274-47f9-b449-946733ba3010-menu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <motion.img src={pyLogo} alt="PedidosYa" style={{ width: '23px', height: '23px', marginRight: '0.5rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
        </a>

      </Container>
    </footer>
  );
};

export default Footer;