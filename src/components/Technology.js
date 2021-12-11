import React from "react";
import { Icon } from "@iconify/react";

const Technology = ({ icon, title, percentage }) => {

  return (
    <div className='relative px-6 pt-10 pb-8 bg-white shadow-xl w-72  ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10'>
      <div className='max-w-md mx-auto'>
        <div className='flex items-center justify-start w-full py-4 space-x-3'>
          <Icon
            icon={icon}
            class='w-auto h-12 fill-current text-stone-900  hover:text-indigo-900 '
            height='3rem'
            color='rgb(79 70 229)'
          />
          <div className='relative w-full pt-1 text-left'>
            <div className='flex items-center justify-between mb-2'>
              <div>
                <span className='inline-block px-2 py-1 text-xs font-semibold text-indigo-600 uppercase'>
                  {title}
                </span>
              </div>
              <div className='text-right'>
                <span className='inline-block text-xs font-semibold text-indigo-600'>
                  {percentage}%
                </span>
              </div>
            </div>
            <div className='flex h-2 mb-4 overflow-hidden text-xs bg-indigo-200 rounded '>
              <div
                className='flex flex-col justify-center text-center text-white bg-indigo-500 shadow-none whitespace-nowrap'
                style={{ width: percentage }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
