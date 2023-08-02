import React from 'react';
import './index.scss';
import logo from '../../assets/images/madebyandrew.png'

const About = () => {

    return (
    <div className='container'>
        <div className='profile-photo'>
            <img img src= {logo} alt='logo'></img>
        </div>
        <div className='profile-text'>
            <p>
            This is a block of text that will be displayed on the <br/>
            About page to talk about how cool andrew is and that hes a camera man with peas or something idk <br/>
            I need to write want this to be something short and succint but also gets to the points about <br/>
            your passions and stuff uno. Could also include some stuff on your influences unsure but fully about <br/>
            YOU!!
            </p>
        </div>
    </div>
    )

}

export default About;