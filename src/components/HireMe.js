import React from 'react'

const HireMe = ({ mailto }) => {
  return (
    <div className="flex justify-center w-full lg:justify-start">
      <button
        className="px-6 py-4 mt-12 font-semibold text-left text-white bg-indigo-500 rounded-full hover:bg-indigo-400 text-md"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        Hire Me!
      </button>
    </div>
  );
};

export default HireMe
