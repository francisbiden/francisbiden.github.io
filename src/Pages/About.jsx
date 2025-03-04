import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import Footer from "../Components/Footer";


const About = () => {
  return (
    <>
        <div className="about">
          <div className="about-container">
            <h2>About Me</h2>
            <p>
              Hi, I'm <span className="highlight">Francis Muiruri</span>, a passionate Full-Stack Developer! 🚀
              With expertise in <strong>React, JavaScript, SCSS, Python (Django), MySQL, and Node.js</strong>, 
              I build high-performance web applications that solve real-world problems.
            </p>
            <p>
              I have developed <strong>multiple freelance web projects</strong> and am currently refining my skills 
              at <span className="highlight">Power Learn Project Africa</span>. My passion lies in creating 
              <strong> responsive, dynamic, and user-friendly web applications</strong>.
            </p>
            <p>Let's build something amazing together! 🎯</p>
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

export default About;