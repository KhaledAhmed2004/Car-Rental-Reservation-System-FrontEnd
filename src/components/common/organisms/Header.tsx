import React, { useState } from "react";
import NavMenu from "../molecules/NavMenu";
import AuthButtons from "../molecules/AuthButtons";
import Logo from "../atoms/Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <header className="fixed left-0 right-0 bg-white z-[100] border-b">
      {/* Desktop Navbar */}
      <div className="hidden md:flex h-20 mx-auto max-w-7xl justify-between items-center w-full px-4">
        <Logo />
        <NavMenu />
        <AuthButtons />
      </div>

      {/* Mobile screen navigation icon toggle */}
      <div className="flex md:hidden justify-between items-center h-20 px-4">
        <Logo />
        <div
          onClick={() => setMenuIcon(!menuIcon)}
          className="text-2xl cursor-pointer"
        >
          {menuIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile screen navbar */}
      <div
        className={`${
          menuIcon ? "translate-x-0" : "translate-x-full"
        } md:hidden absolute top-20 right-0 bottom-0 left-0 flex flex-col items-center bg-white text-black transition-transform duration-300 ease-in-out z-[99]  `}
      >
        <NavMenu />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
