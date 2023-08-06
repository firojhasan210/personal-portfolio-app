import "./HeroImageStyles.css";
import bgImage from "../assests/wall1.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImage = () => {
  return <div className="hero" >
    <div className="mask" >
        <img className="bg-img" src= {bgImage} alt="bg-img" />
    </div>
    <div className="content">
        <p> HI, I'm Freelancer.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" 
            className="btn" >Project</Link>
            <Link to="/contact" 
            className="btn btn-light" >Contact</Link>
        </div>
    </div>

  </div>;
}

export default HeroImage
