import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// Lazy loading de componentes
const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const SobreMi = lazy(() => import('./pages/SobreMi'));
const ProductosDetalle = lazy(() => import('./pages/ProductosDetalle'));
const CartPage = lazy(() => import('./pages/CartPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const NotFound = lazy(() => import('./pages/NotFound')); // Corrección aquí

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Cargando...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobremi" element={<SobreMi />} />
              <Route path="/productos/:id" element={<ProductosDetalle />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/orden" element={<OrderPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
