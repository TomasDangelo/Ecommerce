import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Button, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  // Cargar detalles del producto
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error('Error obteniendo detalles del producto', error);
      });
  }, [id]);

  // Agregar al carrito
  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,  // Se puede modificar según la lógica
      };
  
      // Dispatch para actualizar el estado del carrito en el contexto
      dispatch({ type: 'ADD_TO_CART', payload: productToAdd });
  
      // Axios post request para agregar el producto al carrito en el backend
      axios.post('http://localhost:5000/api/cart', { product })
        .then(res => {
          console.log('Producto agregado al carrito:', res.data);
        })
        .catch(error => {
          console.error('Error agregando producto al carrito:', error);
        });
    }
  };
  

  // Mostrar mientras se cargan los detalles
  if (!product) return <h1>Cargando detalles del producto...</h1>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6">Precio: ${product.price}</Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
