import React from 'react';
import "./../index.css";
import {FaPaypal,FaStripe} from 'react-icons/fa';
import { DiGit ,} from 'react-icons/di'

function Skills() {
    return (
       <section
       data-aos="fade-right"
       className="skills-container"
       id="skills"
       name="skills"
       >
       <h1 className="heading">Payment gateway integration list! 
       <span role="img" aria-label="Victory">
            </span>  ✌️
       </h1>

       <div className="techs">
       <li>
        <FaPaypal size={70} color='blue'/>
          <p>Paypal</p>
        </li>
        <li>
          <p>Moon Pay</p>
        </li>
        <li>
          <p>PayTm</p>
        </li>
        <li>
          <p>Wyre</p>
        </li>
        <li>
          <p>Indacoin</p>
        </li>
        <li>
        <FaStripe size={70} color='blue'/>
          <p>Stripe</p>
        </li>
       </div>



       </section>
    )
}

export default Skills;
