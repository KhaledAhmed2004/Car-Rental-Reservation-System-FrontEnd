import React from "react";
import HeroSection from "../components/features/homePage/HeroSection";
import WhyChooseUs from "../components/features/homePage/WhyChooseUs";
import FeaturedCarsSection from "../components/features/homePage/FeaturedCarsSection";
import TestimonialSection from "../components/features/homePage/TestimonialSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyChooseUs />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
