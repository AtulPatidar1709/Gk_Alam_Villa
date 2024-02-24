import { React } from "react";
import { Container, Row, Col } from "reactstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import "./ContactUs.css";
import { useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    zipcode: "",
    currentLocation: "",
    budget: "",
    unit: "",
    timeframe: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    zipcode: "",
    currentLocation: "",
    budget: "",
    unit: "",
    timeframe: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Simple validation example, you can customize this based on your needs
    const requiredFields = [
      "name",
      "email",
      "phone",
      "age",
      "zipcode",
      "currentLocation",
      "budget",
      "unit",
      "timeframe",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
        isValid = false;
      } else {
        newErrors[field] = "";
      }
    });

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    }
  };
  return (
    <>
      <div className="bgContactUs">
        <Container>
          <div>
            <h2 className="heagingContactUS">Contact Us</h2>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="7" className="pt-5">
            <Row>
              <h1 className="sendMsg">SEND US A Message!</h1>
            </Row>
            <Row className="form">
              <Col md={"12"} className="title">
                ALAM VILLAS
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Name</label>
                    <input
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      type="text"
                      name="name"
                      className="form-control"
                    />
                    <span className="error-message">{formErrors.name}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Email</label>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="text"
                      name="email"
                      className="form-control"
                    />
                    <span className="error-message">{formErrors.email}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label >Phone</label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      country={'Ind'}
                      name="phone"
                      className="form-control"
                    />
                    <span className="error-message">{formErrors.phone}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Age</label>
                    <input
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Age"
                      type="text"
                      name="age"
                      className="form-control"
                    />
                    <span className="error-message">{formErrors.age}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Zipcode</label>
                    <input
                      value={formData.zipcode}
                      onChange={handleChange}
                      placeholder="Zipcode"
                      type="text"
                      name="zipcode"
                      className="form-control"
                    />
                    <span className="error-message">{formErrors.zipcode}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Current Location</label>
                    <input
                      value={formData.currentLocation}
                      onChange={handleChange}
                      placeholder="Current Location"
                      type="text"
                      name="currentLocation"
                      className="form-control"
                    />
                    <span className="error-message">
                      {formErrors.currentLocation}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Budget</label>
                    <select
                      value={formData.unit}
                      onChange={handleChange}
                      name="unit"
                      className="form-control"
                    >
                      <option value="">Select Unit</option>
                      <option value="75TO1CR">75 Lakh to 1 CR</option>
                      <option value="1CR">1.01 CR to 1.30 CR</option>
                      <option value="150CR">1.31 CR to 1.50 CRK</option>
                      <option value="Above">1.51 CR to Above</option>
                    </select>
                    <span className="error-message">{formErrors.budget}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Unit</label>
                    <select
                      value={formData.unit}
                      onChange={handleChange}
                      name="unit"
                      className="form-control"
                    >
                      <option value="">Select Unit</option>
                      <option value="2BHk">2BHk</option>
                      <option value="3BHk">3BHk</option>
                      <option value="4BHK">4BHK</option>
                      <option value="Above BHK">Above BHK</option>
                      <option value="Villa">Villa</option>
                    </select>
                    <span className="error-message">{formErrors.unit}</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="outerSec">
                  <div className="formGroup">
                    <label>Timeframe</label>
                    <input
                      value={formData.timeframe}
                      onChange={handleChange}
                      placeholder="Timeframe"
                      type="text"
                      name="timeframe"
                      className="form-control"
                    />
                    <span className="error-message">
                      {formErrors.timeframe}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={"6" }>
                <div className="outerBtn">
                  <div className="formGroup">
                    <button onClick={handleSubmit} className="submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={"4"}>
            <div>
              <h3>ADDRESS INFO</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
