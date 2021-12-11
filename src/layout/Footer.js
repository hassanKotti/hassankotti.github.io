import React from "react";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  return (
    <footer className="text-stone-700  bg-white  body-font relative bottom-0 inset-x-0">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row ">
        <a
          href="/"
          className="text-xl font-black leading-none text-stone-400 hover:text-stone-500 select-none"
        >
          H<span className="text-stone-400">.</span>K
        </a>

        <p className="mt-4 text-sm text-stone-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-stone-200 sm:mt-0">
          © 2021 Hassan Kotti - All Rights Reversed
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
