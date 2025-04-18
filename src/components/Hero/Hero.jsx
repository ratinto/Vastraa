import React from "react";
import Image1 from "../../assets/hero/men.png";
import Image2 from "../../assets/hero/women.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Grab the best deals with up to 50% off on stylish and comfortable men's wear. Limited time only!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Explore our latest collection of women's wear and enjoy a flat 30% discount on everything!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Massive clearance! Get up to 70% off on all products across categories. Hurry while stocks last!",
  }
  
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative bg-[#F9F8F4] overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[550px] w-[550px] bg-[#F9F8F4] shadow-2xl	absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] "></div>
      <div className="h-[500px] w-[500px] bg-[#F9F8F4] shadow-2xl absolute -bottom-2/3 left-0 rounded-3xl rotate-45 -z[8] "></div>
      {/* hero section */}
      <div className="container sm:pb-0">
        <Slider className=" mx-auto pl-[50px]" {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 pl-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">
                    {data.description}
                  </p>
                  <div>
                    <button
                      onClick={handleOrderPopup}
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
