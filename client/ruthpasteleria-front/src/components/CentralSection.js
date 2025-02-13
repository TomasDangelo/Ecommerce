import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';

const CentralSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "https://res.cloudinary.com/dui1l3g5y/image/upload/f_auto,q_auto/v1739468946/test2_nur2za.jpg"; 

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageLoaded(true);
      }
    });

    observer.observe(document.getElementById('central-section'));
    return () => observer.disconnect();
  }, []);

  return (
    <Box id="central-section"
      sx={{ position: 'relative', width: '100%', height: '80vh',backgroundImage: imageLoaded ? `url(${imageUrl})` : 'none',backgroundSize: 'cover', backgroundPosition: 'center 60%',display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign: 'center', color: '#fff',
      }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'white', padding: '2rem', maxWidth: { xl: '100%', md: '60%', xs: '90%' }, margin: '0 auto', marginTop: '2rem', }}>
      <Typography variant="" sx={{ fontWeight: 'bold', textWrap: 'nowrap', fontSize: { xl: '5rem', md: '4rem', xs: '3rem' },  textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px', marginBottom: '0rem'  }}>  
            Ruth Pastelería
          </Typography>
          <Typography
            variant="" color="primary"  sx={{ fontWeight: 'bold', textWrap: 'nowrap', fontSize: { xl: '3rem', md: '2rem', xs: '1.5rem' },  textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px',            }}>
            By Flor Tomatis
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CentralSection;
