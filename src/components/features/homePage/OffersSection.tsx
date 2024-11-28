import React from "react";

const OfferSection = () => {
  const offers = [
    {
      title: "20% Off on SUVs",
      description:
        "Book now and get 20% off on all SUV rentals. Limited time offer!",
      buttonText: "Grab Offer",
      bgColor: "bg-blue-500",
    },
    {
      title: "Weekend Special",
      description: "Get free GPS and unlimited mileage for weekend bookings.",
      buttonText: "Book Now",
      bgColor: "bg-green-500",
    },
    {
      title: "Family Pack Deal",
      description: "Special rates for family cars! Plan your next trip today.",
      buttonText: "Explore",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Exclusive Offers
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Don’t miss out on these amazing deals for your next trip!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-white ${offer.bgColor}`}
            >
              <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
              <p className="mb-4">{offer.description}</p>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition">
                {offer.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
