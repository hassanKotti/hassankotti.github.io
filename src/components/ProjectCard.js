import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Tag from "./Tag";

const ProjectCard = ({ name, image, desc, tags, url }) => {
  let [isShowing, setIsShowing] = useState(true);

  return (
    <Transition
      appear={true}
      as={Fragment}
      show={isShowing}
      enter='transform transition duration-[400ms]'
      enterFrom='opacity-0 rotate-[-120deg] scale-50'
      enterTo='opacity-100 rotate-0 scale-100'
      leave='transform duration-200 transition ease-in-out'
      leaveFrom='opacity-100 rotate-0 scale-100 '
      leaveTo='opacity-0 scale-95 '>
      <div class='relative bg-white shadow-xl flex-none  sm:max-w-lg sm:mx-auto sm:rounded-lg z-10 overflow-hidden mx-10'>
        <div class='max-w-md  mx-auto'>
          <img
            src='https://raw.githubusercontent.com/hassanKotti/tailreact/master/public/Tailwind-React.png'
            class='aspect-video object-cover object-top'
            alt=''
          />
          <div class='divide-y divide-gray-300/50 px-6 sm:px-10 pt-3 pb-8'>
            <div class='py-6 text-base leading-7 space-y-3 text-gray-600'>
              <h3 class='text-xl font-semibold'>{name}</h3>
              <p>{desc}</p>
              <div className='flex flex-wrap space-x-2'>
                {tags.map((tag) => (
                  <Tag key={tag} tagName={tag} />
                ))}
              </div>
            </div>
            <div class='pt-6 text-base leading-7 font-semibold'>
              <p>
                <a href={url} class='text-sky-500 hover:text-sky-600'>
                  Demo &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
export default ProjectCard;
