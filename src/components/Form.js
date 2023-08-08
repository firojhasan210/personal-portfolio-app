import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form" rows="5">
        <from>
            <div className="name">
            <label>Your Name</label>
            <input type="text"></input>
            </div>
           <div className="email">
           <label>Your Email</label>
            <input type="email"></input>
           </div>
            <div className="sub">
            <label>Subject</label>
            <input type="text"></input>
            </div>
           <div className="message">
           <label>Message</label>
            <textarea rows="6" placeholder="type your message herre" />
           </div>
           <div className="submit">
           <button className="btn">Submit</button>
           </div>
        </from>
      
    </div>
  )
}

export default Form
