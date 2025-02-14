import React from 'react';
import { Box, useMediaQuery, useTheme, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ruthLogo from "../assets/ruth-logo.jpg";
import instagramLogo from '../assets/Instagram-png.png';
import whatsappLogo from '../assets/logo-whatsapp.png';
import pyLogo from '../assets/PedidosYa_logo.png';
import emailLogo from '../assets/email.jpg';

const contacts = [
  { logo: whatsappLogo, text: "WhatsApp", link: "https://wa.me/message/XFQJ5E5SZ5QGK1" },
  { logo: instagramLogo, text: "Instagram", link: "https://www.instagram.com/ruthpasteleria/" },
  { logo: pyLogo, text: "Pedir en PedidosYa", link: "https://www.pedidosya.com.ar/restaurantes/rosario/ruth-pasteleria-856d9f6b-c274-47f9-b449-946733ba3010-menu" },
  { logo: emailLogo, text: "Email", link: "mailto:ruth.pasteleriartesanal@gmail.com" }
];

const ContactoPage = () => {
  const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', 
    background: 'url(https://previews.123rf.com/images/torriphoto/torriphoto1603/torriphoto160300042/53527623-patr%C3%B3n-sin-fisuras-con-los-dulces-y-pasteler%C3%ADa-linerl-magdalena-macarrones-torta-helado.jpg) center/cover no-repeat ', p: '4rem 2rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 2, boxShadow: 3 }}>
        <motion.img src={ruthLogo} alt="logo-ruthpasteleria" style={{ maxWidth: 180, borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.33)', marginBottom: 16 }} whileHover={{ scale: 1.1 }} />
        <Typography variant="tenth" color="initial" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>Contactanos!</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)', gap: 1, width: '100%' }}>
          {contacts.map(({ logo, text, link }, i) => (
            <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, border:'none',  textAlign: 'center', bgcolor: 'rgba(255, 247, 247, 0)' }}>
              <Button href={link} target="_blank">
                <motion.img src={logo} alt={text} style={{ width: 60, height: 60, marginBottom: 4, borderRadius: '10%', objectFit: 'cover' }} whileHover={{ scale: 1.1 }} />
              </Button>
              <Button href={link} target="_blank" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '1rem', color: 'black', '&:hover': { textDecoration: 'underline' } }}>{text}</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactoPage;
