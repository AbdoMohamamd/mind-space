import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
   <NavBar/>
      {children}
  <div className="bg-primary-red"><Footer/></div>
    </div>
  );
};

export default Layout;
