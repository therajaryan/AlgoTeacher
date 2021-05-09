import { Button, Typography } from '@material-ui/core';
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
  const logout = () => {
    alert("Bye  ")
    localStorage.setItem('login',false);
    window.location.href='/home';
 };

  return (
    // console.log(JSON.parse(localStorage.setO))
    <>
      <Nav>
        <NavLink to='/home' activeStyle>
          <img src={require('../../images/logo.png')} alt='logo' width='100px' height='90px'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/course' activeStyle>
            Learning Path
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {!JSON.parse(localStorage.getItem('login'))? (
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>)  : null}
          {/* {localStorage.getItem('login',false) ? ( */}
            {JSON.parse(localStorage.getItem('login'))? (
          <NavLink to='/blog' activeStyle>
            ALGORITHMS
          </NavLink> ) : null}
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink onClick={()=> logout()}>LogOut</NavBtnLink>
        </NavBtn> */}
        {!JSON.parse(localStorage.getItem('login'))? (
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> ) : <NavBtn><Button style={{color: 'white'}} onClick={()=>logout()}>Log Out</Button></NavBtn> }
      </Nav>
    </>
  );
};  

export default Navbar;
