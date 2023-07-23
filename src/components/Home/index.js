import { blueGrey, green, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
import imgx from '../../assets/images/imgx.png';
import Logo from '../../assets/images/madebyandrew.png'
import './index.scss';
import {Drawer, Box, Typography, IconButton} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    let data = [
        {
            id:1,
            imgSrc: imgx,
            color: red,
        },
        {
            id:2,
            imgSrc: imgx,
            color: green,
        },
        {
            id:3,
            imgSrc: imgx,
            color: red,
        },
        {
            id:4,
            imgSrc: imgx,
            color: green,
        },
        {
            id:5,
            imgSrc: imgx,
            color: red,
        },
        {
            id:6,
            imgSrc: imgx,
            color: blueGrey,
        },
        {
            id:7,
            imgSrc: imgx,
            color: blueGrey,
        },
        {
            id:8,
            imgSrc: imgx,
            color: green,
        },
        {
            id:9,
            imgSrc: imgx,
            color: blueGrey,
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
                        <Box p = {2} width = "250px" textAlign = "center" role="presentation">
                            <Typography variant = 'h6' component='div'>
                            
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




