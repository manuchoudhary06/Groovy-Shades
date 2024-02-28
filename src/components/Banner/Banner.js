import "./Banner.scss";
import Carousel from "./Banner-Components/Carousel/Carousel";
import Brands from "./Banner-Components/Brands-Banner/Brands";

const Banner = () => {

  return (
    <div className="banner">
      <Carousel>
      <div className="slide">
        <div className="overlay">
          <h2>Your Sports Optician</h2>
          <p>Get personalized product<br />advice from a passionate expert</p>
          <div className="banner-button custom-button"> <a href="/shopby/brand-sportrx/product_type-sunglasses.html" tabIndex="0"> <span>Connect Now</span> </a>
          </div>
        </div>
        <img src="https://www.sportrx.com/media/forix/bannerslider/images/p/r/prez75-desktop-2024.jpg" alt="Slide 1"/>
      </div>
      {/* Second Slide */}
      <div className="slide">
        <div className="overlay">
          <h2>Groovy Eyewear</h2>
          <p>Starting at $99 with Prescription</p>
          <div className="banner-button custom-button"> <a href="/shopby/brand-sportrx/product_type-sunglasses.html" tabIndex="0"> <span>Shop Sunglasses</span> </a>
            <a href="/shopby/brand-sportrx/product_type-eyeglasses.html" tabIndex="0"> <span>Shop Eyeglasses</span> </a>
          </div>
        </div>
        <img src="https://www.sportrx.com/media/forix/bannerslider/images/s/p/sportrx-brand-eyewear.jpg" alt="Slide 2"/>
      </div>
      {/* Third Slide */}
      <div className="slide">
        <div className="overlay">
          <h2>Prescription Replacement Lenses</h2>
          <p>Refresh your favorite frames</p>
          <div className="banner-button custom-button"> <a href="/shopby/brand-sportrx/product_type-sunglasses.html" tabIndex="0"> <span>Get Started</span> </a> </div>
        </div>
        <img src="https://www.sportrx.com/media/forix/bannerslider/images/p/r/prescription-replacement-lenses-desktop.jpg" alt="Slide 3"/>
      </div>
      {/* Fourth Slide */}
      <div className="slide">
        <div className="overlay">
          <h2>Prescription Inserts For Any Goggle</h2>
          <p>Snow, motocross, & MTB goggles. We've got you covered.</p>
          <div className="banner-button custom-button"> <a href="/shopby/brand-sportrx/product_type-sunglasses.html" tabIndex="0"> <span>Learn More</span> </a> </div>
        </div>
        <img src="https://www.sportrx.com/media/forix/bannerslider/images/p/r/prescription-goggle-inserts-desktop.jpg" alt="Slide 4"/>
      </div>
      </Carousel>
      <Brands/>
    </div>
  );
};

export default Banner;
