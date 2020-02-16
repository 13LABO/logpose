import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper red darken-3" id="navi">
      <div className="container">
        <Link to="/" className="brand-logo left navi" style={{"fontSize":"2.5rem","marginLeft":"0.2em"}}>Logpose</Link>
        <ul className="right" >
        <li>
        <NavLink to="/about" activeStyle={{"borderBottom":"3px solid #ccc"}}>
          <span style={{"display":"inline-block","transform":"translateY(5px)"}}>about us</span>
        </NavLink>
        </li>
        </ul>
        

      </div>
    </nav>
   );
}
 
export default Navbar;