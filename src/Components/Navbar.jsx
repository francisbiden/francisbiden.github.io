import { NavLink}  from 'react-router'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/_navbar.scss"; // Import SASS file


const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  


    // Toggle menu function
    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    
    <nav className='navbar'>
        <span className='navbar-span'>Francis | Frontend Developer</span>
        
                      {/* Menu Items */}

          <ul id='navbar' className={`navbar__menu${isOpen ? "navbar__menu--open" : ""}`}>
          <li className="navbar__item" onClick={() => setIsOpen(false)}><NavLink to='/'  >Home</NavLink></li>
          <li className="navbar__item" onClick={() => setIsOpen(false)}><NavLink to='/about'>About</NavLink></li>
          <li className="navbar__item" onClick={() => setIsOpen(false)}><NavLink to='/skills'>Skills</NavLink></li>
          <li className="navbar__item" onClick={() => setIsOpen(false)}><NavLink to='/contact'>Contact</NavLink></li>

          </ul>
        

      {/* Toggle button */}
      <button className="navbar__toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
        

      </nav>
  )
}

export default Navbar  