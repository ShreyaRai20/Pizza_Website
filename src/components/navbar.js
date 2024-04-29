import React from 'react'
import logo from "../assets/pizzaLogo.png";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@mui/material';
import { useState } from 'react';



function Navbar() {

  const [openLinks,setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  };

  return (
    <div className = "navbar">
      <div className = "leftSide" id ={openLinks ? "open" : "close" }>
        <img src = {logo} alt = "logo"/>
        <div className='hiddenLinks'>
        <Link to = "/">Home</Link>
        <Link to = "/menu">Menu</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        </div>
      </div>
      <div className = "rightSide">
        <Link to = "/">Home</Link>
        <Link to = "/menu">Menu</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Button onClick ={toggleNavbar}>
        <MenuIcon/>
        </Button>

      </div>
    </div>
  )
};

export default Navbar;
