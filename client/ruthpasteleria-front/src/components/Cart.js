import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button,  List, ListItem, ListItemText, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });

    axios.delete(`http://localhost:5000/api/cart/${id}`)
    .then(res=>{
        console.log("Producto eliminado de la base de datos")
    })
    .catch(err=>{
        console.error("Error al eliminar producto de la base de datos", err)
      });
}

const handleUpdateQuantity = (productId, newQuantity) =>{
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, newQuantity } });
    axios.put(`/api/cart/${productId}`, { quantity: newQuantity })
   .then(res=>{console.log("Cantidad actualizada en la base de datos exitosamente")})
   .catch(err=>{console.error("Error al actualizar la cantidad del producto", err)});
   }

const CartTotal = () => {
  const {cart} = useContext(CartContext)
  const total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <Box fontWeight="fontWeightBold" mb={2}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
    </Box>
  );
}

  return (
    <div>

      <List>
        {cart.items.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Cantidad: ${item.quantity}`} />
            <TextField type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
              variant="outlined" size="small" style={{ marginRight: 10 }}/>
            <Button variant="outlined" color="secondary" onClick={() => removeItem(item.id)}>
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
      <CartTotal />
    </div>
  );
};

export default Cart;

