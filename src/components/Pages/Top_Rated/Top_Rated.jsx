import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Top_Rated = ({ handleOrderPopup }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="text-center mt-[30px] mb-[100px] max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Top Rated Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Browse our most popular picks with top customer ratings and quality you can trust.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* Image Inside Card */}
            <div className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-[200px] w-full object-contain mx-auto group-hover:scale-105 duration-300"
              />
            </div>

            {/* Details */}
            <div className="p-4 pt-0 text-center">
              {/* Star Rating */}
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <h1 className="text-xl font-bold line-clamp-1">{product.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {product.description}
              </p>

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
};

export default Top_Rated;
