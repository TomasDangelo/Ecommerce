import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartTwoTone';
import DescriptionIcon from '@mui/icons-material/DescriptionTwoTone';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ product, addToCart, toggleView, detailView }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes.length > 0 ? product.sizes[0] : null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleSizeChange = (event) => {
        const size = product.sizes.find((s) => s.size === event.target.value);
        setSelectedSize(size);
    };

    const handleImageClick = () => setIsImageOpen(true);
    const handleCloseImage = () => setIsImageOpen(false);

    return (
        <>
            <Card sx={{ boxShadow: 'none', borderRadius: 0, width: 280, '&:hover img': { transform: 'scale(1.05)' } }}>
                <Box sx={{ height: { xs: "180px", sm: "230px", xl: "280px" }, overflow: 'hidden' }}>
                    <LazyLoadImage 
                        src={product.image || '/default-image.jpg'} 
                        alt={product.title} 
                        effect='blur' 
                        width="100%"  
                        height="100%"  
                        style={{ objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} 
                        onClick={handleImageClick} 
                    />
                </Box>
                
                <CardContent sx={{ p: 1, textAlign: 'left' }}>
                    <Typography variant="tenth" sx={{ fontWeight: "bold",  fontSize: { xs: '1rem', md: '1.2rem' } }}>{product.title}</Typography>

                    {product.sizes.length > 0 && (
                        <>
                            <FormControl fullWidth size="small" sx={{mt: '1rem', mb:'0.5rem'}}>
                                <InputLabel>Tamaño</InputLabel>
                                <Select value={selectedSize?.size || ""} onChange={handleSizeChange}>
                                    {product.sizes.map((s) => (
                                        <MenuItem key={s.size} value={s.size}>{s.size} - <Typography variant="tenth" fontWeight="bold" >${s.price}</Typography> </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Typography variant="tenth" fontWeight="bold" sx={{ mt: 1 }}>Precio: ${selectedSize?.price || product.sizes[0]?.price}</Typography>
                        </>
                    )}

                    {detailView && <Box sx={{ mt: 1, mb: 1 }}><Typography variant="tenth" >{product.description}</Typography> </Box> }

                    <Button onClick={toggleView} variant="contained" fullWidth sx={{ display: detailView ? 'none' : 'flex', mt: 1 }}>
                        <DescriptionIcon />  
                        <Link to={`/productos/${product._id}`} style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5rem' }}>Ver Detalles</Link>
                    </Button>

                    <Button variant="contained" fullWidth color="fourth" sx={{ mt: 1 }} onClick={() => addToCart({
                        id: product._id,
                        title: product.title,
                        price: selectedSize?.price || product.sizes[0]?.price,
                        size: selectedSize?.size || product.sizes[0]?.size,
                        image: product.image
                    })}>
                        <ShoppingCartIcon /> Agregar al carrito
                    </Button>

                    {detailView && (
                        <Button variant="contained" fullWidth color="fifth" sx={{ mt: 1 }}>
                            <HomeIcon />
                            <Link to={`/`} style={{ textDecoration: 'none', color: 'black', marginLeft: '0.5rem' }}>Volver a inicio</Link>
                        </Button>
                    )}
                </CardContent>
            </Card>

            <Modal open={isImageOpen} onClose={handleCloseImage} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={product.image || '/default-image.jpg'} alt={product.title} 
                        style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} 
                    />
                </Box>
            </Modal>
        </>
    );
};

export default ProductCard;
