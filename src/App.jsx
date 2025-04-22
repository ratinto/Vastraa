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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top_Rated from "./components/Pages/Top_Rated/Top_Rated";
import Kids_wear from "./components/Pages/Kids_wear/Kids_wear";
import Mens_wear from "./components/Pages/Mens_wear/Mens_wear";
import Electronics from "./components/Pages/Electronics/Electronics";

const PageLayout = ({ children }) => {
  return <div>{children}</div>;
};

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
      <Router>
        <div className="flex-1">
          <Navbar handleOrderPopup={handleOrderPopup} />

          <Routes>
            <Route
              path="/"
              element={
                <PageLayout>
                  <Hero handleOrderPopup={handleOrderPopup} />
                  <TopProducts handleOrderPopup={handleOrderPopup} />
                  <Products />
                  <Banner />
                  <Subscribe />
                  <Testimonials />
                </PageLayout>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/top_rated" element={<Top_Rated />} />
            <Route path="/kids_wear" element={<Kids_wear />} />
            <Route path="/mens_wear" element={<Mens_wear />} />
            <Route path="/electronics" element={<Electronics />} />
          </Routes>
        </div>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </Router>
    </div>
  );
};

export default App;
