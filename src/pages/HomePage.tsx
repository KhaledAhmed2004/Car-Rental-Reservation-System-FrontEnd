import React from "react";
import HeroSection from "../components/features/homePage/HeroSection";
import WhyChooseUs from "../components/features/homePage/WhyChooseUs";
import FeaturedCarsSection from "../components/features/homePage/FeaturedCarsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
