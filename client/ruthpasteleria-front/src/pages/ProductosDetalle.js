import { React, useState, useEffect, useContext, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { Typography } from '@mui/material';

const ProductCard = lazy(()=> import('../components/ProductCard'))  
const API_URL = process.env.REACT_APP_API_URL;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [detailView, setDetailView] = useState(true);
  // Cargar detalles del producto
  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error('Error obteniendo detalles del producto', error);
      });
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const toggleView = () => {
    setDetailView(prev => !prev);
  };
  
  if (!product) return <h1>Cargando detalles del producto...</h1>;

  // Usamos ProductCard para mostrar los detalles del producto
  return (
    <Suspense fallback={<Typography>Cargando...</Typography>}>

    <div  style={{ padding: '20px', display: 'flex',  justifyContent: 'center' }}>
      <ProductCard  product={product} addToCart={handleAddToCart} toggleView={toggleView} detailView={detailView}/>
    </div>
    </Suspense>
  );
};

export default ProductDetail;
