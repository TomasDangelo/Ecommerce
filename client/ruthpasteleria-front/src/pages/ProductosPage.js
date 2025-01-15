import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import axios from 'axios';

const ProductosPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/`) // Cambiar el puerto aquí
      .then((response) => {
        console.log(response.data.product); // Verificar la respuesta
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error('Error obteniendo detalles del producto', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Nuestros Productos
      </Typography>
      <Typography variant="body1">
        Contamos con una gran variedad de productos frescos elaborados artesanalmente.
      </Typography>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h5">Precio: ${product.price}</Typography>
              <Typography variant="h5">Tamaño: {product.size}</Typography>
              <Typography variant="h5">Color: {product.color}</Typography>
            </div>
          ))
        ) : (
          <Typography>No hay productos disponibles.</Typography>
        )}
      </div>
    </Container>
  );
};

export default ProductosPage;
