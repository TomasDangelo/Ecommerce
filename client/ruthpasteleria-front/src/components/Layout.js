import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import BackgroundImg from '../assets/imagen-bg.jpg'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', marginBottom: '1rem', paddingBottom: '2rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
