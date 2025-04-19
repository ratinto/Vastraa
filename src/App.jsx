import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import "./App.css";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 10,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F4] dark:bg-gray-900 dark:text-white duration-200">
      <div className="flex-1">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Products />
        <Banner />
        <Subscribe />
        <Testimonials />
        {/* <About /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
