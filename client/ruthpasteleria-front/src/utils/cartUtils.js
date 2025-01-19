export const addToCart = async (product, dispatch) =>{
    if (!product || typeof product != 'object' || !product.id){
        console.error("Estructura invalida de objecto")
        return;
    }
    const productToAdd = {
        id: product._id,
        description: product.description,
        image: product.image,
        size: product.size,
        price: product.price,
        quantity: 1
    }
    dispatch({type: 'ADD_TO_CART', payload: productToAdd})
}