import "./FooterStyles.css";

import React from 'react'
import { FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaFacebook, 
    FaLinkedin, 
    FaTwitter }
     from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color :
                "#fff", marginRight: "2rem"}}/>
            <p>Kolkata 700009  </p>
            <p>India.</p>
            </div>
            <div>
            <h4> <FaPhone size={20} style={{color :
            "#fff", marginRight: "2rem"}}/>
            <p>9593422553</p></h4>
            </div>
                <h4> <FaMailBulk size={20} style={{color :
            "#fff", marginRight: "2rem"}}/>
            <p>firojhassan19990@gmail.com</p></h4>
    
           </div>
        </div>
        < div className="right">
            <h4>
                About My Self
            </h4>
            <p>This is FiI have complete my
                 masters in Computer Application at
                Calcutta University, Kolkata in 2023.</p>
            <div className="social">
                <h4> <FaFacebook size={30} style={{color :
            "#fff", marginRight: "1rem"}}/>
                </h4>
                <h4> <FaLinkedin size={30} style={{color :
            "#fff", marginRight: "1rem"}}/>
                </h4>
                <h4> <FaTwitter size={30} style={{color :
            "#fff", marginRight: "1rem"}}/>
                </h4>
            </div>
        
    </div>
    </div>
  )
}

export default Footer
