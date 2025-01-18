import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Only once
      mirror: false, // Disable mirroring
    });
  }, []);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 intro-text"
                data-aos="fade-left" 
              >
                <h1 className="floating">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p data-aos="zoom-in"> 
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll floating"
                  data-aos="fade-up" 
                >
                  Contact Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
