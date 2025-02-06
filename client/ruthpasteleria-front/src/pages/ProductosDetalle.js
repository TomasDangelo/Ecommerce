import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import ProductCard from '../components/ProductCard';  // Importar el componente ProductCard

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [detailView, setDetailView] = useState(true);


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

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const toggleView = () => {
    setDetailView(prev => !prev);
  };
  
  // Mostrar mientras se cargan los detalles
  if (!product) return <h1>Cargando detalles del producto...</h1>;

  // Usamos ProductCard para mostrar los detalles del producto
  return (
    <div  style={{ padding: '20px', display: 'flex',  justifyContent: 'center' }}>
      {/* Pasamos el producto y la función handleAddToCart como prop */}
      <ProductCard  product={product} addToCart={handleAddToCart} toggleView={toggleView} detailView={detailView}/>
    </div>
  );
};

export default ProductDetail;
