import React, { createContext, useReducer, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (action.payload.stock < action.payload.quantity){
        alert("Stock insuficiente")
        return state;
      }
      if (itemExists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'UPDATE_QUANTITY':
      return state.map(product =>
        product.id === action.payload.productId? { ...product, quantity: action.payload.newQuantity } : product
      );
      
    default:
      return state;
  }
};


// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart'); // Intentar cargar el carrito desde localStorage si existe
    return storedCart ? JSON.parse(storedCart) : {items: []};
  }
  const [state, dispatch] = useReducer(cartReducer, loadCartFromLocalStorage);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(state)); // Guardar el carrito en localStorage cada vez que se actualiza
  }, [state])

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
