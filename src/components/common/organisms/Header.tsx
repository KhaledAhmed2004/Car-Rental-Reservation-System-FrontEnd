import React from "react";
import NavMenu from "../molecules/NavMenu";
import AuthButtons from "../molecules/AuthButtons";
import Logo from "../atoms/Logo";

const Header = () => {
  const feadInDown = {};
  return (
    <header className="fixed left-0 right-0 bg-white z-[100] border-b">
      <div className="flex h-20  mx-auto max-w-7xl justify-between items-center w-full">
        <Logo />
        <NavMenu />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
