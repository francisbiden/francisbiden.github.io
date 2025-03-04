import { useNavigate } from "react-router"
import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import Footer from "../Components/Footer";
import {motion} from 'framer-motion'

const Contact = () => {

  const navigate = useNavigate()



  return (
    <>
       <div className="contact">
          <h2 className="contact-title">Let's Connect! </h2>
          <p className="contact-intro"><i>
          I’d love to hear from you! Whether you have a project idea, need a developer for your team, or just want to say hello, feel free to reach out. I’m always open to new opportunities, collaborations, and discussions about web development, software engineering, and tech innovation. Let’s build something great together!</i>
          </p>
          <div className="contact-btns">
            <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95,rotate:"2.5deg"}}
            className="cta-bt" onClick={() => navigate ('info') }>Contact Info</motion.button>
            <motion.button 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95,rotate:"2.5deg"}}
            className="cta-bt" onClick={() => navigate ('form') }>Contact Form</motion.button>
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
  )
}

export default Contact