import React from "react";
import Heading from "../../common/atoms/Heading";
import TeamCard from "../../common/molecules/TeamCard";

const OurTeamSection = () => {
  return (
    <div className="py-10 px-4">
      <Heading>Our Team Members</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-6">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default OurTeamSection;
