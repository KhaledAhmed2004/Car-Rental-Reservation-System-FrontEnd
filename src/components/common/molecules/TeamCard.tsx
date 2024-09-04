import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const TeamCard = () => {
  return (
    <div className="flex flex-col items-center  space-y-2 overflow-hidden rounded-lg group">
      <div className="bg-gray-400 w-[250px] h-[295px] rounded-lg  overflow-hidden relative flex justify-center">
        <div className="bg-[url(./assets/me.png)] bg-cover bg-center bg-no-repeat hover:scale-105 h-full w-full transition-all"></div>
        <div className="bg-gray-500/40 backdrop-blur-sm p-3 rounded-lg gap-5 flex absolute bottom-[-50px] group-hover:bottom-4 transition-all duration-300	">
          <FaFacebookF className="text-2xl text-white" />
          <FaInstagram className="text-2xl text-white" />
          <FaXTwitter className="text-2xl text-white" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-xl">john smith</h3>
        <p className="text-md">senior chauffeur</p>
      </div>
    </div>
  );
};

export default TeamCard;
