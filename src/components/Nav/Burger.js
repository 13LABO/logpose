import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../../css/burger.css'
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';

class Burger extends React.Component{
  state={
    menuOpen:false,
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  
  closeMenu () {
		ReactGA.event({category:'hamburgerMenu', action:'opened'})
    this.setState({menuOpen: false})
  }
  render(){
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        disableAutoFocus
        width={'15em'}
      >
        <NavLink to="/" className="menu-item" onClick={()=>this.closeMenu()}>トップ</NavLink>
        <NavLink to="/news" className="menu-item" onClick={()=>this.closeMenu()}>ニュース</NavLink>
        <NavLink to="/about" className="menu-item" onClick={()=>this.closeMenu()}><span>Logpose</span>について</NavLink>
      </Menu>
    );
    }
}


export default Burger