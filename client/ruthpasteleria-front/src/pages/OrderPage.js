import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Grid, ListItem, Typography, Box, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const OrderPage = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState(''); // Estado para el método de pago

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSendOrder = () => {
    if (cart.items.length === 0) return;

    if (!paymentMethod) { // Validación: si no se selecciona método de pago
      alert("Por favor, selecciona un método de pago.");
      return;
    }

    const phoneNumber = "5493416236289";
    const orderDetails = cart.items.map(item =>
      ` *${item.title}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join("\n");

    const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const message = `¡Hola! Quisiera realizar un pedido:\n\n${orderDetails}\n\n *Total: $${totalPrice}*\n Método de pago: *${paymentMethod}*\n `; // Incluimos el método de pago

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Container sx={{mt: 2}}>
      <Typography variant="h2" fontSize="5rem">Su orden:</Typography>

      {cart.items.length > 0 ? (
    cart.items.map(item => (
        <ListItem key={item.id} component={Paper} style={{ marginBottom: '10px', marginTop: '3rem', border: '1px solid #ddd' }}>
            <Grid container alignItems="center" spacing={10}> {/* Usamos Grid container */}
                <Grid item xs={12} sm={6} md={4}> {/* Columna para el título */}
                    <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={2}> {/* Columna para la cantidad */}
                    <Typography color="secondary" fontWeight="bold">{item.quantity} x</Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={2}> {/* Columna para el precio */}
                    <Typography variant="body1">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
                </Grid>
            </Grid>
        </ListItem>
    ))
) : (
    <Typography variant="h4" color="#A1A1A1">No hay productos en su orden.</Typography>
)}

      {/* Selección de método de pago */}
      <Box sx={{display: cart.items.length <= 0? 'none' : 'flex', flexDirection: 'column'}}>
      <Box sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}> 
            <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
            <Typography variant="h6">Importante: La mayoría de los productos se encargan con una anticipación de  3 días. Por favor, consulte disponibilidad en caso de necesitarlos antes.</Typography>
      </Box>
      <FormControl fullWidth margin="normal" >
        <InputLabel id="payment-method-label">Método de pago</InputLabel>
        <Select labelId="payment-method-label" id="payment-method" value={paymentMethod} label="Método de pago" onChange={handlePaymentMethodChange}>
          <MenuItem value="Efectivo">Efectivo</MenuItem>
          <MenuItem value="Transferencia">Transferencia</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <Box sx={{ display: cart.items.length <= 0? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', mt: 2 }}> {/* Añadido margen superior */}
        <Button variant="contained" color="third" onClick={handleSendOrder}>
         <Typography color="white" variant="button">Procesar orden</Typography> 
        </Button>
        <Button variant="contained" color="secondary" onClick={clearCart}>
         <Typography color="white" variant="button">Anular orden</Typography> 
        </Button>
      </Box>
    </Container>
  );
};

export default OrderPage;