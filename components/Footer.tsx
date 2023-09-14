import {
  CompanyFrame,
  CompanyText,
  Copyright,
  FooterContainer,
  Logo,
  Socials,
  SocialsText,
  Terms,
  TermsText
} from "@/styles/Footer/Footer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo></Logo>
      <CompanyFrame>
        <CompanyText>Company</CompanyText>
        <Link href="/">About Us</Link>
        <Link href="/">Why Us</Link>
      </CompanyFrame>
      <Socials>
        <SocialsText>Socials</SocialsText>
        <Link href="/">LinkedIn</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
      </Socials>
      <Terms>
        <TermsText>Terms & Conditions</TermsText>
        <Link href="/">Privacy notice</Link>
        <Link href="/">Cookie policy</Link>
      </Terms>
      <Copyright> Copyright@Broker Box{new Date().getFullYear()}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
