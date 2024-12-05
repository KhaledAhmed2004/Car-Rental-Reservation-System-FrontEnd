import React from "react";
import HeroSection from "../components/features/homePage/HeroSection";
import WhyChooseUs from "../components/features/homePage/WhyChooseUs";
import FeaturedCarsSection from "../components/features/homePage/FeaturedCarsSection";
import TestimonialSection from "../components/features/homePage/TestimonialSection";
import OffersSection from "../components/features/homePage/OffersSection";
import Newsletter from "../components/features/homePage/Newsletter";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyChooseUs />
      <OffersSection />
      <TestimonialSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;
