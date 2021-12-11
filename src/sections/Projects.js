import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
      <section
        className='relative max-w-8xl text-left snap-start'
        id='projects'>
        <div class='min-h-screen bg-white py-6 flex flex-col justify-center relative overflow-hidden sm:py-12'>
          <h3 className='py-6 px-8 mx-auto sm:px-12 lg:px-20 z-10 text-3xl font-extrabold leading-8  uppercase text-stone-900  sm:text-5xl lg:text-6xl tracking-tight text-center'>
            Recnt Work
          </h3>
          <ProjectCard />
        </div>
      </section>
    );
}

export default Projects
