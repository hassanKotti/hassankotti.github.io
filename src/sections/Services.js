import React from "react";

const Services = () => {
  return (
    <section
      className='relative max-w-8xl  text-left  snap-start snap-always'
      id='services'>
      <div className='min-h-screen bg-white  py-6 flex flex-col justify-center relative overflow-hidden sm:py-12'>
        <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-3xl font-extrabold leading-8  uppercase text-stone-900  sm:text-5xl lg:text-6xl tracking-tight text-center'>
          What I do ?
        </h3>
        <div className='flex items-center justify-start bg-stone-0  px-8 mx-auto sm:px-12 lg:px-20'>
          <div className='grid gap-6 lg:grid-cols-3'>
            <div className='flex flex-col items-start justify-start px-6 py-4 text-left'>
              <span className='my-6'>
                <svg
                  className='w-12 h-10 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17 21H7V19H9V18H3C1.89543 18 1 17.1046 1 16V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H15V19H17V21ZM3 5V16H21V5H3Z'
                    fill-opacity='.1'></path>
                  <path
                    d='M17 21H7V19H9V18H3C1.89543 18 1 17.1046 1 16V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H15V19H17V21ZM3 5V16H21V5H3Z'
                    fill-opacity='.1'
                    stroke='currentColor'></path>
                </svg>
              </span>
              <span className='my-3 text-xl font-medium leading-6 text-blue-500'>
                UI/UX Design
              </span>
              <p className='mt-2 text-base text-stone-500'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
            <div className='flex flex-col items-start justify-start px-6 py-4 text-left'>
              <span className='my-6'>
                <svg
                  className='w-12 h-10 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17 23H7C5.89543 23 5 22.1046 5 21V2.913C5.04661 1.84255 5.92853 0.998988 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23ZM7 3V21H17V3H15C15 4.10457 14.1046 5 13 5H11C9.89543 5 9 4.10457 9 3H7Z'
                    fill-opacity='.1'></path>
                  <path
                    d='M17 23H7C5.89543 23 5 22.1046 5 21V2.913C5.04661 1.84255 5.92853 0.998988 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23ZM7 3V21H17V3H15C15 4.10457 14.1046 5 13 5H11C9.89543 5 9 4.10457 9 3H7Z'
                    fill-opacity='.1'
                    stroke='currentColor'></path>
                </svg>
              </span>
              <span className='my-3 text-xl font-medium leading-6 text-blue-500'>
                Mobile Development
              </span>
              <p className='mt-2 text-base text-stone-500'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
            <div className='flex flex-col items-start justify-start px-6 py-4 text-left'>
              <span className='my-6'>
                <svg
                  className='w-12 h-10 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z'
                    fill-opacity='.1'></path>
                  <path
                    d='M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z'
                    fill-opacity='.1'
                    stroke='currentColor'></path>
                </svg>
              </span>
              <span className='my-3 text-xl font-medium leading-6 text-blue-500'>
                Web Apps
              </span>
              <p className='mt-2 text-base text-stone-500 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
