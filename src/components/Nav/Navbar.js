import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="navbar-fixed">
      <nav className="nav-wrapper red darken-3" id="navi">
        <div className="container">
          <Link to="/" className="brand-logo navi" style={{"fontSize":"2.5rem","marginLeft":"0.2em"}}>Logpose</Link>
          <ul className="right" >
          <li>
          <NavLink to="/events">
            <i className="tiny material-icons" style={{"marginTop":"15%"}}>search</i>
          </NavLink>
          </li>
          </ul>
          

        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;