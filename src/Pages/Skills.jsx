import Footer from '../Components/Footer';
import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import SkillsLayout from '../Layout/SkillsLayout';


const Skills = () => {
  return (
    
      <>
            <SkillsLayout />
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
    
  )
}

export default Skills