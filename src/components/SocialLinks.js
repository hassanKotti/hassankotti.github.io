import React from "react";
import { Icon } from "@iconify/react";
import socialLinkList from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <nav className='inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start'>
      {socialLinkList.map((socialLink) => (
        <a
          href='https://facebook.com/hassan.kotti'
          className='text-stone-400 hover:text-stone-500'
          key={socialLink.name}>
          <span className='sr-only'>{socialLink.name}</span>
          <Icon icon={socialLink.icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
