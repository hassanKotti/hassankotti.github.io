import React from "react";
import experiance from "../assets/svg/experiance.svg";
import beams from "../assets/beams3.jpg";

const Experience = () => {
  return (
    <section
      className='relative max-w-8xl mx-auto border-t text-left  snap-start '
      id='experience'>
      <div className='min-h-screen  py-6 flex flex-col justify-center relative overflow-hidden sm:py-12'>
        <img
          src={beams}
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-center'
        />
        <div className='absolute  inset-0 bg-grid-2 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>

        <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-3xl font-extrabold leading-8  uppercase text-stone-900  sm:text-5xl lg:text-6xl tracking-tight text-center'>
          Experience
        </h3>
        <div className='px-8 mx-auto sm:px-12 lg:px-20'>
          <div className='bg-white border shadow-lg rounded-lg py-5 px-6 relative'>
            <div className='absolute inset-x-0 inset-y-5 border-t border-b border-gray-100 pointer-events-none'></div>
            <div className='absolute inset-x-6 inset-y-0 border-l border-r border-gray-100 pointer-events-none'></div>
            <div className='lg:flex bg-gray-50 justify-center items-center overflow-hidden '>
              <div className=' overflow-hidden py-6 sm:py-9 lg:py-6 xl:py-9 px-6'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 mr-2 text-stone-700 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                  </svg>
                  <p className='text-base font-normal leading-6 text-stone-700 '>
                    Sr. Web Developer
                  </p>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 mr-2 text-stone-700 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
                  </svg>
                  <a
                    href='https://ust.edu.sd'
                    className='text-base font-normal font-base text-stone-500 '>
                    University of Science and Technology - Information Center{" "}
                  </a>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 mr-2 text-stone-700 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                  </svg>
                  <p className='text-base text-stone-700 '>10/2017 - 04/2021</p>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 mr-2 text-stone-700 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                  </svg>
                  <p className='text-base font-base text-stone-700 '>
                    Omdurman, Sudan
                  </p>
                </div>
                <div className='px-3 py-2 mt-6'>
                  <span className='font-mono text-md leading-5 pb-1 border-b border-gray-200 w-ful'>
                    {" "}
                    Reference{" "}
                  </span>
                  <p className='text-base text-stone-700 mt-2'>
                    Ammar M. Abdu Development Unit Head - information Center
                  </p>
                  <div className='flex items-center justify-start space-x-4'>
                    <div className='flex items-center justify-start'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 mr-2 text-stone-700 '
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                      </svg>
                      <p className='text-base text-stone-700 '>+249912355655</p>
                    </div>
                    <div className='flex items-center justify-start'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 mr-2 text-stone-700 '
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'></path>
                      </svg>
                      <p className='text-base text-stone-700 '>
                        amarabdu2010@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={experiance} alt='' srcSet='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
