import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes.length > 0 ? product.sizes[0] : null);
  
    const handleSizeChange = (event) => {
      const size = product.sizes.find((s) => s.size === event.target.value);
      setSelectedSize(size);
    };
  
    return (
      <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: 250 }}>
        <CardMedia component="img" height="250" image={product.image || '/default-image.jpg'} alt={product.title}/>
        <CardContent>
          <Typography variant="button" textAlign="center">{product.title}</Typography>
          
          {/* Selector de tamaño si el producto tiene variantes */}
          {product.sizes.length > 0 && (
            <>
              <FormControl fullWidth margin='normal'>
                <InputLabel>Tamaño</InputLabel>
                <Select value={selectedSize?.size || ""} onChange={handleSizeChange}>
                  {product.sizes.map((s) => (
                    <MenuItem key={s.size} value={s.size}>
                      {s.size} - ${s.price}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="h6" textAlign="center" sx={{ mt: 1 }}>
                Precio: ${selectedSize?.price || product.sizes[0]?.price}
              </Typography>
            </>
          )}
  
          {/* Botón para ver detalles del producto individualmente */}
          <Button variant="contained" fullWidth sx={{ margin: "10px 0" }}>
            <Link to={`/productos/${product._id}`} style={{ textDecoration: 'none', color: 'white' }}>
              Ver Detalles
            </Link>
          </Button>
  
          {/* Botón para agregar al carrito */}
          <Button variant="contained" fullWidth color="secondary" sx={{ marginBottom: 1 }}onClick={() => addToCart({
              id: product._id, 
              title: product.title, 
              price: selectedSize?.price || product.sizes[0]?.price, 
              size: selectedSize?.size || product.sizes[0]?.size, 
              image: product.image
            })}
          >
            Agregar al carrito
          </Button>
        </CardContent>
      </Card>
    );
  };

export default ProductCard;