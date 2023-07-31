// import Home from '../Home';
// import About from '../About';
// import Contact from '../Contact';
import { Link, NavLink, Outlet} from 'react-router-dom'
import './index.scss';
import Logo from '../../assets/images/madebyandrew.png';
import React from 'react';
import {Drawer, Box, Typography, IconButton} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'


const Layout = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return ( 
    <div className='App'>
            <div className='header'>
                <IconButton fontSize = '4.5rem' edge = 'start' color = "inherit" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
                    <MenuIcon/>
                </IconButton>
                <a
                        href="https://www.instagram.com/madebyandrrew/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faInstagram}
                        // color="#4d4d4e"
                        className="anchor-icon"
                        />
                    </a>
                <Link className='logo' to = '/Home'></Link>
                <img src={Logo} alt='logo'/>
                <Drawer anchor="top" open = {isDrawerOpen} onClose = {()=> setIsDrawerOpen(false)}  >
                        <Box height = "200px" width = "" textAlign = "center" role="presentation" textDecoration ="none">
                            <Typography variant = 'h6' component='div' className='list'>
                                <nav>
                                    <NavLink 
                                        exact = "true" 
                                        activeclassname="active" 
                                        to="/">
                                        <p>Home</p>
                                    </NavLink>
                                    <NavLink 
                                        exact = "true" 
                                        activeclassname="active"
                                        className = "about-link" 
                                        to="/About">
                                        <p>About</p>
                                    </NavLink>
                                    <NavLink
                                         exact = "true" 
                                         activeclassname="active" 
                                         className = "contact-link"
                                         to="/Contact">
                                        <p>Contact</p>
                                    </NavLink>
                                </nav>
                            </Typography>
                        </Box>
                </Drawer>
                </div>    

                <Outlet/>
    </div>
    )

} 

export default Layout;