import Header from "../Header";
import { useState } from "react";

export default function Contact() {

const submitForm = (e) => {
  e.preventDefault()
 
  const formData = new FormData(e.target)
  const payload = Object.fromEntries(formData)

  console.log(payload);
}

  return (
    <div id="contact-page">
      <Header />

      <form onSubmit={submitForm} id="form" className="needs-validation">
        <div className="row input-group">
          <label htmlFor="name" className="col-name-label">Name</label>
          <div className="col-sm-3 was-validated">
          <input type="text" aria-label="name" name="name" className="form-control" required></input>
          <div className="invalid-feedback">Please enter your name!</div>
          </div>
        </div>

        <div className="row mb-6">
          <label htmlFor="email" className="col-form-label">Email Address</label>
          <div className="col-sm-3 was-validated">
            <input type="email" name="email" className="form-control" id="email" required></input>
            <div className="invalid-feedback">Please enter a valid email!</div>
          </div>
        </div>

        <div className="row input-group">
          <label htmlFor="message" className="col-message-label">Message</label>
          <div className="col-sm-3 was-validated">
          <textarea className="form-control" name="message" aria-label="Message" required></textarea>
          <div className="invalid-feedback">Please enter a message!</div>

        </div>
        </div>

        <div className="col-sm-3">
        <button type="submit" id="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}
