import React from "react";

const offers = [
  {
    id: 1,
    carImage: "/path-to-car-image1.jpg",
    carName: "Toyota Corolla",
    discount: "20% Off",
    details: "Free GPS included with a full tank of fuel.",
    validity: "Valid until Dec 31, 2024",
  },
  {
    id: 2,
    carImage: "/path-to-car-image2.jpg",
    carName: "Honda Civic",
    discount: "15% Off",
    details: "Unlimited mileage and free insurance.",
    validity: "Valid until Jan 15, 2025",
  },
  // Add more offers as needed
];

const OffersSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Exclusive Offers for You!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Get the best deals on your favorite cars. Limited time offers!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={offer.carImage}
                  alt={offer.carName}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded">
                  {offer.discount}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{offer.carName}</h3>
                <p className="text-sm text-gray-600 mb-2">{offer.details}</p>
                <p className="text-xs text-gray-500 mb-4">{offer.validity}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
