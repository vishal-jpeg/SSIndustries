import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Team = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only once animation
    });
  }, []);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title" data-aos="fade-up">
          <h2 className="floating">Meet the Team</h2>
          <p>
            
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-12 col-sm-12 team" data-aos="zoom-in">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.alt} className="team-img" />
                    <div className="caption">
                      <div className="name-job">
                        <h4>{d.name}</h4>
                        <p className="job">{d.job}</p>
                      </div>
                      <div className="description">
                        <p>{d.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
