import "./AboutContentStyles.css";
import wall1 from "../assests/wall1.jpg"
import wall2 from "../assests/wall2.jpg"
import React from 'react'
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react font-end Developer. I create responsive secure website for my self.</p>
        
        <Link to="/contact" >
            <botton className="btn" >Contact</botton>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={wall1} className="img" alt="true"/>
                </div>
                <div className="img-stack-bottom">
                    <img src={wall2} className="img" alt="true"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
