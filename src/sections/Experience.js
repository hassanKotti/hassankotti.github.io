import React from "react";
import experiance from "../assets/svg/experiance.svg";
import {
  BriefcaseIcon,
  ClockIcon,
  LocationMarkerIcon,
  LibraryIcon,
  UserIcon,
  PhoneIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";
const Experience = () => {
  return (
    <section
      className='relative max-w-8xl mb-6 text-left px-8 mx-auto sm:px-12 lg:px-20 z-10 experience'
      id='experience'>
      <div className='z-100'>
        <h3 class='py-6 px-8 mx-auto sm:px-12 lg:px-20 text-xl font-extrabold leading-8  uppercase text-stone-500  sm:text-2xl lg:text-3xl tracking-tight text-center z-100'>
          Experience
        </h3>
        <div class='items-center justify-between lg:flex z-100'>
          <div class='flex-1 text-left py-4 space-y-2 '>
            <div class='flex-1 text-left py-4 space-y-2 '>
              <div className='flex items-center'>
                <BriefcaseIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p className='text-base font-normal leading-6 text-stone-700 '>
                  Sr. Web Developer
                </p>
              </div>
              <div className='flex items-start lg:items-center '>
                <LibraryIcon className='h-7 w-7 mr-2 text-stone-700' />
                <a
                  href='https://ust.edu.sd'
                  className='text-base font-normal font-base text-stone-500 break-words'>
                  University of Science and Technology
                </a>
              </div>
              <div className='flex items-center'>
                <ClockIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p className='text-base text-stone-700 '>10/2017 - 04/2021</p>
              </div>
              <div className='flex items-center'>
                <LocationMarkerIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p className='text-base font-base text-stone-700 '>
                  Omdurman, Sudan
                </p>
              </div>
              <p class='text-base font-base text-stone-700 border-b pb-1'>
                Reference
              </p>
              <div class='flex items-center justify-start'>
                <UserIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p class='text-base text-stone-700'>Ammar M. Abdu</p>
              </div>
              <div class='flex items-center justify-start'>
                <BriefcaseIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p class='text-base text-stone-700'>Software Unit Head</p>
              </div>
              <div class='flex items-center justify-start'>
                <PhoneIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p class='text-base text-stone-700'>+249912138226</p>
              </div>
              <div class='flex items-center justify-start'>
                <AtSymbolIcon className='h-7 w-7 mr-2 text-stone-700' />
                <p class='text-base text-stone-700'>ammarabdu@hotmail.com</p>
              </div>
            </div>
          </div>
          <div class='flex-1'>
            <img src={experiance} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
