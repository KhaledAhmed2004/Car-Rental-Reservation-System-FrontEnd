import React from "react";
import CardWithImage from "../../common/molecules/CardWithImage";
import Heading from "../../common/atoms/Heading";

const WhyChooseUs = () => {
  return (
    <>
      <Heading>Why Choose RENT?</Heading>
      <div className="flex gap-5">
        <CardWithImage />
        <CardWithImage />
        <CardWithImage />
      </div>
    </>
  );
};

export default WhyChooseUs;
