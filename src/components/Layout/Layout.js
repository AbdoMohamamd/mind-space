import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <Banner/>
      {children}
      <div className="bg-primary-red"><Footer /></div>
    </div>
  );
};

export default Layout;
