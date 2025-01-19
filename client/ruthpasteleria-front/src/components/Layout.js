import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundImg from '../assets/imagen-bg.jpg'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
