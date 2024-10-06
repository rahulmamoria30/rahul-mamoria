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
    setIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 2));
  };

  // Function to handle the previous image
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / 2)) % Math.ceil(images.length / 2));
  };

  return (
    <div className="p-4 relative">
      <h2 className="text-lg font-semibold mb-4">
        Checkout certificates and descriptions
      </h2>

      {/* Image Carousel */}
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
        >
          &#10094; {/* Left Arrow */}
        </button>

        <SwipeableViews index={index} enableMouseEvents onChangeIndex={setIndex}>
          {images.reduce((acc, img, imgIndex) => {
            // Create pairs of images
            if (imgIndex % 2 === 0) {
              acc.push([img]);
            } else {
              acc[acc.length - 1].push(img);
            }
            return acc;
          }, []).map((pair, pairIndex) => (
            <div key={pairIndex} className="flex justify-center items-center w-full">
              {pair.map((img, innerIndex) => (
                <img
                  key={innerIndex}
                  src={img}
                  alt={`Certificate ${pairIndex * 2 + innerIndex + 1}`}
                  className="w-1/2 h-auto max-w-md rounded-lg shadow-lg mx-2"
                />
              ))}
            </div>
          ))}
        </SwipeableViews>

        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;
