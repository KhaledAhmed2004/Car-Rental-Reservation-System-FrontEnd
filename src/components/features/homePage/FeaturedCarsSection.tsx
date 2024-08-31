import React from "react";
import ShowcaseCard from "../../common/molecules/ShowcaseCard";
import Heading from "../../common/atoms/Heading";

const FeaturedCarsSection = () => {
  return (
    <>
      {/* <h2 className="text-center text-4xl py-7"> Our Featured Cars</h2> */}
      <Heading>Our Feature Cars</Heading>
      <div className="gap-6 grid grid-cols-4">
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
