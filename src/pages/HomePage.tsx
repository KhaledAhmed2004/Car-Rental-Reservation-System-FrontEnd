import React from "react";
import HeroSection from "../components/features/homePage/HeroSection";
import WhyChooseUs from "../components/features/homePage/WhyChooseUs";
import FeaturedCarsSection from "../components/features/homePage/FeaturedCarsSection";
import TestimonialSection from "../components/features/homePage/TestimonialSection";
import OffersSection from "../components/features/homePage/OffersSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyChooseUs />
      <OffersSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
