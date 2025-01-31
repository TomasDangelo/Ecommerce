import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Button, Container, ListItem, TextField, Typography, Box, Paper } from '@mui/material';


const OrderPage = () => {
    const {cart, clearCart} = useContext(CartContext);

  return (
    <Container>
  <Typography variant="h4" sx={{ color: "#FFF" }}>Su orden: </Typography>
  
  {cart.items.length > 0 ? (
    cart.items.map(item => (
      <ListItem 
        key={item.id} 
        component={Paper} 
        style={{ marginBottom: '10px', marginTop: '3rem', border: '1px solid #ddd' }}
      >
        <Box display="grid" gridTemplateColumns="3fr 2fr 2fr 2fr 3fr" alignItems="center" gap={2}>
          <Box>
            <Typography variant="body1">{item.title} </Typography> 
            <Typography>x{item.quantity}</Typography>
            <Typography variant="body1">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
          </Box>

          <Button variant="contained" color="secondary">
            Procesar orden
          </Button>
          <Button variant="contained" color="secondary" onClick={clearCart}>
            Anular orden y limpiar carrito
          </Button>
        </Box>
      </ListItem>
    ))
  ) : (
    <Typography variant="h4" color="#A1A1A1">Orden vacía</Typography>
  )}
</Container>

  )
}

export default OrderPage