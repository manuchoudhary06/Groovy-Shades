import "./Banner.scss";

const Banner = () => {
  const carousel = document.querySelector(".carousel-inner");
  let slideIndex = 0;

  function nextSlide() {
    slideIndex++;
    if (slideIndex === carousel.children.length) {
      slideIndex = 0;
    }
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(nextSlide, 3000);
  return (
    <div class="banner">
      <div class="carousel">
        <div class="carousel-inner">
          <div class="slide">
            <img
              src="https://images.pexels.com/photos/1499477/pexels-photo-1499477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 1"
            />
          </div>
          <div class="slide">
            <img
              src="https://images.pexels.com/photos/147641/pexels-photo-147641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 2"
            />
          </div>
          <div class="slide">
            <img
              src="https://images.pexels.com/photos/700728/pexels-photo-700728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
