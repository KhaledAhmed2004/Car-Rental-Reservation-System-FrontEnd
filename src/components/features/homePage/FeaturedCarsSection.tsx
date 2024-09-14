import React from "react";
import ShowcaseCard from "../../common/molecules/ShowcaseCard";
import Heading from "../../common/atoms/Heading";

const FeaturedCarsSection = () => {
  return (
    <>
      <Heading>Our Feature Cars</Heading>
      <div className="gap-6 grid grid-cols-3">
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
      </div>
    </>
  );
};

export default FeaturedCarsSection;
