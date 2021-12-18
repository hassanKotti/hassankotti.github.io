import React from "react";
import Technology from "../components/Technology";
import { skillsList } from "../data/skills";

const Skills = () => {
  return (
    <section className='relative max-w-8xl  snap-start' id='skills'>
      <div className='min-h-screen  py-6  flex flex-col justify-center relative overflow-hidden sm:py-12'>
        <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-xl font-extrabold leading-8  uppercase text-stone-600  sm:text-2xl lg:text-3xl tracking-tight text-center'>
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
