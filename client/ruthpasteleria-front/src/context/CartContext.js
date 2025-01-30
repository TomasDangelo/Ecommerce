import React, { createContext, useReducer, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  const items = Array.isArray(state.items) ? state.items : [];

  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = items.find(item => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...items, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: items.filter(item => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          items: items.map(product =>
            product.id === action.payload.productId
              ? { ...product, quantity: action.payload.newQuantity }
              : product
          ),
        };
      
    default:
      return state;
  }
};


// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const initialState = {
    items: [],
  }

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        return JSON.parse(storedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        return { items: [] }; // Devuelve un estado inicial vacío en caso de error
      }
    }
    return { items: [] }; // Devuelve un estado inicial vacío si no hay nada en localStorage
  };

  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromLocalStorage);

  const addToCart = (product) =>{
    dispatch({type: 'ADD_TO_CART', payload: product})
    alert("Producto agregado al carrito exitosamente")
  }

  const removeFromCart = (productId) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {id: productId}})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const updateQuantity = (productId, newQuantity) => {
    dispatch({type: 'UPDATE_QUANTITY', payload: {productId, newQuantity}})
  }

  useEffect(()=>{
   if(Array.isArray(state.items)) {
    localStorage.setItem('cart', JSON.stringify(state)); // Guardar el carrito en localStorage cada vez que se actualiza
  } 
  }, [state])

  return (
    <CartContext.Provider value={{ cart: state, dispatch, updateQuantity, clearCart, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
