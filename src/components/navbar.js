import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper red darken-3" id="navi">
      <div className="container">
        <Link to="/" className="brand-logo left navi" style={{"fontSize":"2.5rem"}}>Logpose</Link>
        <NavLink to="/about" className="right" >about us</NavLink>

      </div>
    </nav>
   );
}
 
export default Navbar;