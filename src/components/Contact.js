// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact-item">
      <img
        className="contact-bubble"
        alt={props.data.name}
        src={props.data.photo}
      />
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-name">{props.data.name}</h3>
          <span className="contact-phone">{props.data.phone}</span>
          <span className="contact-email">{props.data.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
