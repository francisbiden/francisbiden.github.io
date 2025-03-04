import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'
import Profile from '../assets/Profile.jpg'

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="home">
        <img  className="img"  src={Profile } alt="Profile pic" />
        <h2 >Hi, My Name is </h2>
        <h1 className="home-name">Francis <span className="home-name--last">Muiruri</span></h1>
        <p className="tagline">Welcome to my portfolio!</p>
        <p className="intro">
          I am an Aspiring Frontend Developer | React Enthusiast  with a passion for 
          building modern, responsive, and user-friendly web applications. I am excited to share my journey with you.
        </p>
        <div className="cta-buttons">
          <motion.button 
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95,rotate:"2.5deg"}}
          className="cta-bt" onClick={()=>navigate ('/about')}>About Me</motion.button>

          <motion.button 
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95,rotate:"2.5deg"}}
          className="cta-bt" onClick={()=>navigate ('/contact')}>Get in Touch</motion.button>
        </div>
       
    </div> 

    <div className="social-icons">

                 <a href="https://github.com/francisbiden" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social" />
                  </a>
                  <a href="https://x.com/FMuiruri97962" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter  className="social" />
                  </a>
                  <a href="https://www.facebook.com/francis.muiruri.988926" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social" />
                  </a>
                  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social" />
                  </a>
    </div>
    < Footer />
 
  </>   
  );
};

export default Home;