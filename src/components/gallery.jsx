import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "./image";

export const Gallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Only once animation
    });
  }, []);

  const openModal = (largeImage) => {
    setSelectedImage(largeImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const remainingPhotosCount = props.data ? Math.max(props.data.length - 6, 0) : 0;

  return (
    <div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2 className="floating">Gallery</h2>
        <p className="feature-card">
          Here are some of the pictures of our projects. Click on the images
          to view the larger version.
        </p>
      </div>
      <div className="row">
        <div className="portfolio-items ">
          {props.data
            ? props.data.slice(0, showAllPhotos ? props.data.length : 6).map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4 feature-card sm-mb-2"
                  data-aos="zoom-in"
                >
                  <div onClick={() => openModal(d.largeImage)}>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      alt= {d.alt}
                    />
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      {!showAllPhotos && remainingPhotosCount > 0 && (
        <div>
          <button className="show-more-button floating" onClick={() => setShowAllPhotos(true)}>
            Show More
          </button>
          <p className="remaining-photos floating">+{remainingPhotosCount} more photos</p>
        </div>
      )}
    </div>

    {selectedImage && (
      <div className="modal" onClick={closeModal}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-content" src={selectedImage} alt="Large view" />
      </div>
    )}
  </div>
  );
};
