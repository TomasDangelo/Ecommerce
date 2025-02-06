import React, { useContext, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import CentralSection from '../components/CentralSection';

const HomePage = () => {
  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
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
      <Typography textAlign="center" variant="h4" color="initial" sx={{mt: 2}}>
        Conoce nuestros productos!
      </Typography>

      <FormControl sx={{ mt: 2, mb: 2, width: '200px', mx: 'auto' }}>
        <InputLabel id="category-label">Filtrar por categoría</InputLabel>
        <Select labelId="category-label" id="category-select" value={selectedCategory} label="Categoría" onChange={handleCategoryChange}
        >
          <MenuItem value="">Todas</MenuItem>
          {allCategories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', margin: '20px' }}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <Typography>No hay productos en esta categoría.</Typography>
        )}
      </Box>
    </>
  );
};

export default HomePage;