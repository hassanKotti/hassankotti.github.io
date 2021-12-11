import React from 'react'

const DownloadCV = () => {
    return (
      <a
        class='flex items-center justify-center px-4 py-2 bg-indigo-500 rounded-full'
        target='blank'
        href='https://hassankotti.github.io/cv/cv.pdf'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='w-6 h-6 text-stone-100'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'></path>
        </svg>
        <span class='ml-2 font-semibold text-stone-100'>Download CV</span>
      </a>
    );
}

export default DownloadCV
