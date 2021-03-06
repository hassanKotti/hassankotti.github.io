import React from 'react'
import { Transition } from "@headlessui/react";
import { Fragment, useState } from 'react'

const CodeEditor = () => {
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
        <div className='self-center flex-1 mx-auto text-white pt-8 md:ml-10 md:px-8 lg:px-0 lg:pt-0'>
          <div
            className='z-10 divide-stone-600 text-base font-light shadow-xl bg-[#282A36] rounded-lg min-w-[300px]'
            style={{
              fontSize: "16px",
              lineHeight: "22px",
            }}>
            <div className='relative flex items-center h-12 p-4'>
              <div className='absolute flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                <div className='w-3 h-3 bg-green-400 rounded-full'></div>
              </div>
              <div className='w-full px-2 text-center text-stone-400 mx-14'>
                <label className='w-full p-0 text-sm font-medium text-center truncate bg-transparent border-0 shadow-none select-none focus:ring-0'>
                  Portfolio.php
                </label>
              </div>
            </div>
            <div style={{ padding: "16px" }}>
              <div className='relative'>
                <span className='font-mono'>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>1</span>

                    <span style={{ color: "rgb(246, 246, 244)" }}> </span>
                    <span style={{ color: "rgb(242, 134, 196)" }}>{"<?"}</span>
                    <span style={{ color: "rgb(246, 246, 244)" }}></span>
                    <span style={{ color: "rgb(191, 158, 238)" }}>php</span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>2</span>

                    <span style={{ color: "rgb(246, 246, 244)" }}> </span>
                    <span style={{ color: "rgb(151, 225, 241)" }}>echo</span>
                    <span style={{ color: "rgb(246, 246, 244)" }}></span>
                    <span style={{ color: "rgb(222, 228, 146)" }}>"</span>
                    <span style={{ color: "rgb(231, 238, 152)" }}>
                      Hi,I\'am
                    </span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>3</span>

                    <span style={{ color: "rgb(231, 238, 152)" }}>
                      {" "}
                      Hassan Kotti.
                    </span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>4</span>

                    <span style={{ color: "rgb(231, 238, 152)" }}>
                      {" "}
                      I build Web
                    </span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>5</span>

                    <span style={{ color: "rgb(231, 238, 152)" }}>
                      {" "}
                      &amp,amp, Mobile apps
                    </span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>6</span>

                    <span style={{ color: "rgb(231, 238, 152)" }}>
                      {" "}
                      Hassan Kotti Web Developer
                    </span>
                    <span style={{ color: "rgb(222, 228, 146)" }}>"</span>
                    <span style={{ color: "rgb(246, 246, 244)" }}>,</span>
                  </span>
                  <span className='relative block w-full line bg-opacity-60 hover:bg-stone-600'>
                    <span className='select-none number'>7</span>
                    <span style={{ color: "rgb(246, 246, 244)" }}> </span>
                    <span style={{ color: "rgb(242, 134, 196)" }}>{"?>"}</span>
                    <span style={{ color: "rgb(246, 246, 244)" }}></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    );
}

export default CodeEditor
