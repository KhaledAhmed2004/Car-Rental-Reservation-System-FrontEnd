import React from "react";
import { NavLink } from "react-router-dom";

// Array of navigation links for the menu.
const navigationLink = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/aboutUs", label: "About Us" },
  { id: 3, to: "/booking", label: "Booking" },
  { id: 4, to: "/contact", label: "Contact" },
];

const NavMenu = () => {
  return (
    <nav className="flex gap-4">
      {navigationLink.map((link) => (
        <ul key={link.id}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </ul>
      ))}
    </nav>
  );
};

export default NavMenu;
