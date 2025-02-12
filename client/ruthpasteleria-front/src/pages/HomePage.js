import React, { useContext, useState } from 'react';
import { Box, Typography, Alert, Snackbar } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import CentralSection from '../components/CentralSection';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const { products, loading } = useContext(ProductContext);
  const { addToCart, hanldeCloseAlert, alert } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const allCategories = products ? products.flatMap(product => product.categories).filter((cat, index, self) => self.indexOf(cat) === index) : [];
  
  const handleCategoryChange = (category) => { 
      setSelectedCategory(category);
    };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categories.includes(selectedCategory)) : products;

  if (loading) return <Typography>Cargando productos...</Typography>;

  return (
    <>
      <CentralSection /> {/* Sección de foto central */}
      <CategoryFilter allCategories={allCategories} onCategoryChange={handleCategoryChange} />

      {/* Contenedor principal para título y tarjetas */}
<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: { xs: '0 16px', sm: '0 24px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  
  <Typography  textAlign="left"  variant="nineth"  
    sx={{ mt: 2, mb: 2, marginLeft: {xs:'3rem', md: '1.2rem'}, fontSize: { xl: '3.5rem', md: '2.5rem', xs: '2rem' }, width: '100%' }}>
    Nuestros productos
  </Typography>

  {/* Cards alineadas correctamente */}
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', width: '100%' }}>
    {filteredProducts.length > 0 ? (
      filteredProducts.map(product => (
        <ProductCard key={product._id} product={product} addToCart={addToCart} hanldeCloseAlert={hanldeCloseAlert} alert={alert} />
      ))
    ) : (
      <Typography>No hay productos en esta categoría.</Typography>
    )}
  </Box>

</Box>


      {alert && (
        <Snackbar open={alert !== null} autoHideDuration={3000} onClose={hanldeCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity={alert?.type} onClose={hanldeCloseAlert}>{alert.message}</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default HomePage;
