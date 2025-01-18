import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pom = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  // Initial client retention percentage (for demonstration purposes)
  const initialClientRetentionPercentage = 0;
  // Target client retention percentage
  const targetClientRetentionPercentage = 95;

  // State to manage client retention percentage
  const [clientRetentionPercentage, setClientRetentionPercentage] = useState(initialClientRetentionPercentage);
  const [isInView, setIsInView] = useState(false);

  const circleRadius = 22;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (clientRetentionPercentage / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (clientRetentionPercentage < targetClientRetentionPercentage) {
          setClientRetentionPercentage((prevPercentage) => prevPercentage + 1);
        } else {
          clearInterval(interval);
        }
      }, 30); // Adjust the interval for smoother animation

      return () => clearInterval(interval);
    }
  }, [isInView, clientRetentionPercentage, targetClientRetentionPercentage]);

  const handleScroll = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3, // Adjust the threshold as needed
    });

    const section = document.getElementById('pom');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="pom">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title ms-0 mb-0" data-aos="fade-in">
          <h2>Principles of Management</h2>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div className="info">
            <div className="info-item">
              <i class="fa fa-lightbulb-o floating pom-icon-1" aria-hidden="true"></i>
              <div>
                <h3 className="feature-card">Core Values</h3>
                <p>
                  <ul className="feature-card">
                    <b>Innovation:</b> Driving progress through forward-thinking and technology integration.
                  </ul>
                  <ul className="feature-card">
                    <b>Integrity:</b> Building trust with transparency and ethical practices.
                  </ul>
                  <ul className="feature-card">
                    <b>Excellence:</b> Striving for perfection in every process and product.
                  </ul>
                  <ul className="feature-card">
                    <b>Collaboration:</b> Fostering partnerships that create value for everyone.
                  </ul>
                  <ul className="feature-card">
                    <b>Customer Success:</b> Making client satisfaction the cornerstone of our efforts.
                  </ul>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-eye floating pom-icon-2"></i>
              <div>
                <h3 className="feature-card">Vision</h3>
                <p className="feature-card">
                  To revolutionize manufacturing with precision, reliability, and cutting-edge innovation, setting new industry benchmarks worldwide.
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-bullseye floating pom-icon-3"></i>
              <div>
                <h3 className="feature-card">Mission</h3>
                <p className="feature-card">
                  To empower industries with world-class manufacturing solutions, ensuring superior quality, innovation, and client-centric excellence.
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="image-container">
              <img src="img/pom-image.png" className="img-responsive zoom-in-effect pom-image-placement " alt="principles of management" />
              <div className="progress-ring-container floating">
                <div className="progress-ring">
                  <svg className="progress-ring-circle" width="100" height="100">
                    <circle
                      className="progress-ring-circle-bg"
                      stroke="#e6e6e6"
                      strokeWidth="4"
                      fill="transparent"
                      r={circleRadius}
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="progress-ring-circle-fg"
                      stroke="#66ccff"
                      strokeWidth="4"
                      fill="transparent"
                      r={circleRadius}
                      cx="50"
                      cy="50"
                      style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset }}
                    />
                  </svg>
                </div>
                <div className="progress-text">
                  <span className="progress-value">{clientRetentionPercentage}%</span>
                  <h3>Client Retention</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pom;
