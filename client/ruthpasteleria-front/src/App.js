import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';

// Importar otras páginas aquí

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />}/>
          <Route path="/contacto" element={<ContactoPage />}/>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
