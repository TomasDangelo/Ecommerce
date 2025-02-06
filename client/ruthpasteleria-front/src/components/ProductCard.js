import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, toggleView, detailView }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes.length > 0 ? product.sizes[0] : null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleSizeChange = (event) => {
      const size = product.sizes.find((s) => s.size === event.target.value);
      setSelectedSize(size);
    };

    const handleImageClick = () => {
      setIsImageOpen(true);
    };

    const handleCloseImage = () => {
      setIsImageOpen(false);
    };

    return (
      <>
        <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: 250 }}>
          <CardMedia
            component="img"
            sx={{ height: { xs: "150px", sm: "200px", xl: "250px" }, cursor: 'pointer' }} // Add cursor pointer
            image={product.image || '/default-image.jpg'}
            alt={product.title}
            onClick={handleImageClick} // Open modal on image click
          />
          <CardContent>
            <Typography variant="h6" textAlign="center" sx={{ fontWeight: "bold" }}>{product.title}</Typography>

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
                {detailView && (
                  <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
                    {product.description}
                  </Typography>
                )}
              </>
            )}

            <Button onClick={toggleView} variant="contained" style={{ display: detailView === true ? 'none' : 'flex' }} fullWidth sx={{ margin: "10px 0" }}>
              <Link to={`/productos/${product._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                Ver Detalles
              </Link>
            </Button>

            <Button variant="contained" fullWidth color="fourth" sx={{ marginBottom: 1 }} onClick={() => addToCart({
              id: product._id,
              title: product.title,
              price: selectedSize?.price || product.sizes[0]?.price,
              size: selectedSize?.size || product.sizes[0]?.size,
              image: product.image
            })}>
              Agregar al carrito
            </Button>
            {detailView && (
              <Button variant="contained" fullWidth color="fifth">
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Volver a inicio</Link>
              </Button>
            )}

          </CardContent>
        </Card>

        <Modal open={isImageOpen} onClose={handleCloseImage} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={product.image || '/default-image.jpg'} alt={product.title} style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto', objectFit: 'contain       ' }}/>
          </Box>
        </Modal>

      </>
    );
  };

export default ProductCard;