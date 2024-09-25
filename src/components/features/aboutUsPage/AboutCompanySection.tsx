// import React from "react";
// import { TbTargetArrow } from "react-icons/tb";
// import { PiMountainsDuotone } from "react-icons/pi";
// import { FaQuestion } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const AboutCompanySection = () => {
//   // Animations
//   const sectionHeaderAnimation = {
//     hidden: {
//       opacity: 0,
//     },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const sectionHeaderItemAnimation = {
//     hidden: { x: 20, opacity: 0 },
//     show: { x: 0, opacity: 1 },
//   };

//   const informationBlocksAnimation = {
//     hidden: {
//       opacity: 0,
//     },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.8,
//       },
//     },
//   };

//   const informationBlocksItemAnimation = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1 },
//   };

//   return (
//     <div className="flex gap-10 py-10">
//       {/* Left section: Background image */}
//       <motion.div
//         initial={{ x: -20, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="flex-1 bg-[url(./assets/companyCars.jpg)] bg-center bg-cover bg-no-repeat rounded-3xl"
//       ></motion.div>

//       {/* Right section: Company information */}
//       <motion.div
//         variants={sectionHeaderAnimation}
//         initial="hidden"
//         animate="show"
//         className="flex-1"
//       >
//         {/* Section Header */}
//         <motion.h2
//           variants={sectionHeaderItemAnimation}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="text-2xl font-light"
//         >
//           RENT
//         </motion.h2>
//         <motion.h2
//           variants={sectionHeaderItemAnimation}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="font-semibold text-3xl"
//         >
//           More Than Just a Car Rental Company
//         </motion.h2>
//         <motion.p variants={sectionHeaderItemAnimation} className="mt-2">
//           Founded in 2024, Rent's mission is to provide a seamless, superior car
//           rental experience. Our vision goes beyond offering quality vehicles—we
//           deliver reliability, comfort, and a sense of adventure for every
//           journey.
//         </motion.p>

//         {/* Information Blocks */}
//         <motion.div
//           variants={informationBlocksAnimation}
//           initial="hidden"
//           animate="show"
//           className="space-y-4 mt-6"
//         >
//           {/* Why Choose Us */}
//           <InfoBlock
//             icon={<FaQuestion className="text-[80px]" />}
//             title="Why Choose Rent?"
//             description="Customers first. Every car is inspected for safety, cleanliness, and reliability, ensuring a top-tier experience."
//             variants={informationBlocksItemAnimation} // Pass variants to InfoBlock
//           />

//           {/* Our Vision */}
//           <InfoBlock
//             icon={<TbTargetArrow className="text-[80px]" />}
//             title="Our Vision"
//             description="To be the most trusted car rental company, offering freedom and confidence for every traveler."
//             variants={informationBlocksItemAnimation} // Pass variants to InfoBlock
//           />

//           {/* Our Mission */}
//           <InfoBlock
//             icon={<PiMountainsDuotone className="text-[80px]" />}
//             title="Our Mission"
//             description="To transform car rentals with outstanding service, quality vehicles, and a seamless process."
//             variants={informationBlocksItemAnimation} // Pass variants to InfoBlock
//           />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// // InfoBlock component to render icon, title, and description
// const InfoBlock = ({ icon, title, description, variants }) => (
//   <motion.div
//     variants={variants} // Use the variants prop
//     className="flex items-center gap-4"
//   >
//     <div>{icon}</div>
//     <div>
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p>{description}</p>
//     </div>
//   </motion.div>
// );

// export default AboutCompanySection;

import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { PiMountainsDuotone } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutCompanySection = () => {
  // Animations
  const sectionHeaderAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionHeaderItemAnimation = {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const informationBlocksAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const informationBlocksItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-10 py-10 px-4">
      {/* Left section: Background image */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-[url(./assets/companyCars.jpg)] bg-center bg-cover bg-no-repeat rounded-3xl h-64 lg:h-[500px]"
      ></motion.div>

      {/* Right section: Company information */}
      <motion.div
        variants={sectionHeaderAnimation}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2"
      >
        {/* Section Header */}
        <motion.h2
          variants={sectionHeaderItemAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl lg:text-2xl font-light text-center lg:text-left"
        >
          RENT
        </motion.h2>
        <motion.h2
          variants={sectionHeaderItemAnimation}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-semibold text-2xl lg:text-3xl text-center lg:text-left mt-2"
        >
          More Than Just a Car Rental Company
        </motion.h2>
        <motion.p
          variants={sectionHeaderItemAnimation}
          className="mt-4 text-sm lg:text-base text-center lg:text-left"
        >
          Founded in 2024, Rent's mission is to provide a seamless, superior car
          rental experience. Our vision goes beyond offering quality vehicles—we
          deliver reliability, comfort, and a sense of adventure for every
          journey.
        </motion.p>

        {/* Information Blocks */}
        <motion.div
          variants={informationBlocksAnimation}
          initial="hidden"
          animate="show"
          className="space-y-6 mt-6"
        >
          {/* Why Choose Us */}
          <InfoBlock
            icon={
              <FaQuestion className="text-[60px] sm:text-[70px] lg:text-[80px]" />
            }
            title="Why Choose Rent?"
            description="Customers first. Every car is inspected for safety, cleanliness, and reliability, ensuring a top-tier experience."
            variants={informationBlocksItemAnimation}
          />

          {/* Our Vision */}
          <InfoBlock
            icon={
              <TbTargetArrow className="text-[60px] sm:text-[70px] lg:text-[80px]" />
            }
            title="Our Vision"
            description="To be the most trusted car rental company, offering freedom and confidence for every traveler."
            variants={informationBlocksItemAnimation}
          />

          {/* Our Mission */}
          <InfoBlock
            icon={
              <PiMountainsDuotone className="text-[60px] sm:text-[70px] lg:text-[80px]" />
            }
            title="Our Mission"
            description="To transform car rentals with outstanding service, quality vehicles, and a seamless process."
            variants={informationBlocksItemAnimation}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// InfoBlock component to render icon, title, and description
const InfoBlock = ({ icon, title, description, variants }) => (
  <motion.div variants={variants} className="flex items-start gap-4">
    <div>{icon}</div>
    <div>
      <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  </motion.div>
);

export default AboutCompanySection;
