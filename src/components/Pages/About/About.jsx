import React from "react";

function About() {
  return (
    <div>
      <div className="bg-[#F9F8F4] text-gray-800 py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-lg mb-6 text-center text-gray-600 max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-primary">Vastraa</span> — where
            fashion meets tradition. We're on a mission to redefine style by
            offering quality clothing that reflects both heritage and modernity.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                At Vastraa, we believe clothing is more than just fabric — it's
                a form of expression. We are a passionate team of designers and
                creators committed to curating apparel that blends comfort,
                elegance, and authenticity.
              </p>
              <p className="text-gray-700">
                From everyday casual wear to exclusive festive collections,
                every product is thoughtfully designed to complement your
                lifestyle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2025, Vastraa started as a small boutique with a
                big dream. Over the years, we’ve grown into a brand trusted by
                thousands, known for quality, affordability, and timeless style.
              </p>
              <p className="text-gray-700">
                Whether you're shopping online or visiting us in person, our
                mission remains the same: to offer fashion that empowers and
                inspires.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Vastraa?</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2 max-w-2xl mx-auto text-left">
              <li>Premium fabrics & sustainable materials</li>
              <li>Crafted by skilled artisans and modern designers</li>
              <li>Fast shipping and easy returns</li>
              <li>Excellent customer service & support</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Stay Connected
            </h2>
            <p className="text-gray-600">
              Follow us on social media and subscribe to our newsletter to stay
              updated on the latest drops, trends, and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
