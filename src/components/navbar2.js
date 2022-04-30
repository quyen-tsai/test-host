import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from '../home_page/NavElements.js';
  
const Navbar2 = () => {
  return (
    <>
      <Nav>
        <Bars />
        <Logo>Quiztivity</Logo>
        <NavMenu>
          <NavLink to='/Home2' activestyle ="true">
            Home
          </NavLink>
          <NavLink to='/Math'  activestyle ="true">
            Math
          </NavLink>
          <NavLink to='/physics'  activestyle ="true">
            Physics
          </NavLink>
          <NavLink to='/Chemistry'  activestyle ="true">
            Chemistry
          </NavLink>
          <NavLink to='/Computer Science'  activestyle ="true">
            Computer Science
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar2;