import React from 'react'
import { useState } from "react";
import PopUp from "@components/PopUp/PopUp";
import "../../style/App.css"
import "./SignUp.css"

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [buttonPopUp, setButtonPopUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonPopUp(true)

  } 
  const handleChange = (e) =>
    setSignUp({ ...signUp, [e.target.name]: e.target.value });

  return (
    <div className="sign-div">
      <h1 className="contact-us-title sign-up-title ">Sign Up</h1>
      <form  className='form-sign-up' action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input required
          className='input-sign'
          type="text"
          name="userName"
          id="name"
          placeholder="Caroline"
          value={signUp.userName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input required
          className='input-sign'
          type="email"
          name="email"
          id="email"
          placeholder="carolineforbes@example.com"
          value={signUp.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Password</label>
        <input required
          className='input-sign'
          type="password"
          name="password"
          id="password"
          value={signUp.password}
          onChange={handleChange}
        />
        <input className='input-submit' required type="submit" value="Submit" onClick={handleSubmit} />
          
        <PopUp  trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h2>Welcome to NutriPals, {signUp.firstName} {signUp.lastName}</h2>
        </PopUp>
      </form>
      
    </div>
  )
}

export default SignUp