import React from "react";
import NavMenu from "../molecules/NavMenu";
import AuthButtons from "../molecules/AuthButtons";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <header className="flex h-20 justify-between items-center">
      <Logo />
      <NavMenu />
      <AuthButtons />
    </header>
  );
};

export default Header;
