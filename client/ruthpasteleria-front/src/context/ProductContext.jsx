import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =  useState(true);


    useEffect(()=> {
        const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/products`)
            setProducts(response.data.product)
        } 
        catch (error) {
            console.error('Error obteniendo productos:', error);
        }
        finally{
            setLoading(false);
        }
    }
    fetchProducts();
    }, [])

    return(
        <ProductContext.Provider value={{loading, products}}>
            {children}
        </ProductContext.Provider>
    )

}