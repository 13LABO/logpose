import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left" >Logpose</Link>
        <NavLink to="/about" className="right" >about us</NavLink>

      </div>
    </nav>
   );
}
 
export default Navbar;