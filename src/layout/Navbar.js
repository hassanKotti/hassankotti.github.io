import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import menuList  from "../data/navMenuItems";


const Navbar = () => {
  return (
    <Popover >
      {({ open }) => (
        <div>
          <div className='relative  w-full px-4 pt-4 pb-3 mx-auto block z-50'>
            <nav
              className=' flex items-center justify-between sm:h-10 lg:justify-start '
              aria-label='Global'>
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                    <Logo />
                  <div className='flex items-center md:hidden'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-stone-600 bg-white border rounded-md  hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500  lg:border-0 '>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                {menuList.map((item) => (
                  <NavLink
                    key={item.id}
                    to={{ pathname: "/", hash: item.hash }}
                    className='font-medium text-stone-700 hover:text-stone-900 '>
                    {item.title}
                  </NavLink>
                ))}
              </div>
              <div className='justify-around hidden w-full px-5 py-3 font-medium text-center text-indigo-600 md:justify-end md:flex md:items-center'>
                <button className='flex items-center justify-center w-10 p-2 mr-2 text-stone-600 bg-white border rounded-lg lg:bg-transparent hover:text-stone-600   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500  lg:border-0'>
                  <svg
                    className='w-6 h-6 text-stone-600 hover:text-stone-600'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Popover.Panel
              focus
              static
              className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden' style={{  zIndex :100 }}>
              <div className='overflow-hidden bg-white rounded-lg shadow-md  ring-1 ring-black ring-opacity-5'>
                <div className='flex items-center justify-between px-5 pt-4'>
                  <a href='/' className='flex items-center justify-between'>
                    <span className='ml-3 text-2xl font-black leading-none uppercase pointer-events-auto select-none text-stone-700 md:ml-5'>
                      Hassan
                      <span className='font-normal text-stone-400'>Kotti</span>
                      <span className='text-indigo-600'>.</span>
                    </span>
                  </a>

                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-stone-600 bg-white rounded-md  hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close main menu</span>
                      <XIcon className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {menuList.map((item) => (
                    <NavLink
                      key={item.id}
                      to={{ pathname: "/", hash: item.hash }}
                      className='block px-3 py-2 text-base font-medium text-stone-700 rounded-md hover:text-stone-900 hover:bg-stone-50  '>
                      {item.title}
                    </NavLink>
                  ))}
                </div>

                <div className='flex justify-around w-full px-5 py-3 font-medium text-center text-indigo-600 md:justify-between md:block md:items-center bg-stone-50  hover:bg-stone-100'>
                  <a href='https://github.com/hassankotti'>
                    <svg
                      className='w-6 h-6 text-stone-600 hover:text-stone-600 '
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default Navbar;
