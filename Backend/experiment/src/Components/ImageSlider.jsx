import React, { useState, useEffect } from 'react';
import './index.css';

const data = [
  {
    img: "https://origin-staticv2.sonyliv.com/videoasset_images/tanaavs2_5_landscape_thumb1.jpg", // Replace with a valid image URL
    title: "Movie 1",
    description: "A thrilling adventure of discovery and excitement.",
  },
  {
    img: "https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/bloody-daddy-16x9-1687775864575.jpg", // Another valid image URL
    title: "Movie 2",
    description: "An epic story of friendship and perseverance.",
  },
  {
    img: " https://w0.peakpx.com/wallpaper/1012/221/HD-wallpaper-exists-horror-movie-movies.jpg", // Another valid image URL
    title: "Movie 2",
    description: "An epic story of friendship and perseverance.",
  },
];

function OttSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const forward = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const backward = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-black text-white">
      {/* Slider Content */}
      <div className="relative w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src={data[currentIndex].img}
            alt={data[currentIndex].title}
            className="w-full h-auto object-cover transition-transform duration-700 ease-in-out"
          />

          {/* Overlay Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
            <h2 className="text-4xl font-bold">{data[currentIndex].title}</h2>
            <p className="mt-2 max-w-lg">{data[currentIndex].description}</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

        {/* Forward and Backward Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full focus:outline-none transition duration-300"
          onClick={backward}
        >
          {"<"}
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full focus:outline-none transition duration-300"
          onClick={forward}
        >
          {">"}
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentIndex === index ? 'bg-red-600' : 'bg-gray-500'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OttSlider;
