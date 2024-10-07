import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const CertificatePage = () => {
  // Sample images for the carousel
  const images = [
    '/images/gcp_certificate.jpg',
    '/images/React_certificate.jpg',
    '/images/Javascript_certificate.jpg',
    '/images/React_certificate.jpg',
    '/images/Javascript_certificate.jpg',
    '/images/Javascript_certificate.jpg',
  ];

  const [index, setIndex] = useState(0);

  // Function to handle the next image
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="p-4 font-boska">
      <h1 className='text-gray-100 text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16'>Certifications</h1>

      {/* Image Carousel */}
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="text-gray-500 px-4 py-2 border border-gray-500 rounded-full shadow hover:border-gray-400 hover:text-gray-400 focus:outline-none"
        >
          &#10094;
        </button>

        <SwipeableViews index={index} enableMouseEvents onChangeIndex={setIndex}>
          {images.map((img, imgIndex) => (
            <div key={imgIndex} className="flex justify-center items-center w-full">
              <img
                src={img}
                alt={`Certificate ${imgIndex + 1}`}
                className="w-full h-auto max-w-md rounded-lg shadow-lg mx-2"
              />
            </div>
          ))}
        </SwipeableViews>

        <button
          onClick={handleNext}
          className="text-gray-500 px-4 py-2 border border-gray-500 rounded-full shadow hover:border-gray-400 hover:text-gray-400 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;
