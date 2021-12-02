import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/Home' activeStyle>
         
          </NavLink>
          <NavLink to='/Watchlist' activeStyle>
       Momentum
          </NavLink>
          <NavLink to='/Portfolio' activeStyle>
           Scanner 2
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            52 Week
          </NavLink>
          <NavLink to='/about' activeStyle>
            Watchlist
          </NavLink>
          <NavLink to='/MostActive' activeStyle>
            MostActive
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
