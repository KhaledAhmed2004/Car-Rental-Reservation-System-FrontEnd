import React from "react";
import CardWithImage from "../../common/molecules/CardWithImage";
import Heading from "../../common/atoms/Heading";
import { motion } from "framer-motion";
import locationAnimationData from "../../../assets/locationAnimation.json";
import costomerAnimationData from "../../../assets/costomerAnimation.json";
import bookingAnimationData from "../../../assets/bookingAnimation.json";

const WhyChooseUs = () => {
  return (
    <section className="px-4 py-8">
      <Heading>Why Choose RENT?</Heading>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ staggerChildren: 0.3, duration: 0.5 }}
        className="flex flex-col gap-8 sm:flex-row sm:gap-5 justify-center"
      >
        <CardWithImage
          heading={"Fast & Easy Booking"}
          animationData={bookingAnimationData}
          discripction={
            "Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere."
          }
        />
        <CardWithImage
          heading={"Many Pickup Locations"}
          animationData={locationAnimationData}
          discripction={
            "Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective."
          }
        />
        <CardWithImage
          heading={"Customer Satisfaction"}
          animationData={costomerAnimationData}
          discripction={
            "Globally user-centric method interactive. Seamlessly revolutionize unique portals corporate collaboration."
          }
        />
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
