import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    // eslint-disable-next-line no-template-curly-in-string
    axios.delete(`/api/cart/${id}`)
    .then(res=>{
        console.log("Producto eliminado de la base de datos")
    })
    .catch(err=>{
        console.error("Error al eliminar producto de la base de datos", err)
      });
    }
  ;

  return (
    <div>
      <Typography variant="h4">Carrito de Compras</Typography>
      <List>
        {cart.items.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Cantidad: ${item.quantity}`} />
            <Button variant="outlined" color="secondary" onClick={() => removeItem(item.id)}>
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;

