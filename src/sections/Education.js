import React from "react";
import education from "../assets/education.svg";
import SocialLinks from "../components/SocialLinks";
import DownloadCV from "../components/DownloadCV";
const Education = () => {
  return (
    <section
      class='relative max-w-8xl mb-6 text-left px-8 mx-auto sm:px-12 lg:px-20 snap-start '
      id='education'>
      <div class='block mt-24 overflow-hidden'>
        <div className='items-center justify-center w-full py-3 lg:justify-between lg:flex px-6'>
          <div>
            <SocialLinks />
          </div>
          <div class='lg:mt-0 mt-6'>
            <DownloadCV />
          </div>
        </div>
      </div>
      <div class='items-center justify-between lg:flex'>
        <div class='flex-1'>
          <img src={education} alt='' srcset='' />
        </div>

        <div class='flex-1 text-left py-4space-y-2 '>
          <h3 class='pb-6 text-3xl font-extrabold leading-8 tracking-tight text-mine-shaft-900 sm:text-4xl dark:text-mine-shaft-300'>
            EDUCATION
          </h3>
          <div class='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-6 h-6 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
            </svg>
            <p class='text-base font-normal leading-6 text-mine-shaft-700 dark:text-mine-shaft-300'>
              Information Technoloy BS.c
            </p>
          </div>
          <div class='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
            </svg>
            <a
              href='https://ust.edu.sd'
              class='text-base font-normal font-base text-mine-shaft-500 dark:text-mine-shaft-300'>
              University of Science and Technology (Sudan){" "}
            </a>
          </div>
          <div class='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
            </svg>
            <p class='text-base text-mine-shaft-700 dark:text-mine-shaft-300'>
              10/2013 - 09/2017
            </p>
          </div>
          <div class='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
            </svg>
            <p class='text-base font-base text-mine-shaft-700 dark:text-mine-shaft-300'>
              Omdurman, Sudan
            </p>
          </div>
          <div class='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path>
            </svg>
            <p class='text-base font-base text-mine-shaft-700 dark:text-mine-shaft-300'>
              Very Good 3.47 of 4.00
            </p>
          </div>
          <div class='px-3 py-2 mt-6 border rounded-lg dark:border-mine-shaft-500'>
            <p class='text-base text-mine-shaft-700 dark:text-mine-shaft-300'>
              Reference :<br />
              Nour Aldein Abdularahman - Faculty Dean
            </p>
            <div class='flex items-center justify-start space-x-4'>
              <div class='flex items-center justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                </svg>

                <p class='text-base text-mine-shaft-700 dark:text-mine-shaft-300'>
                  +249912138226
                </p>
              </div>
              <div class='flex items-center justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 mr-2 text-mine-shaft-700 dark:text-mine-shaft-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'></path>
                </svg>
                <p class='text-base text-mine-shaft-700 dark:text-mine-shaft-300'>
                  noureldien@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
