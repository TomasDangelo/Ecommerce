import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =  useState(true);


    useEffect(()=> {
        const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/products")
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