import React, { createContext, useReducer, useEffect, useState, useCallback } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
    const items = Array.isArray(state.items) ? state.items : [];
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemExists = items.find(item => item.id === action.payload.id);
            if (itemExists) {
                return {
                    ...state,
                    items: items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...items, { ...action.payload, quantity: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return { ...state, items: items.filter(item => item.id !== action.payload.id) };
        case 'CLEAR_CART':
            return { ...state, items: [] };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: items.map(product =>
                    product.id === action.payload.productId
                        ? { ...product, quantity: action.payload.newQuantity }
                        : product
                ),
            };
        case 'GET_TOTAL':
            return {
                ...state,
                total: items.reduce((total, item) => total + item.price * item.quantity, 0),
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const initialState = { items: [], total: 0 };

    const loadCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                return JSON.parse(storedCart);
            } catch (error) {
                console.error('Error parsing cart from localStorage:', error);
                return { items: [] };
            }
        }
        return { items: [] };
    };

    const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromLocalStorage);

    // Memorizar las funciones para evitar recreaciones innecesarias
    const addToCart = useCallback((product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        setAlert({ type: 'success', message: "Producto agregado al carrito exitosamente!" });
    }, []);

    const removeFromCart = useCallback((productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
    }, []);

    const clearCart = useCallback(() => {
        dispatch({ type: 'CLEAR_CART' });
    }, []);

    const updateQuantity = useCallback((productId, newQuantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, newQuantity } });
    }, []);

    const hanldeCloseAlert = useCallback(() => {
        setAlert(null);
    }, []);



    useEffect(() => {
        if (Array.isArray(state.items)) {
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }, [state]);

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
    }, [state.items]);

    return (
        <CartContext.Provider value={{ cart: state, dispatch, updateQuantity, clearCart, removeFromCart, addToCart, hanldeCloseAlert, alert, total: state.total}}>
            {children}
        </CartContext.Provider>
    );
};
