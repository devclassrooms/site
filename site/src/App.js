/*import logo from './logo.svg';*/
import {NavLink} from 'react-router-dom';
import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Img from './image/abcd.png';

import Img_ordi from './image/image_ordi.png'
import Img_ordi2 from './image/tel.svg'

const Home = () => <h1>Bienvenue à la maison</h1>;
/*const About = () => <h1>À propos de nous</h1>;*/

function App() {

    const [isBlack, setIsBlack] = useState(false);
    const [isHide, setIsHide] = useState(false);

    const toggleHide = () => {
      setIsHide(prevState => !prevState); // Inverse l'état actuel
    }
    
    const toggleBackground = () => {
      setIsBlack(!isBlack);
    };

  return (
    <Router>
      <div className="App">
        <div className={isBlack ? 'black-bg container' : 'white-bg container'}> 
        <header className="App-header">
          <nav>
            <div className='img_logo'>
              <NavLink to="/">
                <img src={Img} alt="image" />
              </NavLink>
            </div>
            <div className='lien' id='lien_id'>
              <div className='container_a'>
              <NavLink className='lienAccueil' to="/" id='vvv'>Accueil</NavLink>
              </div>
              <div className='container_a'>
              <NavLink className='lienContacte'to="/apropos" id='vvv'>Contacte</NavLink>
              </div>
              <div className='container_a'>
              <NavLink className='lienProjet'to="/projet" id='vvv'>Projet</NavLink>
              </div>
            </div>
            <div className='img_logo_dev'>
              <img 
                className={isBlack ? 'black-bg img_dev_nav' : 'white-bg img_dev_nav'}
                src="https://media1.giphy.com/media/WIAXKEDP8R0IBSAXUk/giphy.gif" // Remplace par ton image
                alt="Toggle Background" 
                onClick={toggleBackground} 
                />
             </div>
          </nav>
          <div className='num_tel'>
            <a className='bt_num' href="tel:+33758125523"><img className='svg_tel' src={Img_ordi2} alt="Appeler ce numéro" width="30" height="30"/>07.58.12.55.23</a>
          </div>
        </header>
        <div className='img_mid'>
          <div className='img_text'>
            <p>Bienvenue sur mon site ! Je suis heureux de vous accueillir.</p>
            <img src={Img_ordi}>
            </img>
          </div>
        </div>
        <div className='mid'>
            <div>
              <p><span className='mid_name'>Je m’appelle Hosni Bouhlel Boughdira </span><br></br> Je suis <span className='text_l'>développeur web</span>. J’ai acquis une solide expertise dans différents langages de programmation tels que <span className='text_l'>C, C++, JavaScript, Node.js et React.js,</span> ainsi que dans les <span className='text_l'>API REST</span> et le référencement naturel <span className='text_l'>(SEO)</span>.</p>
            </div>
            <div className='telecharger'>
                <a href="https://devclassrooms.github.io/site/cv_pro.pdf" download="cv_pro.pdf">
                  <span>Télécharger</span>
                  <span>CV</span> 
                </a>
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
            <div className={isHide ? 'warning_togle_hide' : 'warning_togle'}>
              <div className='warning_mid'>
                <h3>Attention le site est actuellement en maintenance. Certaines fonctionnalités pourraient être temporairement inaccessibles. Merci de votre compréhension.</h3>
                <span onClick={toggleHide}>x</span>
              </div>
            </div>
        </div>
        <div className='footer'>
          <footer>
            <div className='footer_img_logo' id='footer_img_logo_id'>
                <NavLink to="/">
                  <img className='img_footer' src={Img} alt="image"/>
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
      </div>
    </Router>
  );
}

export default App;
