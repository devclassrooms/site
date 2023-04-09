/*import logo from './logo.svg';*/
import {NavLink} from 'react-router-dom';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Img from './image/abcd.png';
import Img_ordi from './image/image_ordi.png'

const Home = () => <h1>Bienvenue à la maison</h1>;
/*const About = () => <h1>À propos de nous</h1>;*/

function App() {
  return (
    <Router>
      <div className="App">
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
        <div className='img_mid'>
          <div className='img_text'>
            <p>Bienvenue sur mon site ! Je suis heureux de vous accueillir.</p>
            <img src={Img_ordi}></img>
          </div>
        </div>
        <div className='mid'>
            <div>
              <p><span className='mid_name'>Je m’appelle Hosni Bouhlel Boughdira </span><br></br> Je suis <span className='text_l'>développeur web</span>. J’ai acquis une solide expertise dans différents langages de programmation tels que <span className='text_l'>C, C++, JavaScript, Node.js et React.js,</span> ainsi que dans les <span className='text_l'>API REST</span> et le référencement naturel <span className='text_l'>(SEO)</span>.</p>
            </div>
            <div>
              <p>J’ai suivi une formation de deux ans à l’école 42, reconnue pour sa rigueur et son excellence en matière de développement informatique. J’ai également suivi des cours en ligne sur la plateforme Openclassrooms, où j’ai obtenu un diplôme de développeur web de niveau bac+2.</p>
            </div>
            <div>
              <p>Je suis actuellement à la recherche d’opportunités pour travailler dans le domaine du développement web, que ce soit en tant que développeur en entreprise ou en freelance. J’ai une grande passion pour la création de sites web et je suis prêt à relever tous les défis qui me seront proposés.</p>
            </div>
            <div>
              <p>N’hésitez pas à parcourir mon portfolio pour découvrir mes projets passés et à me contacter si vous avez des questions ou si vous souhaitez travailler avec moi sur un projet de développement web. Je suis impatient de collaborer avec vous !</p>
            </div>
        </div>
        <div className='footer'>
          <footer>
            <div className='footer_img_logo'>
                <NavLink to="/">
                  <img src={Img} alt="image"/>
                </NavLink>
            </div>
            <div>
                <p>© 2023 Hosni. All rights reserved</p>
            </div>
          </footer>
        </div>
        <Routes>
            <Route exact path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
