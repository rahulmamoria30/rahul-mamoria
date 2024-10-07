import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CertificatePage = () => {
  // Sample images for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/gcp_certificate.jpg',
    '/images/React_certificate.jpg',
    '/images/Javascript_certificate.jpg',
    '/images/React_certificate.jpg',
    '/images/Javascript_certificate.jpg',
    '/images/Javascript_certificate.jpg',
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="font-boska">
      <h1 className="text-4xl text-gray-300 md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16">
        Certifications
      </h1>

      <div className="relative max-w-2xl mx-auto px-20">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border hover:border-gray-100 text-gray-300 border-gray-300 hover:text-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src={images[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border hover:border-gray-100 text-gray-300 border-gray-300 hover:text-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;



const images = [
  '/images/gcp_certificate.jpg',
  '/images/React_certificate.jpg',
  '/images/Javascript_certificate.jpg',
  '/images/React_certificate.jpg',
  '/images/Javascript_certificate.jpg',
  '/images/Javascript_certificate.jpg',
];