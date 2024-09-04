import React from "react";
import Heading from "../../common/atoms/Heading";
import TeamCard from "../../common/molecules/TeamCard";

const OurTeamSection = () => {
  return (
    <div className="">
      <Heading>Our Team Members</Heading>
      <div className="flex justify-between">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default OurTeamSection;
