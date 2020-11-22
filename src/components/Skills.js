import React from 'react';
import "./../index.css";
import {FaHtml5,FaCss3,FaBootstrap,FaReact,FaPython,FaFlask,FaDocker} from 'react-icons/fa';
import { DiJavascript1,DiMongodb ,DiDjango,DiGit,DiJqueryLogo} from 'react-icons/di'



function Skills() {
    return (
       <section
       data-aos="fade-right"
       className="skills-container"
       id="skills"
       name="skills"
       >
       <h1 className="heading">What i do! 
       <span role="img" aria-label="Victory">
            </span>  ✌️
       </h1>

       <div className="techs">
       <li>
        <FaPython size={70} color='red'/>
          <p>Python</p>
        </li>
        <li>
        <DiDjango size={70} color='blue'/>
          <p>Django</p>
        </li>
        <li></li>
        <li>
        <FaFlask size={70} color='blue'/>
          <p>Flask</p>
        </li>
        <li>
        <FaDocker size={70} color='blue'/>
          <p>Docker</p>
        </li>
      <li>
       <FaHtml5 size={70} color='orange' /> 
      <p>HTML5</p>
      </li>

      <li>
      <FaCss3 size={70} color='lightblue'/>
          <p>CSS3</p>
      </li>
      <li>
      <FaBootstrap size={70} color='purple'/>
          <p>Bootstrap</p>
        </li>
        <li>
        <DiJqueryLogo size={70} color='blue'/>
          <p>JQuery</p>
        </li>
        <li>
        <DiJavascript1 size={70} color='yellow'/>
          <p>JavaScript</p>
        </li>
        <li>
        <FaReact size={70} color='blue'/>
          <p>React JS</p>
        </li>
        <li>
        <DiMongodb size={70} color='green'/>
          <p>MongoDB</p>
        </li>
        <li>
        <DiGit size={70} color='red'/>
          <p>Git</p>
        </li>
       </div>



       </section>
    )
}

export default Skills;
