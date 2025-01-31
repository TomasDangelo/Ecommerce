import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import BackgroundImg from '../assets/imagen-bg.jpg'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', backgroundColor: 'pink', marginBottom: '1rem', paddingBottom: '2rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;


/* En caso de poner el bg... :  backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', */