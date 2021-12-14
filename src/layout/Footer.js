import React from "react";
import SocialLinks from "../components/SocialLinks";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className='text-stone-700  bg-white  body-font relative bottom-0 inset-x-0'>
      <div className='container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row '>
        <Logo />
        <p className='mt-4 text-sm text-stone-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-stone-200 sm:mt-0'>
          © 2021 Hassan Kotti - All Rights Reversed
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
