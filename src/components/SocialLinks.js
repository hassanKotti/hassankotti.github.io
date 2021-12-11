import React from "react";
import { Icon } from "@iconify/react";

const socialLinkList = [
  {
    name: "Facebook",
    icon: "simple-icons:facebook",
    link: "https://facebook.com/hassan.kotti",
  },
  {
    name: "Instagram",
    icon: "simple-icons:instagram",
    link: "https://instagram.com/hassan_kotti",
  },
  {
    name: "Twitter",
    icon: "simple-icons:twitter",
    link: "https://twitter.com/hassan_kotti",
  },
  {
    name: "Gmail",
    icon: "simple-icons:gmail",
    link: "mailto:hkotti95@gmail.com",
  },
  {
    name: "Linkedin",
    icon: "simple-icons:linkedin",
    link: "https://www.linkedin.com/in/alhassan-ali-055294134/",
  },
  {
    name: "github",
    icon: "simple-icons:github",
    link: "https://www.github.com/hassankotti",
  },
  {
    name: "behance",
    icon: "simple-icons:behance",
    link: "https://www.behance.net/hassankotti",
  },
  {
    name: "dribbble",
    icon: "simple-icons:dribbble",
    link: "https://www.dribbble.com/hassankotti",
  },
];

const SocialLinks = () => {
  return (
    <nav className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
      {socialLinkList.map((socialLink) => (
        <a
          href="https://facebook.com/hassan.kotti"
          className="text-stone-400 hover:text-stone-500"
          key={socialLink.name}
        >
          <span className="sr-only">{socialLink.name}</span>
          <Icon icon={socialLink.icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
