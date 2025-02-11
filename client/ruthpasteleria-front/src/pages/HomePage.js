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
      <CategoryFilter allCategories={allCategories} onCategoryChange={handleCategoryChange}/>

      <Typography textAlign="center" variant="h2" color="third" fontWeight="bold" sx={{mt: 1, fontSize:{xl: '5rem', md: '3rem', xs: '2rem'}}}>
        Conocé nuestros productos
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', margin: '20px' }}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} hanldeCloseAlert={hanldeCloseAlert} alert={alert}  />
          ))
        ) : (
          <Typography>No hay productos en esta categoría.</Typography>
        )}
      </Box>
      {alert && (
                <Snackbar open={alert !== null} autoHideDuration={3000} onClose={hanldeCloseAlert} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                  <Alert severity={alert?.type} onClose={hanldeCloseAlert}>{alert.message}</Alert>
                </Snackbar>
            )}
    </>
  );
};

export default HomePage;