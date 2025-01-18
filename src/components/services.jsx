import React, { useState } from "react";
import "aos/dist/aos.css";

export const Services = (props) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="text-center" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up feature-card">Our Services</h2>
          <p className="fade-in-up feature-card">
            We offer a range of innovative services to meet your needs. Click on a service to view subcategories and details.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos="fade-up"
                  onClick={() => handleServiceClick(d)}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 className="feature-card">{d.name}</h3>
                    <p className="feature-card">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      {selectedService && (
        <div className="modal-1-overlay">
          <div className="modal-1">
            <button className="modal-1-close" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            {selectedService.subcategories && (
              <div className="subcategories">
                <h3>Subcategories:</h3>
                <ul>
                  {selectedService.subcategories.map((subcat, index) => (
                    <li key={index}>
                      <h4>{subcat.title}</h4>
                      <p>{subcat.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};