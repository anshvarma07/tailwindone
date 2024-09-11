import React, { useState, useEffect } from 'react';
import img2 from '../Assets/139.png';
import img3 from '../Assets/140.png';
import img4 from '../Assets/141.png';
import img5 from '../Assets/142.png';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Innovative Solutions", subtitle: "For Your Legal Needs", img: img2 },
    { title: "Expert Advocacy", subtitle: "Personalized Approach", img: img3 },
    { title: "Protecting Your Rights", subtitle: "Securing Your Future", img: img4 },
    { title: "Legal Excellence", subtitle: "Tailored to You", img: img5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-[#235951]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[15%]"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'contain',  // Ensures the image is fully visible
              backgroundRepeat: 'no-repeat',  // Prevents tiling
              backgroundPosition: 'center',  // Centers the image
              height: '120%',  // Optional: ensures it stretches fully within the div
              width: '100%'    // Optional: ensures it stretches fully within the div
            }}
          ></div>
          <div className="relative h-full flex flex-col items-center justify-center z-10">
            <h2 className="text-[gold] text-4xl md:text-6xl font-bold mb-4 text-center">
              {slide.title}
            </h2>
            <p className="text-white text-2xl md:text-4xl font-semibold mb-8 text-center">
              {slide.subtitle}
            </p>
            <button className="bg-white text-[#235951] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition duration-300 z-20"
      >
        &#8249;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition duration-300 z-20"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Banner;
