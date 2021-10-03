import React from "react";
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return(
    <div className="ma4 mt0 center">
      <Tilt className="Tilt br2 shadow-2 flex justify-center content-center" options={{ max : 55 }} style={{ height: '6rem', width: '6rem' }} >
        <div className="Tilt-inner pa3 h-100">
          <img alt="Logo" src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;