// import { blueGrey, green, red } from '@mui/material/colors';
import React from 'react';
import './index.scss';

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
        },
        {
            id:2,
            imgSrc: img2,
        },
        {
            id:3,
            imgSrc: img3,
        },
        {
            id:4,
            imgSrc: img4,
        },
        {
            id:5,
            imgSrc: img5,
        },
        {
            id:6,
            imgSrc: img6,
        },
        {
            id:7,
            imgSrc: img7,
        },
        {
            id:8,
            imgSrc: img8,
        },
        {
            id:8,
            imgSrc: img9,
        },
    ];

    return (
 
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className='picture' key={index}> 
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>    
    )
};

export default Home;




