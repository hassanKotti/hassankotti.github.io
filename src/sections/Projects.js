import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsList from "../data/projects";

const Projects = () => {
  return (
    <section className='relative projects mt-10 ' id='projects'>
      <div class='min-h-screen  py-6 px-8 mx-auto sm:px-12 lg:px-20 flex flex-col justify-center relative overflow-hidden z-100 sm:py-12'>
        <h3 className=' z-10 text-xl font-extrabold leading-8  uppercase text-stone-500  sm:text-2xl lg:text-3xl tracking-tight text-center'>
          Recent Work
        </h3>
        <div className='overflow-x-auto flex space-x-4'>
          {projectsList.map((project) => (
            <ProjectCard
              tags={project.tags}
              key={project.id}
              name={project.name}
              image={project.image}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
      <div class="before:content-['']  before:bg-no-repeat before:-translate-y-1 before:-translate-x-1/2 before:top-0 before:left-[50%] before:w-[300%] before:absolute  before:h-[100%]  before:bg-[url('./assets/svg/hero.svg')] before:max-w-[200%] before:bg-auto before:bg-center bg-top z-[1]"></div>
    </section>
  );
};

export default Projects;
