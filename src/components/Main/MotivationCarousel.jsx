import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MotivationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-rainbow mb-6">
        💪 Gachi Motivation 💪
      </h2>
      <Slider {...settings}>
        <div className="p-6 bg-gray-800 rounded-lg text-center">
          <p className="text-xl text-white">"More pain, more gain!"</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg text-center">
          <p className="text-xl text-white">"Discipline is everything!"</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg text-center">
          <p className="text-xl text-white">"Feel the burn, love the pain!"</p>
        </div>
      </Slider>
    </div>
  );
};

export default MotivationCarousel;
