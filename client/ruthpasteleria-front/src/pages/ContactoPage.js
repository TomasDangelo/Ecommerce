import React from 'react';
import { Typography, Container, Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ruthLogo from "../assets/ruth-logo.jpg";
import whatsappLogo from '../assets/logo-instagram.avif';
import instagramLogo from '../assets/logo-whatsapp.png';
import pyLogo from '../assets/PedidosYa_logo.png';

const Item = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '&:last-child': { marginBottom: 0 }
}));

const MotionImg = styled(motion.img)({
  width: '50px',
  height: '50px',
  marginRight: '1rem',
  borderRadius: '10%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
});

const ContactoPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', maxWidth: '900px', p: 4, marginTop: '1rem', borderRadius: '1%', backgroundColor: '#ECD2DB' }}>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} 
        style={{ width: isDesktop ? '100%' : '90%', margin: '1rem', borderRadius: '1rem', padding: '2rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: theme.palette.background.paper }}>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.img src={ruthLogo} alt="logo-ruthpasteleria" style={{ maxWidth: '200px', borderRadius: '50%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }} whileHover={{ scale: 1.1 }} />
          <Typography variant="secondary" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: { xl: '5rem', md: '3rem', xs: '2rem' }, mt: 2 }}>Contactanos</Typography>

          {[ 
            { logo: whatsappLogo, text: "Ver en Instagram", link: "https://www.instagram.com/ruthpasteleria/" },
            { logo: instagramLogo, text: "Contactar por WhatsApp", link: "https://wa.me/message/XFQJ5E5SZ5QGK1" },
            { logo: pyLogo, text: "Pedir en PedidosYa", link: "https://www.pedidosya.com.ar/restaurantes/rosario/ruth-pasteleria-856d9f6b-c274-47f9-b449-946733ba3010-menu" }
          ].map(({ logo, text, link }, i) => (
            <Item key={i}>
              <MotionImg src={logo} alt={text} whileHover={{ scale: 1.1 }} />
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>{text}</Typography>
              </a>
            </Item>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactoPage;
