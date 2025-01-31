import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, List, ListItem, TextField, Typography, Box, Paper } from '@mui/material';
import {Link} from 'react-router-dom'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const CartTotal = () => {
    const total = cart.items ? cart.items.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    return (
      <Box sx={{fontWeight: 'bold'}}mb={2}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={{p: 2}}>
      {cart.items && cart.items.length > 0 ? (
        <>
          <Box display="grid" gridTemplateColumns="3fr 2fr 2fr 2fr 3fr" mb={2} alignItems="center" gap={2}>
            <Typography variant="subtitle1">Producto</Typography>
            <Typography variant="subtitle1">Tamaño</Typography>
            <Typography variant="subtitle1">Cantidad</Typography>
            <Typography variant="subtitle1">Precio</Typography>
            <Typography variant="subtitle1">Acciones</Typography>
          </Box>

          <List>
            {cart.items.map(item => (
              <ListItem key={item.id} component={Paper} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
                <Box display="grid" gridTemplateColumns="3fr 2fr 2fr 2fr 3fr" alignItems="center" gap={2}>
                  <Box>
                    <img src={item.image} alt={item.title} style={{ maxHeight: '100px', width: 'auto' }} />
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
                    fullWidth
                  />
                  <Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography>
                  <Box>
                    <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item.id)} style={{ marginRight: '10px' }}>
                      Eliminar
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={clearCart}>
                      Limpiar carrito
                    </Button>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <CartTotal sx={{textAlign: 'center', fontWeight: 'bold'}} />
          <Button variant="contained" color="secondary" component={Link} to={"/orden"}> 
              {/* AGREGAR LINK QUE LLEVE A LA ORDEN --- ----------------  */}
                      Procesar orden
          </Button>
          </Box>
        </>
      ) : (
        <Typography variant="h6">Tu carrito está vacío</Typography>
      )}
    </Box>
  );
};

export default Cart;
