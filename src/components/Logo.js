import React from 'react'

const Logo = () => {
    return (
      <a href='/' className='flex items-center justify-between'>
        <span className='ml-3 text-2xl font-black leading-none uppercase pointer-events-auto select-none text-stone-700 md:ml-5'>
          Hassan
          <span className='font-normal text-stone-600'>Kotti</span>
          <span className='text-indigo-600'>.</span>
        </span>
      </a>
    );
}

export default Logo
