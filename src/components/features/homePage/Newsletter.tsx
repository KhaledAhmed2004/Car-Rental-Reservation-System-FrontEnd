import React, { useState } from "react";

const Newsletter = () => {
  // State for managing email input and subscription status
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset error and simulate a successful subscription
    setError("");
    setIsSubscribed(true);

    // You can replace the following line with actual API integration
    console.log(`Subscribed with email: ${email}`);

    // Clear the email input after subscription
    setEmail("");
  };

  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated with the Latest Offers
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get exclusive deals, discounts, and car rental tips straight to your
          inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 border-2 border-gray-300 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>

        {/* Display success or error message */}
        {isSubscribed && (
          <p className="mt-4 text-green-600 font-semibold">
            Thank you for subscribing!
          </p>
        )}
        {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
