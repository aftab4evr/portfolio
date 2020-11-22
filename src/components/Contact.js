import React from 'react'
import './../index.css'
import { FiMail,FiGlobe,FiInstagram } from 'react-icons/fi'
import { FaGithub,FaFacebookF,FaLinkedin,FaWhatsapp,FaPhoneAlt } from 'react-icons/fa'

function Contact() {
    return (
        <section
        data-aos="zoom-in"
        className="contact-container"
        id="contact"
        name="contact"
        
        >
         <div className="profile-image"></div>  
         <h1 className="heading">Contact Me</h1>

         <div className="cards-container">

         <div className="cards">
         
         <div className="contact-icons">
         <i>
             <FiMail />
        </i>

         </div>

         <div className="contact-text">
         <span>Email</span>
         </div>

         <div className="contact-links">
         <span>umair.shah1995@gmail.com</span>
         </div>
         </div>

         {/* Card 2 - Social Media  */}
         <div className="cards">

         <div contact-icons>
         <i>
             <FiGlobe />
         </i>

         </div>

         <div className="contact-text">
         <span>Social Media</span>
         </div>

         <div className="contact-links">
         <a
         rel="noopener noreferrer"
         target="_blank"
         href="https://github.com/aftab4evr"
         >
         {/* Github */}
         <i>
             <FaGithub id="github" />
         </i>
         </a>
         {/* Facebook */}
         <a
         rel="noopener noreferrer"
         target="_blank"
         href="https://www.facebook.com/Aftab4evr/"
         >
         {/* Github */}
         <i>
             <FaFacebookF id="facebook" />
         </i>
         </a>
         {/* LinkedIn */}
         <a
         rel="noopener noreferrer"
         target="_blank"
         href="https://www.linkedin.com/in/aftab-hussain-44970a93/"
         >
         {/* Github */}
         <i>
             <FaLinkedin id="linkedin" />
         </i>
         </a>
         {/* Instagram */}
         <a
         rel="noopener noreferrer"
         target="_blank"
         href="https://www.instagram.com/aftab4evr/"
         >
         {/* Github */}
         <i>
             <FiInstagram id="instagram" />
         </i>
         </a>
         {/* WhatsApp */}
         <a
         rel="noopener noreferrer"
         target="_blank"
         href="https://api.whatsapp.com/send?phone+917278737088"
         >
         <i>
             <FaWhatsapp id="whatsaap" />
         </i>
         </a>
         </div>

         </div>

         {/* Card 3 - Phone */}
         <div className="cards">
          <div className="contact-icons">
            <i>
             <FaPhoneAlt id="phone"/>
            </i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>(+91) 7278737088 </span>
          </div>
         </div>
         </div>

          
        </section>
    );
};

export default Contact;
