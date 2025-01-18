import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Only once animation
    });
  }, []);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleCloseMessage = () => {
    setShowSuccessMessage(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    emailjs
      .sendForm("service_6yueya9", "template_jyj23v2", e.target, "H2ZK5Po6-tyXKooF3")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div id="contact">
        <div className="container" data-aos="fade-up"> {/* AOS animation */}
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 className="floating">Get In Touch</h2>
                <p className="feature-card">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {showSuccessMessage && <p className="success-message">The message has been received. Our team will get back to you shortly. <button className="button-bg" onClick={handleCloseMessage}>x</button></p>}
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item feature-card">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker floating"></i> Address
                </span>
                <a href="https://maps.app.goo.gl/LQsXtbQyfk7VmNCz5" >{props.data ? props.data.address : "loading"}</a>
              </p>
            </div>
            <div className="contact-item feature-card">
              <p>
                <span>
                  <i className="fa fa-phone floating"></i> Phone
                </span>{" "}
                <a href="tel:+918939424505">{props.data ? props.data.phone : "loading"}</a>
              </p>
            </div>
            <div className="contact-item feature-card">
              <p>
                <span>
                  <i className="fa fa-whatsapp floating"></i> Phone
                </span>{" "}
                <a href="https://wa.me/+918939424505">{props.data ? props.data.phone : "loading"}</a>
              </p>
            </div>
            <div className="contact-item feature-card">
              <p>
                <span>
                  <i className="fa fa-envelope-o floating"></i> Email
                </span>{" "}
                <a href="mailto:impautosys@yahoo.com">{props.data ? props.data.email : "loading"}</a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook floating"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter floating"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube floating"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
