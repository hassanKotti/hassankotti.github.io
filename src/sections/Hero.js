import React from "react";
import hassankotti_hero from "../assets/hassankotti_hero.jpg";
import CodeEditor from "../components/CodeEditor";

const Hero = () => {
  return (
    <section className='relative py-24 my-24 z-50'>
      <div className='flex flex-col  items-center justify-center  lg:flex-row-reverse  lg:justify-around lg:items-center '>
        <div className='relative z-10 max-w-screen-lg mx-auto xl:max-w-screen-xl'>
          <div className='grid mx-auto gap-x-4 max-w-7xl hero_image'>
 
            <div className='relative  self-center col-start-1 col-end-2 row-start-2 row-end-3 pb-6 pr-8 ml-10 -mt-6 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-4 sm:px-6 md:px-8 md:pb-8 lg:px-0 lg:pb-0 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0'>
              <div className='flex items-center justify-center max-w-xl xl:max-w-none'>
                <div className='flex-none w-full'>
                  <div className='xl:-mr-8'>
                    <div
                      className='relative z-10 mx-auto text-black shadow-xl rounded-r-xl sm:rounded-xl lg:mx-0 xl:mx-auto'
                      style={{
                        transformOrigin: "50% 50% 0px",
                        width: "576px",
                      }}>
                      <div
                        className='flex p-8 overflow-hidden bg-white rounded-r-xl sm:rounded-xl'
                        style={{ transformOrigin: "50% 50% 0px" }}>
                        <div
                          className='relative z-10 flex-none w-48 h-auto mr-8 -m-8 overflow-hidden'
                          style={{
                            transformOrigin: "50% 50% 0px",
                            borderRadius: "0%",
                          }}>
                          <img
                            src={hassankotti_hero}
                            style={{
                              width: "100%",
                              height: "100%",
                              left: "0px",
                              top: "0px",
                              transformOrigin: "50% 50% 0px",
                            }}
                            alt='#'
                            className='absolute object-cover bg-stone-100 max-w-none'
                          />
                        </div>
                        <div
                          className=''
                          style={{ transformOrigin: "50% 50% 0px" }}>
                          <div
                            className='mb-4'
                            style={{ transformOrigin: "50% 50% 0px" }}>
                            <span className='typewriter'>
                              Hi,I'am Hassan Kotti.
                              <br />I build Web &amp, Mobile apps
                            </span>
                          </div>
                          <div
                            className='flex flex-col items-start'
                            style={{ fontWeight: "500" }}>
                            <p
                              style={{
                                color: "rgb(8, 145, 178)",
                                transformOrigin: "50% 50% 0px",
                              }}>
                              Hassan Kotti
                            </p>
                            <p
                              style={{
                                color: "rgb(113, 113, 122)",
                                transformOrigin: "50% 50% 0px",
                              }}>
                              Web Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
