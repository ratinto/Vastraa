import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Mens_wear({ handleOrderPopup }) {
  const [images, setImages] = useState([]);
  const pexelsAPIKey = "I6zgvtK5WeQZyv76FOUSvO9nWG0PBMFoTpufg3t0n80z5EYBYZ2Xy16w";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=mens+wear', {
          method: 'GET',
          headers: {
            Authorization: pexelsAPIKey,
          },
        });
        const data = await response.json();
        setImages(data.photos); // Set the images
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="text-center mt-[30px] mb-[100px] max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Men's Wear Collection
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover the latest trends in men's fashion for every occasion.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {images.map((image) => (
          <div
            key={image.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* Image Inside Card */}
            <div className="p-4">
              <img
                src={image.src.medium}
                alt={image.alt}
                className="h-[200px] w-full object-contain mx-auto group-hover:scale-105 duration-300"
              />
            </div>

            {/* Details */}
            <div className="p-4 pt-0 text-center">
              {/* Star Rating */}
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <h1 className="text-xl font-bold line-clamp-1">{image.photographer}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {image.alt}
              </p>

              {/* Order Now Button */}
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens_wear;
