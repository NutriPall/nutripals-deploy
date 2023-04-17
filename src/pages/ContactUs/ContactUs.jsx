import React from "react";
import PopUp from "@components/PopUp/PopUp";
import { useState } from "react";
import phone from "./images/phone-icon.png"
import email from "./images/email-icon.png";
import "./ContactUs.css";
import "../../style/App.css"

const ContactUs = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const [buttonPopUp, setButtonPopUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonPopUp(true)

  } 
  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  

  return (
    <div className="contact-div">
      <h1 className="contact-us-title contact-us-title-two ">We would love to hear from you</h1>
      <div className="contacts">
        <div className="contacts-phone">
          <img className="phone-icon" src={phone} alt="phone icon" />
          <p className="phone-text">123123123</p>
        </div>  
        <div className="contacts-email">
          <img className="email-icon" src={email} alt="email icon" />
          <p className="email-text">hellonutripal@nutripals.com</p>
        </div>
      </div>
      <h2 className="contact-us-title">Leave us a message</h2>
      <form className="form-contact" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">What's your name?</label>
        <p className="small-label">First name</p>
        <input required
          className="input-contact"
          type="text"
          name="firstName"
          id="name"
          placeholder="Caroline"
          value={value.firstName}
          onChange={handleChange}
        />
        <p className="small-label">Last name</p>
        <input className="input-contact" required
          type="text"
          name="lastName"
          id="name"
          placeholder="Forbes"
          value={value.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input required
          className="input-contact"
          type="email"
          name="email"
          id="email"
          placeholder="carolineforbes@example.com"
          value={value.email}
          onChange={handleChange}
        />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          placeholder="Let us know how we can improve."
          value={value.comments}
          onChange={handleChange}
          cols="30"
          rows="5"
        ></textarea>
        <input className="input-submit" required type="submit" value="Submit" onClick={handleSubmit} />
          
        <PopUp  trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h2>Thank you for your feedback, {value.firstName} {value.lastName}</h2>
        </PopUp>
      </form>
    </div>
  );
};

export default ContactUs;
