import React from "react";
import Heading from "../../common/atoms/Heading";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <div>
      <Heading>What Customers saying</Heading>

      <Marquee speed={70} autoFill={true} pauseOnHover={true} gradient={true}>
        <div className="flex justify-between items-center">
          <TestimonialCard
            author={"Author"}
            review={"Mmaxime esse,iusto autem itaque ea veritatis quo harum."}
          />
          <TestimonialCard
            author={"Author"}
            review={
              "Mmaxime esse,iusto adfe aeidk adke sxe  loink autem itaque ea veritatis quo harum."
            }
          />
        </div>
      </Marquee>
    </div>
  );
};

export default TestimonialSection;
