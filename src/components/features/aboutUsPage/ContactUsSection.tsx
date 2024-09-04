import React from "react";
import PrimaryButton from "../../common/atoms/PrimaryButton";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import Heading from "../../common/atoms/Heading";

const ContactUsSection = () => {
  return (
    <div>
      <Heading>Contact Us</Heading>
      <div className="flex">
        <div className="flex-1">
          <h3 className="font-semibold">Get in Touch</h3>
          <p>
            Have something to say? Or any kind of thing you want to tell use
            then fell free to tell us.
          </p>
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn />
            <p>Feni, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <p>rent@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <BsTelephone />
            <p>+880 1881854542</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-center">Get In Touch</h2>
          <form className="space-y-2">
            <div className="flex w-full gap-2">
              <input
                className="bg-gray-100 p-2 w-full flex-1 rounded-lg"
                type="text"
                placeholder="Your Full Name"
              />
              <input
                className="bg-gray-100 p-2 w-full flex-1 rounded-lg"
                type="text"
                placeholder="Email..."
              />
            </div>
            <div className="w-full flex gap-2">
              <input
                className="bg-gray-100 p-2 flex-1 w-full rounded-lg"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="bg-gray-100 p-2 flex-1 w-full rounded-lg"
                type="text"
                placeholder="Subject..."
              />
            </div>
            <textarea
              className="bg-gray-100 p-2 w-full rounded-lg"
              placeholder="Write Your Message..."
              aria-label="Message"
            />
            <PrimaryButton label={"Send"} onClick={"send"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
