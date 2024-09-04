import React from "react";
import ContactUsSection from "../components/features/aboutUsPage/ContactUsSection";
import AboutCompanySection from "../components/features/aboutUsPage/AboutCompanySection";
import OurTeamSection from "../components/features/aboutUsPage/OurTeamSection";
import CarTypesSection from "../components/features/aboutUsPage/CarTypesSection";

const AboutUsPage = () => {
  return (
    <div>
      <AboutCompanySection />
      <CarTypesSection />
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default AboutUsPage;
