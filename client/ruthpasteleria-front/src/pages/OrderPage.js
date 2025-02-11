import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Grid, ListItem, Typography, Box, Paper, FormControl, InputLabel, Select, MenuItem, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const OrderPage = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmOrder = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleSendOrder = () => {
    setOpenDialog(false)
    if (cart.items.length === 0) return;

    if (!paymentMethod) {
      alert("Por favor, selecciona un método de pago.");
      return;
    }
    const phoneNumber = "5493416236289";
    const orderDetails = cart.items.map(item =>
      ` *${item.title}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join("\n");

    const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const message = `¡Hola! Quisiera realizar un pedido:\n\n${orderDetails}\n\n *Total: $${totalPrice}*\n Método de pago: *${paymentMethod}*\n `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Container sx={{ mt: 4, maxWidth: '800px', textAlign: 'center' }}>
      <Typography sx={{fontSize: {xl: '5rem', md: '4rem', xs: '3.5rem'}}} variant="fourth"   fontWeight="bold" gutterBottom>Su orden:</Typography>
      <Divider sx={{ mb: 3 }} />

      {cart.items.length > 0 ? (
        cart.items.map(item => (
          <ListItem key={item.id} component={Paper} elevation={3} sx={{ mb: 2, p: 2, borderRadius: 2 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography color="secondary" fontWeight="bold">{item.quantity} x</Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="body1">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))
      ) : (
        <Typography variant="h6" color="gray">No hay productos en su orden.</Typography>
      )}

      {cart.items.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" fontWeight="bold">Total: ${total.toFixed(2)}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Importante: La mayoría de los productos se encargan con una anticipación de 3 días. Por favor, consulte disponibilidad en caso de necesitarlos antes.
          </Typography>

          <FormControl fullWidth margin="normal" sx={{ mt: 2 }}>
            <InputLabel id="payment-method-label">Método de pago</InputLabel>
            <Select labelId="payment-method-label" id="payment-method" value={paymentMethod} label="Método de pago" onChange={handlePaymentMethodChange}>
              <MenuItem value="Efectivo">Efectivo</MenuItem>
              <MenuItem value="Transferencia">Transferencia</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
            <Button variant="contained" color="third" onClick={handleConfirmOrder}>
              <Typography variant="button" color="white">Procesar orden</Typography> 
            </Button>
            <Button variant="contained" color="error" onClick={clearCart}>
              Anular orden
            </Button>
          </Box>
        </Box>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar Pedido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea procesar la orden? Una vez enviado, no podrá modificar el pedido.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancelar</Button>
          <Button onClick={handleSendOrder} color="primary" variant="contained">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OrderPage;
