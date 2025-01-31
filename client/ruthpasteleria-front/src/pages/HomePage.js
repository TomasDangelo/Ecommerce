import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  if (loading) return <Typography>Cargando productos...</Typography>;

  return (
    <>
 <Box
      sx={{
display: "flex",
justifyContent: "center",
alignItems: "center",
textAlign: "center",
background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", // Gradiente suave
color: "white",
padding: "2rem",
borderRadius: "20px",
boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
maxWidth: {xl: "50%", md: "40%", xs: "35%"},
margin: "0 auto ",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)", // Sombra para mejor visibilidad
          letterSpacing: "2px",
        }}
      >
        ¡Bienvenidos a Ruth Pastelería!
      </Typography>
    </Box>
  );
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", margin: "20px" }}>
      {products.map(product => (
        <ProductCard key={product._id} product={product} addToCart={addToCart} />
      ))}
    </Box>
    </>
  );
};



export default HomePage;