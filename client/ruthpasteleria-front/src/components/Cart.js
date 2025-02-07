import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, List, ListItem, TextField, Typography, Box, Paper, styled, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const CartTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  background: `rgba(244, 135, 129, 0.78)`, 
  color: theme.palette.common.white,
  borderRadius: '0.5rem',
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[2],
}));

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const CartTotal = () => {
    const total = cart.items ? cart.items.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    return (
      <Box sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}> {/* Centered text */}
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <CartTitle>
        <Typography variant="third" fontWeight="bold" fontSize="2.5rem" >Carrito de compras</Typography>
      </CartTitle>

      {cart.items && cart.items.length > 0 ? (
        <Box sx={{ width: isMobile ? '95%' : '70%', maxWidth: '900px' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : '2fr 1fr 1fr 1fr 1fr', mb: 2, alignItems: 'center', gap: 2, borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
            <Typography variant="subtitle1" fontWeight="bold">Producto</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Tamaño</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Cant.</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Precio</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Acciones</Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {cart.items.map(item => (
              <ListItem key={item.id} component={Paper} elevation={2} sx={{ mb: 2, p: 2, borderRadius: 1, border: 'none' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : '2fr 1fr 1fr 1fr 1fr', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item.image} alt={item.title} style={{ maxHeight: '80px', width: 'auto', marginRight: '1rem' }} />
                    <Typography variant="body1">{item.title}</Typography>
                  </Box>
                  <Typography variant="body1">{item.size}</Typography>
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    variant="outlined"
                    size="small"
                    inputProps={{ min: 1 }}
                    sx={{ width: '60px' }}
                  />
                  <Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="contained" color="error" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                    <Button variant="contained" color="primary" onClick={clearCart}>
                      Limpiar carrito
                    </Button>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> {/* Centered content */}
            <CartTotal />
            <Button variant="contained" color="secondary" component={Link} to={"/orden"} sx={{ mt: 2 }}>
              Procesar orden
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>Tu carrito está vacío</Typography> 
      )}
    </Box>
  );
};

export default Cart;