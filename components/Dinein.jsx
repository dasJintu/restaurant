import React from "react";

const Dinein = () => {
  return (
    <div className="container text-center my-24">
      <h2 className="text-2xl font-serif italic text-red-500 mb-6">
        come dine in
      </h2>
      <h1 className="text-3xl font-serif text-gray-800">HOURS & LOCATION</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-16 my-8">
        <div>
          <h2 className="font-serif font-semibold text-red-500 mb-3">
            Monday — Friday
          </h2>
          <p>11am — 9pm</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-red-500 mb-3">
            Saturday
          </h2>
          <p>12pm — 6pm</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-red-500 mb-3">Sunday</h2>
          <p>​12pm — 5pm</p>
        </div>
      </div>
      <div className="mt-20 space-y-2 font-serif font-semibold text-gray-800">
        <h2 className="text-2xl  text-red-500">GRASSFED GRILL</h2>
        <p>1327 East Halik Street</p>
        <p>​Pearland, TX 99387</p>
        <p>​(818) 033-2016</p>
      </div>
    </div>
  );
};

export default Dinein;
