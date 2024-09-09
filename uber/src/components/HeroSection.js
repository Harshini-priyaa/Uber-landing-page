import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://www.uber-assets.com/images/landing-page-bg.jpg')`,
        }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Move the way you want
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          Whether you’re heading out with friends or moving things across town,
          get there with Uber.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
