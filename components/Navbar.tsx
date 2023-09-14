import { NavLinks, NavLogo, NavbarContainer } from "@/styles/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo>
        <NavLinks>
          <Link href="/">ABOUT US</Link>
          <Link href="/">WHY US</Link>
        </NavLinks>
      </NavLogo>
    </NavbarContainer>
  );
};

export default Navbar;
