import React from "react";
import Technology from "../components/Technology";
import { skillsList } from "../data/skills";
import beams from "../assets/beams4.jpg";

const Skills = () => {
  return (
    <section
      className='relative max-w-8xl  text-left  border-t-2 border-gray-200 snap-start'
      id='skills'>
      <div className='min-h-screen bg-gray-500 py-6  flex flex-col justify-center relative overflow-hidden sm:py-12'>
        <img
          src={beams}
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-center'
        />
        <div className='absolute  inset-0 bg-grid-2 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
        <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-3xl font-extrabold leading-8  uppercase text-stone-900  sm:text-5xl lg:text-6xl tracking-tight text-center'>
          KNOWLEDGE AREAS &amp; SKILLS
        </h3>
        <div className='grid gap-6 px-4 py-4 mx-auto mt-8 text-center lg:grid-cols-3'>
          {skillsList.map((item) => (
            <Technology
              title={item.title}
              icon={item.icon}
              percentage={item.percentage}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
