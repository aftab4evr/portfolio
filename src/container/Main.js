import React, { useEffect } from 'react'
import Home from '../components/Home';
import Nav from '../components/Nav';
import "./../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from '../components/Services';
import Skills from '../components/Skills';
import PaymentGetway from '../components/PaymentGetway';

import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer'




function Main() {
    useEffect(() => {
        Aos.init({duration: 2000, offset: 200 });
        
    }, []);
    return (
        <div className="main-container">
        <Nav />
        <Home />
        <Services />
        <Skills />
        <PaymentGetway/>
        <Portfolio />
        <Contact />
        <Footer />
        
            
        </div>
    )
}

export default Main;
