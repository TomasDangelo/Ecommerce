import React, {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { CartContext } from '../context/CartContext'; // Importa el hook personalizado

const CartTotal = () => {
  const { total } = useContext(CartContext); 
  
  return (
    <Box sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}>
      <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
    </Box>
  );
};

export default CartTotal;