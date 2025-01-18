import React from "react";
import "aos/dist/aos.css";

export const About = (props) => {
  return (
    <div id="about" data-aos="fade-up">
      <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6" data-aos="zoom-in">
          <img src="img/about_us.png" className="img-responsive" alt="about-ias" />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2 className="floating">About Us</h2>
            <p className="feature-card">{props.data ? props.data.paragraph : "Loading..."}</p>
            <h3 >Why Choose Us?</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul className="feature-card">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`Why-${i}`} data-aos="fade-left">{d}</li>
                      ))
                    : "Loading..."}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul className="feature-card">
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`Why2-${i}`} data-aos="fade-right">{d}</li>
                      ))
                    : "Loading..."}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};
