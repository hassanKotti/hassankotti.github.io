import React from "react";
import beams from "../assets/beams4.jpg";

const Section = ({ id, title, children }) => {
  return (
    <section as="section"
      id={id}
      class='min-h-screen bg-white py-6 border-t flex flex-col justify-center relative overflow-hidden sm:py-12'>
      <img
        src={beams}
        alt=''
        class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none'
      />
      <div class='absolute inset-0 bg-grid-2 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
      <div class='relative px-6 pt-10 pb-8 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10'>
        <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-3xl font-extrabold leading-8  uppercase text-stone-900  sm:text-5xl lg:text-6xl tracking-tight text-center'>
          {title}
        </h3>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
