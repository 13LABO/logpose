import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../../css/burger.css'
import { Link, NavLink } from 'react-router-dom';

class Burger extends React.Component{
  state={
    menuOpen:false,
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    //console.log(this.state);
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
        <NavLink to="/" id="home" className="menu-item" onClick={()=>this.closeMenu()}>トップ</NavLink>
        <NavLink to="/top" id="home" className="menu-item" onClick={()=>this.closeMenu()}>新トップ</NavLink>
        <NavLink to="/calendar" id="calendar" className="menu-item" onClick={()=>this.closeMenu()}>カレンダー</NavLink>
        <NavLink to="/about" className="menu-item" onClick={()=>this.closeMenu()}>about</NavLink>
      </Menu>
    );
    }
}


export default Burger