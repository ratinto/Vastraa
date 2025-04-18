import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rohit",
    text: "This platform truly exceeded my expectations. The experience was smooth, stylish, and exactly what I was looking for.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Manisha",
    text: "A seamless blend of innovation and user experience. I appreciate the attention to detail and quality throughout.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ritesh",
    text: "Absolutely loved it! Fast, reliable, and top-notch service — just like a perfectly timed cover drive.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Aditya",
    text: "Precision and excellence at every step. This is the kind of quality that wins hearts — truly memorable.",
    img: "https://picsum.photos/103/103",
  },
  
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Hear from real customers who’ve experienced the quality, speed, and satisfaction we aim to deliver with every order.
          </p>
        </div>

        {/* Testimonial cards */}
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
