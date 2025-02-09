import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, List, ListItem, TextField, Typography, Box, Paper, useMediaQuery, useTheme, Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useContext(CartContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>Carrito de compras</Typography>

      {cart.items && cart.items.length > 0 ? (
        <Grid container spacing={2} sx={{ width: isMobile ? '95%' : '70%', maxWidth: '900px' }}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" sx={{ borderBottom: '1px solid #ddd', pb: 1 }}>
              <Grid item xs={3}><Typography variant="subtitle1" fontWeight="bold">Producto</Typography></Grid>
              <Grid item xs={2}><Typography variant="subtitle1" fontWeight="bold">Tamaño</Typography></Grid>
              <Grid item xs={2}><Typography variant="subtitle1" fontWeight="bold">Cant.</Typography></Grid>
              <Grid item xs={2}><Typography variant="subtitle1" fontWeight="bold">Precio</Typography></Grid>
              <Grid item xs={3} sx={{ textAlign: 'right' }}><Typography variant="subtitle1" fontWeight="bold">Acciones</Typography></Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <List sx={{ p: 0 }}>
              {cart.items.map(item => (
                <ListItem key={item.id} component={Paper} elevation={2} sx={{ mb: 2, p: 2, borderRadius: 1, border: 'none' }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.image} alt={item.title} style={{ maxHeight: '80px', maxWidth: '80px', marginRight: '1rem', objectFit: 'contain' }} />
                      <Typography variant="body1">{item.title}</Typography>
                    </Grid>
                    <Grid item xs={2}><Typography variant="body1">{item.size}</Typography></Grid>
                    <Grid item xs={2}>
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
                    <Grid item xs={2}><Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography></Grid>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="contained" color="error" onClick={() => removeFromCart(item.id)}>
                        Eliminar
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}>
              <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem', mt: 2 }}>
              <Button variant="contained" color="error" onClick={clearCart}>
                Limpiar carrito
              </Button>
              <Button variant="contained" color="third" component={Link} to="/orden">
                Procesar orden
              </Button>
              <Button variant="contained" color="fifth" component={Link} to="/">
                Volver a inicio  <HomeIcon />
              </Button>
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