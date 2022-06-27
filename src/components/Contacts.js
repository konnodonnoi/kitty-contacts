import React from "react";
import './Contacts.css'
const Contact = (props) => {
    console.log(props)
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.img} alt=''/>
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src="../../images/phone-icon.png" alt="" className="phone" />
         
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" alt="" />
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
