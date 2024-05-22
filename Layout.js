import React from 'react';
import MainHeader from './components/Header/main-header';
import Footer from '@/components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
