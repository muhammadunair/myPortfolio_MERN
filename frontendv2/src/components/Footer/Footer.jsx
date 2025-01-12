import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";



const Footer = () => {
  return (
    
    <div className='footer'>
        <div>
        <h5>About Me</h5>
        <h5>
            Hey, my name is Muhammad Junaid. I am a Full-Stack Developer
        </h5>
        <Link to="/contact" className="footerContactBtn">
            <h5>
                Contact Us
            </h5>
        </Link>
        </div>

        <div>
        <h6>Social Media</h6>
        <a href="https://github.com/meabhisingh/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/meabhisingh/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer