import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <from>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Your Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="type your message herre" />
            <button className="btn">Submit</button>
        </from>
      
    </div>
  )
}

export default Form
