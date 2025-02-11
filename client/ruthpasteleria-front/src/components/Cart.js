import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, List, ListItem, TextField, Typography, Box, Paper, useMediaQuery, useTheme, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQuantity, clearCart, total } = useContext(CartContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <Typography variant="fourth" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', fontSize: {xl: '5rem', md: '4rem', xs: '3.5rem'}}}>Carrito</Typography>

      {cart.items && cart.items.length > 0 ? (
        <Grid container spacing={2} sx={{ width: isMobile ? '100%' : '70%', maxWidth: '900px' }}>
          <Grid item xs={12}>
            <List sx={{ p: 0 }}>
              {cart.items.map(item => (
                <ListItem key={item.id} component={Paper} elevation={2} sx={{ mb: 2, p: 2, borderRadius: 1, border: 'none', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                      <img src={item.image} alt={item.title} style={{ maxHeight: '80px', maxWidth: '80px', marginRight: '1rem', objectFit: 'contain' }} />
                      <Typography variant="body1" textAlign={isMobile ? 'center' : 'left'}>{item.title}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={2}><Typography variant="body1" textAlign="center">{item.size}</Typography></Grid>
                    <Grid item xs={6} sm={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        variant="outlined"
                        size="small"
                        inputProps={{ min: 1 }}
                        sx={{ width: '60px' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} textAlign="center">
                      <Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold">Total: ${total.toFixed(2)}</Typography>
            <Box sx={{ display: 'flex', gap: '1rem', mt: 2 }}>
              <Button variant="contained" color="third" sx={{color: 'white'}} component={Link} to="/orden">Procesar orden</Button>
              <Button variant="contained" color="error" onClick={clearCart}>Limpiar carrito</Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>Tu carrito está vacío</Typography>
      )}
    </Box>
  );
};

export default Cart;
