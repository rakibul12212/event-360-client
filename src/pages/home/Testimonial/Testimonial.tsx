import Container from "@/components/ui/Container";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const sliderRef = useRef();
  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container>
      <div className="flex sm:flex-wrap justify-between items-center py-[88px]">
        <h1 className="font-extrabold text-[48px]">
          What Our Client Said about us
        </h1>
        <div className="flex gap-3" style={{ textAlign: "center" }}>
          <button
            className="p-5 rounded-full bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600  text-black cursor-pointer  transition-opacity duration-300 ease-in-out"
            onClick={slidePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="p-5 rounded-full bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer  transition-opacity duration-300 ease-in-out"
            onClick={slideNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        <div key={1}>
          <div className="space-y-2 p-5 mx-2 rounded-xl bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer">
            <div className="flex sm:flex-wrap justify-start items-center gap-3">
              <img src="https://i.ibb.co/T1scKJw/Ellipse-80.png" alt="" />
              <div className="space-y-1">
                <h1 className="font-md text-[28px]">Amelia Joseph</h1>
                <p className="text-[20px]">Chief Manager</p>
              </div>
            </div>
            <p className="text-[16px]">
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
        </div>
        <div key={2}>
          <div className="space-y-2 p-5 mx-2 rounded-xl bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <img src="https://i.ibb.co/T1scKJw/Ellipse-80.png" alt="" />
              <div className="space-y-1">
                <h1 className="font-md text-[28px]">Amelia Joseph</h1>
                <p className="text-[20px]">Chief Manager</p>
              </div>
            </div>
            <p className="text-[16px]">
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
        </div>
        <div key={3}>
          <div className="space-y-2 p-5 mx-2 rounded-xl bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <img src="https://i.ibb.co/T1scKJw/Ellipse-80.png" alt="" />
              <div className="space-y-1">
                <h1 className="font-md text-[28px]">Amelia Joseph</h1>
                <p className="text-[20px]">Chief Manager</p>
              </div>
            </div>
            <p className="text-[16px]">
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default Testimonial;
