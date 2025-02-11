import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const SobreMi = () => {
  const secondImage = 'https://res.cloudinary.com/dui1l3g5y/image/upload/v1739294442/descarga_um48bj.jpg';

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, textAlign: 'center', backgroundColor: '#f8f8f8' }}>
      <Grid container  sx={{ minHeight: '80vh', display: 'flex' }}>
        
        <Grid item xs={12} md={8} sx={{ backgroundColor: '#F7EBED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ px: 4, py: 6, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="seventh" color="#292325" sx={{fontSize:{md: '2.5rem' , xs: '1.5rem'}}} fontWeight="bold" gutterBottom>
              SOBRE MÍ
            </Typography>
            <Typography variant="eighth" color="text.secondary" sx={{fontSize:{md: '1.2rem' , xs: '1rem'}}} maxWidth="80%" mx="auto">
              Hola! Soy Florencia Tomatis, pastelera profesional y técnica en agroindustria de alimentos. 
              Creé Ruth Pastelería en 2018, y al día de hoy ofrezco tanto opciones dulces como saladas. Me caracterizo por brindar una variedad amplia de productos, y sobre todo, por hacerlo con amor!
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
          <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <img src={secondImage} alt="Ingredientes de calidad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default SobreMi;
