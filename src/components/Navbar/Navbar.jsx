import React from "react";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { GiLoincloth } from "react-icons/gi";
import {Link } from 'react-router-dom'

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top_rated",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids_wear",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/mens_wear",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/electronics",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best_selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top_rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-[#334156] py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-white text-xl items-center flex gap-1">
              <GiLoincloth size="40" />
              Vastraa
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-white from-primary to-secondary transition-all duration-200 text-black  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              {/* <DarkMode /> */}
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <Link to='/' className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
