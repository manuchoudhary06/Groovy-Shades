import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => {
      if (prevIndex === React.Children.count(children) - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="slide">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
