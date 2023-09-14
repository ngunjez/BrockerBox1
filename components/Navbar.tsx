import { NavLinks, NavLogo, NavbarContainer } from "@/styles/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo>
        <NavLinks>
          <Link href="/">About Us</Link>
          <Link href="/">Why Us</Link>
        </NavLinks>
      </NavLogo>
    </NavbarContainer>
  );
};

export default Navbar;
