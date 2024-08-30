import React from "react";
import CardWithImage from "../../common/molecules/CardWithImage";

const WhyChooseUs = () => {
  return (
    <div>
      <h2>Why Choose RENT?</h2>
      <div className="flex gap-5">
        <CardWithImage />
        <CardWithImage />
        <CardWithImage />
      </div>
    </div>
  );
};

export default WhyChooseUs;
