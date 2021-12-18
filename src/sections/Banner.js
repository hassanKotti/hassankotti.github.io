import React from "react";
import SocialLinks from "../components/SocialLinks";
import DownloadCV from "../components/DownloadCV";
const Banner = () => {
  return (
    <section className='relative mx-auto' id='banner'>
      <div class='block mt-24 overflow-hidden z-100'>
        <div className='items-center justify-center w-full py-3 lg:justify-between lg:flex px-6'>
          <div className="flex justify-center shrink-0">
            <SocialLinks />
          </div>
          <div class='lg:mt-0 mt-6'>
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
