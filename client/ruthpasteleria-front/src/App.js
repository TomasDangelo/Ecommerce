import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';
import ProductosDetalle from './pages/ProductosDetalle';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'

// Importar otras páginas aquí

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />}/>
          <Route path="/productos/:id" element={<ProductosDetalle />}/>
          <Route path="/contacto" element={<ContactoPage />}/>

        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
