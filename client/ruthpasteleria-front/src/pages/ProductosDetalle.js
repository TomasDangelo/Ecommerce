import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from  'axios'
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    axios.get(`/api/products/${id}`)
    .then(response =>{
        setProduct(response.data)
    })
    .catch(error => {
        console.error("Error obteniendo detalles del producto", error)
    })
  },[id])

  if (!product) return <h1>Cargando detalles del producto...</h1>
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      {/* Muestra más detalles del producto */}
    </div>
  );
}

export default ProductDetail;
