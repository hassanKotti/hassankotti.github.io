/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import hassankotti_hero from "../assets/hassankotti_hero.jpg";
import CodeEditor from "../components/CodeEditor";

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-50'>
      <div className=' max-w-8xl mx-auto px-12 py-24 my-24 '>
        <div className='flex flex-wrap items-center sm:justify-around justify-center relative mx-auto'>
          <figure class='md:flex bg-white shadow-lg ring-1 ring-stone-400/10 rounded-lg p-8 md:p-0 overflow-hidden'>
            <img
              class='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
              src={hassankotti_hero}
              alt=''
              width={384}
              height={512}
            />
            <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p class='text-lg font-medium'>
                  “Hi,I'am Hassan Kotti.
                  <br/>I build Web &amp,amp, Mobile apps.”
                </p>
              </blockquote>
              <figcaption class='font-medium'>
                <div class='text-sky-500'>Hassan Kotti</div>
                <div class='text-gray-700'>Web Developer</div>
              </figcaption>
            </div>
          </figure> 
          <CodeEditor />
        </div>
      </div>
    </section>
  );
};

export default Hero;
