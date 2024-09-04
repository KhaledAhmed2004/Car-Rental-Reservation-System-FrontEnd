import React from "react";
import ContactUsSection from "../components/features/aboutUsPage/ContactUsSection";
import AboutCompanySection from "../components/features/aboutUsPage/AboutCompanySection";
import OurTeamSection from "../components/features/aboutUsPage/OurTeamSection";

const AboutUsPage = () => {
  return (
    <div>
      <AboutCompanySection />
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default AboutUsPage;
