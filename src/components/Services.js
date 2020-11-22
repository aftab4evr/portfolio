import React from 'react'
import webImage from './../images/web.svg'
import uiImage from './../images/ui.svg'
import webScraping from './../images/webscraping.png'

import "./../index.css";

function Services() {
    return (
        <section
        className="services-container"
        data-aos="zoom-in"
        id="services"
        name="services"
        
        >
       <h1 className="heading">Services I Provide</h1>

       <div className="service-wrapper">

       <div className="services">
       <li>
          <img src={webImage} alt="" />
          <h2>Web Development</h2>
          <br/>
          <p>| PYTHON | DJANGO | FLASK | REACT JS | </p>
       </li>
       </div>

       <div className="services">
           <li>
               <img src={uiImage} alt="" />
               <h2>Mobile Development</h2>
          <br/>
          <p>| ANDROID |  REACT NATIVE | </p>

           </li>
       </div>
         
       <div className="services">
           <li>
               <img src={webScraping} alt="" />
               <h3>Web Scraping</h3>
               <br/>
          <p>| PYTHON |  BEAUTIFUL SOUP | SELENIUM |</p>
           </li>
       </div>


       </div>
       </section>
    )
}

export default Services;
