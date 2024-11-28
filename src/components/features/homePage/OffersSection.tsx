// // import React from "react";

// // const offers = [
// //   {
// //     id: 1,
// //     carImage: "/path-to-car-image1.jpg",
// //     carName: "Toyota Corolla",
// //     discount: "20% Off",
// //     details: "Free GPS included with a full tank of fuel.",
// //     validity: "Valid until Dec 31, 2024",
// //   },
// //   {
// //     id: 2,
// //     carImage: "/path-to-car-image2.jpg",
// //     carName: "Honda Civic",
// //     discount: "15% Off",
// //     details: "Unlimited mileage and free insurance.",
// //     validity: "Valid until Jan 15, 2025",
// //   },
// //   // Add more offers as needed
// // ];

// // const OffersSection: React.FC = () => {
// //   return (
// //     <section className="py-10 bg-gray-100">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-6">
// //           Exclusive Offers for You!
// //         </h2>
// //         <p className="text-center text-gray-600 mb-8">
// //           Get the best deals on your favorite cars. Limited time offers!
// //         </p>
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {offers.map((offer) => (
// //             <div
// //               key={offer.id}
// //               className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
// //             >
// //               <div className="relative">
// //                 <img
// //                   src={offer.carImage}
// //                   alt={offer.carName}
// //                   className="w-full h-40 object-cover"
// //                 />
// //                 <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded">
// //                   {offer.discount}
// //                 </span>
// //               </div>
// //               <div className="p-4">
// //                 <h3 className="text-xl font-bold mb-2">{offer.carName}</h3>
// //                 <p className="text-sm text-gray-600 mb-2">{offer.details}</p>
// //                 <p className="text-xs text-gray-500 mb-4">{offer.validity}</p>
// //                 <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
// //                   Book Now
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default OffersSection;

// import React from "react";

// const OfferSection = () => {
//   const offers = [
//     {
//       id: 1,
//       carImage: "/images/suv-offer.jpg",
//       title: "20% Off on SUVs",
//       promoCode: "DRIVE20",
//       validity: "Valid till Dec 31, 2024",
//     },
//     {
//       id: 2,
//       carImage: "/images/sedan-offer.jpg",
//       title: "15% Off on Sedans",
//       promoCode: "SEDAN15",
//       validity: "Valid till Jan 15, 2025",
//     },
//     {
//       id: 3,
//       carImage: "/images/sportscar-offer.jpg",
//       title: "10% Off on Sports Cars",
//       promoCode: "SPORT10",
//       validity: "Valid till Nov 30, 2024",
//     },
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-r from-gray-100 to-blue-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Exclusive Offers</h2>
//         <p className="text-lg text-gray-600 mb-10">Grab these amazing deals before they're gone!</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {offers.map((offer) => (
//             <div key={offer.id} className="bg-white shadow-lg rounded-lg p-6">
//               <img
//                 src={offer.carImage}
//                 alt={offer.title}
//                 className="w-full h-40 object-cover rounded-t-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-700">{offer.title}</h3>
//               <p className="text-gray-500 mt-2">Promo Code: <span className="font-bold">{offer.promoCode}</span></p>
//               <p className="text-sm text-gray-400 mt-1">{offer.validity}</p>
//               <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferSection;
import React from "react";

const OfferSection = () => {
  const offers = [
    {
      title: "20% Off on SUVs",
      description: "Book now and get 20% off on all SUV rentals. Limited time offer!",
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
        <h2 className="text-3xl font-bold text-center mb-6">Exclusive Offers</h2>
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
