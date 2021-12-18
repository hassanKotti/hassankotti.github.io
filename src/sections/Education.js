import React from "react";
import education from "../assets/svg/education.svg";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  LocationMarkerIcon,
  LibraryIcon,
  TrendingUpIcon,
  UserIcon,
  PhoneIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";

const Education = () => {
  return (
    <section
      class='relative max-w-8xl mb-6 text-left z-10 px-8 mx-auto sm:px-12 lg:px-20 snap-start bg-white education'
      id='education'>
      <div className='z-100'>
        <h3 class='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-100 text-xl font-extrabold leading-8  uppercase text-stone-500  sm:text-2xl lg:text-3xl tracking-tight text-center'>
          EDUCATION
        </h3>
        <div class='items-center justify-between lg:flex'>
          <div class='flex-1'>
            <img src={education} alt='' srcset='' />
          </div>

          <div class='flex-1 text-left py-4 space-y-2 '>
            <div class='flex items-center'>
              <AcademicCapIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base font-normal leading-6 text-stone-700'>
                Information Technoloy BS.c
              </p>
            </div>
            <div class='flex items-center'>
              <LibraryIcon className='h-7 w-7 mr-2 text-stone-700' />
              <a
                href='https://ust.edu.sd'
                class='text-base font-normal font-base text-mine-shaft-500'>
                University of Science and Technology
              </a>
            </div>
            <div class='flex items-center'>
              <ClockIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base text-stone-700'>10/2013 - 09/2017</p>
            </div>
            <div class='flex items-center'>
              <LocationMarkerIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base font-base text-stone-700'>Omdurman, Sudan</p>
            </div>
            <div class='flex items-center'>
              <TrendingUpIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base font-base text-stone-700'>
                Very Good 3.47 of 4.00
              </p>
            </div>
            <p class='text-base font-base text-stone-700 border-b pb-1'>
              Reference
            </p>
            <div class='flex items-center justify-start'>
              <UserIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base text-stone-700'>Nour Aldein Abdularahman</p>
            </div>
            <div class='flex items-center justify-start'>
              <BriefcaseIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base text-stone-700'>Faculty Dean</p>
            </div>
            <div class='flex items-center justify-start'>
              <PhoneIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base text-stone-700'>+249912138226</p>
            </div>
            <div class='flex items-center justify-start'>
              <AtSymbolIcon className='h-7 w-7 mr-2 text-stone-700' />
              <p class='text-base text-stone-700'>noureldien@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
