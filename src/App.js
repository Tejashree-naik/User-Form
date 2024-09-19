import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, address, contact, email });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Contact Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact" className="form-label">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Address:</strong> {submittedData.address}
          </p>
          <p>
            <strong>Contact:</strong> {submittedData.contact}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
