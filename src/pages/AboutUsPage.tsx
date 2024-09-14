import React from "react";
import ContactUsSection from "../components/features/aboutUsPage/ContactUsSection";
import AboutCompanySection from "../components/features/aboutUsPage/AboutCompanySection";
import OurTeamSection from "../components/features/aboutUsPage/OurTeamSection";
import CarTypesSection from "../components/features/aboutUsPage/CarTypesSection";
import ValuesAndCommitment from "../components/common/molecules/ValuesAndCommitment";

const AboutUsPage = () => {
  return (
    <div className="pt-4">
      <AboutCompanySection />
      <CarTypesSection />
      {/* <ValuesAndCommitment /> */}
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default AboutUsPage;
