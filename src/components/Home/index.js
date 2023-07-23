import { blueGrey, green, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
import imgx from '../../assets/images/imgx.png';
import * as ALL from '../../assets/images/shots/index';
import Logo from '../../assets/images/madebyandrew.png';
import './index.scss';
import {Drawer, Box, Typography, IconButton} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import img1 from '../../assets/images/shots/s1i1.jpeg';
import img2 from '../../assets/images/shots/s1i2.jpeg';
import img3 from '../../assets/images/shots/s1i3.jpeg';
import img4 from '../../assets/images/shots/s2i1.jpeg';
import img5 from '../../assets/images/shots/s2i2.jpeg';
import img6 from '../../assets/images/shots/s3i1.jpeg';
import img7 from '../../assets/images/shots/s4i1.jpeg';
import img8 from '../../assets/images/shots/s5i1.jpeg';
import img9 from '../../assets/images/shots/s6i1.jpeg';

const Home = () => {

    let data = [
        {
            id:1,
            imgSrc:img1,
            color: red,
        },
        {
            id:2,
            imgSrc: img2,
            color: green,
        },
        {
            id:3,
            imgSrc: img3,
            color: red,
        },
        {
            id:4,
            imgSrc: img4,
            color: green,
        },
        {
            id:5,
            imgSrc: img5,
            color: red,
        },
        {
            id:6,
            imgSrc: img6,
            color: blueGrey,
        },
        {
            id:7,
            imgSrc: img7,
            color: blueGrey,
        },
        {
            id:8,
            imgSrc: img8,
            color: green,
        },
        {
            id:8,
            imgSrc: img9,
            color: green,
        },
    ];

      
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
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
                <Link className='logo' to = '/'></Link>
                <img src={Logo} alt='logo'/>
                <Drawer anchor="top" open = {isDrawerOpen} onClose = {()=> setIsDrawerOpen(false)}  >
                        <Box p = {2} width = "250px" textAlign = "center" role="presentation" textDecoration ="none">
                            <Typography variant = 'h6' component='div' className='list'>
                                <ul>
                                    <li>
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        <a>About</a>
                                    </li>
                                    <li>
                                        <a>Contact</a>
                                    </li>
                                </ul>
                            </Typography>
                        </Box>
                </Drawer>
                    
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className='picture' key={index}> 
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>    
        </> 
    )
};

export default Home;




