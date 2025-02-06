import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, ListItem, Typography, Box, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const OrderPage = () => {
  const { cart, clearCart } = useContext(CartContext);
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
      `🛒 *${item.title}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join("\n");

    const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const message = `¡Hola! Quisiera realizar un pedido:\n\n${orderDetails}\n\n💰 *Total: $${totalPrice}*\n📍 Método de pago: *${paymentMethod}*\n📍 Método de entrega: `; // Incluimos el método de pago

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Container>
      <Typography variant="h4">Su orden:</Typography>

      {cart.items.length > 0 ? (
        cart.items.map(item => (
          <ListItem key={item.id} component={Paper} style={{ marginBottom: '10px', marginTop: '3rem', border: '1px solid #ddd' }}>
            <Box display="grid" gridTemplateColumns="3fr 2fr 2fr 2fr 3fr" alignItems="center" gap={2}> {/* Ajustado gridTemplateColumns */}
              <Box>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography>x{item.quantity}</Typography>
                <Typography variant="body1">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
              </Box>
            </Box>
          </ListItem>
        ))
      ) : (
        <Typography variant="h4" color="#A1A1A1">Orden vacía</Typography>
      )}

      {/* Selección de método de pago */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="payment-method-label">Método de pago</InputLabel>
        <Select labelId="payment-method-label" id="payment-method" value={paymentMethod} label="Método de pago" onChange={handlePaymentMethodChange}>
          <MenuItem value="Efectivo">Efectivo</MenuItem>
          <MenuItem value="Transferencia">Transferencia</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', mt: 2 }}> {/* Añadido margen superior */}
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