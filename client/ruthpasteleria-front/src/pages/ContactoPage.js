import React from 'react';
import { Typography, Container, Box, styled, useMediaQuery, useTheme } from '@mui/material';
import whatsappLogo from '../assets/logo-instagram.avif';
import instagramLogo from '../assets/logo-whatsapp.png';
import ruthLogo from "../assets/ruth-logo.jpg";
import pyLogo from '../assets/PedidosYa_logo.png';
import { motion } from 'framer-motion';

const Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '&:last-child': { marginBottom: 0 }
}));

const ContactoPage = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 64px)',
            maxWidth: '900px',
            padding: 4
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{  
                    width: isDesktop ? '100%' : '90%', 
                    margin: '1rem',
                    borderRadius: '1rem',
                    padding: '2rem', 
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: theme.palette.background.paper 

                }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> {/* Contenedor para el contenido */}
                    <motion.img
                        src={ruthLogo}
                        alt="logo-ruthpasteleria"
                        style={{
                            objectFit: 'contain',
                            maxWidth: '200px',
                            height: 'auto',
                            marginBottom: 3,
                            borderRadius: '50%',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': { transform: 'scale(1.1)' },
                        }}
                        whileHover={{ scale: 1.1 }}
                    />
                    <Typography variant="secondary" color="primary" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xl: '5rem', md: '3rem', xs: '2rem' } }}>Contactanos</Typography>

                    <Item>
                        <motion.img src={whatsappLogo} alt="WhatsApp" style={{ width: '50px', height: '50px', marginRight: '1rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
                        <a href="https://www.instagram.com/ruthpasteleria/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body1" color="text.primary" sx={{ fontWeight: "500" }}>Ver en Instagram</Typography>
                        </a>
                    </Item>

                    <Item>
                        <motion.img src={instagramLogo} alt="Instagram" style={{ width: '50px', height: '50px', marginRight: '1rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
                        <a href="https://wa.me/message/XFQJ5E5SZ5QGK1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body1" color="text.primary" sx={{ fontWeight: "500" }}>Contactar por WhatsApp</Typography>
                        </a>
                    </Item>

                    <Item>
                        <motion.img src={pyLogo} alt="PedidosYa" style={{ width: '45px', height: '45px', marginRight: '1rem', borderRadius: '10%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
                        <a href="https://www.pedidosya.com.ar/restaurantes/rosario/ruth-pasteleria-856d9f6b-c274-47f9-b449-946733ba3010-menu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body1" color="text.primary" sx={{ fontWeight: "500" }}>Pedir en PedidosYa</Typography>
                        </a>
                    </Item>
                </Box>
            </motion.div>
        </Container>
    );
};

export default ContactoPage;