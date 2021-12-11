import React from "react";
import beams from "../assets/beams4.jpg";

const Contact = () => {
  return (
    <section
      class='relative max-w-8xl  mb-2 text-left  border-t-2 border-gray-200 snap-start snap-always'
      id='contact'>
      <div class='min-h-screen bg-gray-50 py-6   relative overflow-hidden sm:py-12'>
        <img
          src={beams}
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-center'
        />
        <div class='absolute inset-0 bg-grid-2 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
        <div class='relative px-6 pt-10 pb-8  sm:max-w-8xl sm:mx-auto sm:rounded-lg sm:px-10'>
          <div class='max-w-7xl mx-auto'>
            <h3 class='py-6 mt-2 text-3xl font-extrabold leading-8 tracking-tight uppercase text-stone-900 sm:text-4xl'>
              Contact
            </h3>
            <div class='items-center jutify-between lg:flex'>
              <div>
                <div>
                  <div class='max-w-4xl px-8 py-16 mx-auto sm:py-32'>
                    <div class='relative text-center text-stone-600'>
                      <figure class='font-display'>
                        <blockquote class='relative px-12 mx-auto mb-4 text-2xl italic sm:text-3xl sm:px-16'>
                          <div class='absolute top-0 left-0 pl-2 -mt-5'>
                            <svg
                              class='w-8 h-8 sm:h-12 sm:w-12'
                              viewBox='0 0 40 40'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M30.216 9H35c-2.591 4.338-4.385 8.474-5.282 12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226 13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382 12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237 12.674 9z'
                                fill='currentColor'
                                fill-rule='evenodd'></path>
                            </svg>
                          </div>
                          <h3>Just say hi.</h3>
                          I'm always open to discuss your project and talk about
                          new things!
                          <div class='absolute bottom-0 right-0 pr-2 -mb-5'>
                            <svg
                              class='w-8 h-8 sm:h-12 sm:w-12'
                              viewBox='0 0 40 40'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093 9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784 32zm17.542 0h-4.884c2.69-4.338 4.485-8.474 5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316 27.763 27.326 32z'
                                fill='currentColor'
                                fill-rule='evenodd'></path>
                            </svg>
                          </div>
                        </blockquote>
                        <figcaption class='text-lg font-bold tracking-wide uppercase'>
                          <a
                            href='https://twitter.com/davidhemphill'
                            class='no-underline hover:text-indigo'>
                            Hassan Kotti
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <form
                action='#_'
                class='relative z-20 p-6 my-10 rounded-lg shadow-lg bg-stone-100 form'>
                <h3 class='text-2xl font-semibold text-stone-600'>
                  Let us call you!
                </h3>
                <p class='text-stone-600'>To help you choose your property</p>
                <div class='flex mt-3 space-x-5'>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Your Name'
                    class='w-1/2 p-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                  />
                  <input
                    type='tel'
                    name=''
                    id=''
                    placeholder='Your Number'
                    class='w-1/2 p-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                  />
                </div>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Your Email'
                  class='w-full p-2 mt-3 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                />
                <textarea
                  name=''
                  id=''
                  cols='10'
                  rows='3'
                  placeholder='Tell us about desired property'
                  class='w-full p-2 mt-3 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'></textarea>
                <input
                  type='submit'
                  class='w-full p-3 mt-6 font-semibold text-white bg-indigo-600 rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:bg-indigo-500'
                  value='Submit'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
