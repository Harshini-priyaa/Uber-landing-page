import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Why Uber?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://www.uber-assets.com/feature1.svg"
              alt="Safe rides"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Safe rides</h3>
            <p className="text-gray-600">
              Safety is a priority in every trip you take with Uber.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://www.uber-assets.com/feature2.svg"
              alt="Affordable"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Affordable</h3>
            <p className="text-gray-600">
              Choose from different trip options that fit your budget.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://www.uber-assets.com/feature3.svg"
              alt="Flexible"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Flexible</h3>
            <p className="text-gray-600">
              Get where you need to be, any time of day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
