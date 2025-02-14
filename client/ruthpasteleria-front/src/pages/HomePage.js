import React, { useContext, useState, lazy, Suspense } from 'react';
import { Box, Typography, Alert, Snackbar } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ProductCard = lazy(() => import('../components/ProductCard'));
const CentralSection = lazy(() => import('../components/CentralSection'));
const CategoryFilter = lazy(() => import('../components/CategoryFilter'));

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
      <Suspense fallback={<Typography>Cargando...</Typography>}>
        <CentralSection />
        <CategoryFilter allCategories={allCategories} onCategoryChange={handleCategoryChange} />
      </Suspense>

      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: { xs: '0 16px', sm: '0 24px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography textAlign="left" variant="seventh"  
          sx={{ mt: 2, mb: 2, marginLeft: {xs:'3rem', md: '1.2rem'}, fontSize: { xl: '3.5rem', md: '2.5rem', xs: '2rem' }, width: '100%' }}>
          Nuestros productos
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', width: '100%' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Suspense key={product._id} fallback={<Typography>Cargando...</Typography>}>
                <ProductCard product={product} addToCart={addToCart} hanldeCloseAlert={hanldeCloseAlert} alert={alert} />
              </Suspense>
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
