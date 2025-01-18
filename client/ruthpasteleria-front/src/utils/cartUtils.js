import axios from 'axios'

export const addToCart = async (product, dispatch) =>{
    const productToAdd = {
        id: product._id,
        description: product.description,
        image: product.image,
        size: product.size,
        price: product.price,
        quantity: 1
    }
    dispatch({type: 'ADD_TO_CART', payload: productToAdd})
    try {
        const response = await axios.post('http://localhost:5000/api/cart', {product: productToAdd})
        console.log("Producto agregado al carrito exitosamente", response.data);
        
    } catch (error) {
        console.error("Error agregando producto al carrito", error)
    }
}