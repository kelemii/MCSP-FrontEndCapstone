import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const updateFullName = (event) => {
    setFullName(event.target.value);
  };
  const updateCompany = (event) => {
    setCompany(event.target.value);
  };
  function HandleSubmit(e) {
    e.preventDefault();
    axios({
      url: "http://localhost:5001/api/userAccounts", //this needs to be replaced in production
      method: "POST",
      data: { email, password, fullName, company },
    }).then(
      console.log("signed up"),
      setEmail(""),
      setCompany(""),
      setPassword(""),
      setFullName("")
    );
  }
  return (
    <>
      <p>Signup Form temp</p>
      <form onSubmit={HandleSubmit} className="registration">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        ></input>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={updateFullName}
        ></input>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={updateCompany}
        ></input>
        <input type="submit"/>
      </form>
      <br></br>
    </>
  );
}
export default Form;