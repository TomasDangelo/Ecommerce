import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';
import ProductosDetalle from './pages/ProductosDetalle';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'
import CartPage from './pages/CartPage';
import NotFound from './pages/CartPage';



// Importar otras páginas aquí

function App() {
  return (
    <ThemeProvider theme={theme} >
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />}/>
          <Route path="/productos/:id" element={<ProductosDetalle />}/>
          <Route path="/contacto" element={<ContactoPage />}/>
          <Route path="/carrito" element={<CartPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
