import React, { useContext, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Alert, Snackbar } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import CentralSection from '../components/CentralSection';

const HomePage = () => {
  const { products, loading } = useContext(ProductContext);
  const { addToCart, hanldeCloseAlert, alert } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Obtener todas las categorías únicas de todos los productos
  const allCategories = products
    ? products.flatMap(product => product.categories).filter((cat, index, self) => self.indexOf(cat) === index) : [];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categories.includes(selectedCategory))
    : products;

  if (loading) return <Typography>Cargando productos...</Typography>;

  return (
    <>
      <CentralSection />

      <FormControl sx={{ mt: 2, mb: 2, width: '15rem', mx: 1 }}>
        <InputLabel id="category-label">Categoría</InputLabel>
        <Select labelId="category-label" id="category-select" value={selectedCategory} label="Categoría" onChange={handleCategoryChange}>
          <MenuItem value="">Todas</MenuItem>
          {allCategories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography textAlign="center" variant="h2" color="fourth" sx={{mt: 1, fontSize:{xl: '5rem', md: '2rem', xs: '1rem'}}}>
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