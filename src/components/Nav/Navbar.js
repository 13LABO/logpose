import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="">
      <nav className="nav-wrapper red darken-3" id="navi">
        <div className="container">
          <Link to="/" className="brand-logo navi" style={{"fontSize":"2.5rem","marginLeft":"0.2em"}}>Logpose</Link>
          <ul className="right" >
          <li>
          <Link to="/events">
            <i className="tiny material-icons" style={{"marginTop":"15%"}}>search</i>
          </Link>
          </li>
          </ul>
          

        </div>
      </nav>
    </div>
  );
}

export default Navbar;