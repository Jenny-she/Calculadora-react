import React from "react";
import logojLogo from '../assets/logoj.png';
import '../App.css';


const Logo = (props) => (
    <div className='logoj-logo-contenedor'>
        <img 
            src={logojLogo}
            className='logoj-logo'
            alt='Logo de logoj'
        />
        {props.imgLogo}

    </div>

);


export default Logo;