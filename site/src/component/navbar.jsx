import React from 'react'
import  {NavLink} from "react-router-dom"
/*import imgLogo from '../images/logo.png'*/
import './index.css';
import Img from './image/abcd.png';

function navbar() {
  return (
    <header className="App-header">
    <nav>
      <div className='img_logo'>
        <NavLink to="/">
          <img src={Img} alt="image" />
        </NavLink>
      </div>
      <div className='lien'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">Contacte</NavLink>
        <NavLink to="/projet">Projet</NavLink>
      </div>
    </nav>
  </header>
  )
}

export default navbar