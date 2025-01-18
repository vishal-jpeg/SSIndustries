import React from "react";
import "aos/dist/aos.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" data-aos="fade-up">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="fade-in-up">Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 fade-in-up"
                  data-aos="zoom-in"
                >
                  {" "}
                  <i className={d.icon}></i>
                  <h3 className="feature-card">{d.title}</h3>
                  <p className="feature-card">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};