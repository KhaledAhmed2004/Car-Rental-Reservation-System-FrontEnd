import React from "react";
import PrimaryButton from "../../common/atoms/PrimaryButton";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import Heading from "../../common/atoms/Heading";

const ContactUsSection = () => {
  return (
    <div className="py-10 px-4">
      <Heading>Contact Us</Heading>
      <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0 mt-6">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <h3 className="font-semibold text-xl">Get in Touch</h3>
          <p>
            Have something to say? Or any kind of thing you want to tell us?
            Feel free to get in touch.
          </p>
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-2xl" />
            <p>Feni, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMail className="text-2xl" />
            <p>rent@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <BsTelephone className="text-2xl" />
            <p>+880 1881854542</p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex-1">
          <h2 className="text-center text-xl font-semibold mb-4">
            Get In Touch
          </h2>
          <form className="space-y-4">
            {/* Name and Email */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <input
                className="bg-white p-2 w-full rounded-lg focus:outline-none min-w-0"
                type="text"
                placeholder="Your Full Name"
                aria-label="Full Name"
              />
              <input
                className="bg-white p-2 w-full rounded-lg focus:outline-none min-w-0"
                type="text"
                placeholder="Email..."
                aria-label="Email"
              />
            </div>
            {/* Phone and Subject */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <input
                className="bg-white p-2 w-full rounded-lg focus:outline-none min-w-0"
                type="text"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
              <input
                className="bg-white p-2 w-full rounded-lg focus:outline-none min-w-0"
                type="text"
                placeholder="Subject..."
                aria-label="Subject"
              />
            </div>
            {/* Message */}
            <textarea
              className="bg-white p-2 w-full rounded-lg focus:outline-none min-w-0"
              placeholder="Write Your Message..."
              aria-label="Message"
            />
            {/* Button */}
            <div className="text-">
              <PrimaryButton
                label={"Send"}
                onClick={() => {
                  console.log("Contact");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
