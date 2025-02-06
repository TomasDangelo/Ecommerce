import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import lemon from '../assets/main.jpg'
const CentralSection = () => {
  return (
    <Box
      sx={{  /* CONTENEDOR FOTO */
        position: 'relative',
        width: '100%',
        height: '80vh', 
        backgroundImage: `url(${lemon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',}}>
      <Box
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.1)', 
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'white', padding: '2rem', maxWidth: { xl: '100%', md: '60%', xs: '90%' },  margin: '0 auto', marginTop: '2rem',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', textWrap: 'nowrap',  fontSize: {xl: '4rem ',md: '3rem', xs: '1.5rem'}, textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px' }}>
            ¡Bienvenidos a Ruth Pastelería!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CentralSection;