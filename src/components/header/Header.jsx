import React from 'react';
import { NavBar } from './NavBar';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

 export const Header = () => {
  return (
    
    <header className='header'>
        
        <h1>💻TecnoEuropa💻</h1>
        <NavBar />
        <CartWidget />

        </header>
      
    
      
    
  )
}

export default Header;
