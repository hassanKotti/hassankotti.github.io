
export default function Example() {
  return (

        <div class='relative  bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg '>
          <div class='max-w-md mx-auto'>
            <img
              src='https://raw.githubusercontent.com/hassanKotti/tailreact/master/public/Tailwind-React.png'
              class='aspect-video object-cover object-top rounded-t-lg'
              alt=''
            />
            <div class='divide-y divide-gray-300/50 px-6 sm:px-10 pt-3 pb-8'>
              <div class='py-8 text-base leading-7 space-y-3 text-gray-600'>
                <h3 class='text-xl font-semibold'>TailReact Landing Page</h3>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
                <h4 class='text-base font-medium'>Technologyes Used :</h4>
                <ul class='space-y-4'>
                  <li class='flex items-center'>
                    <svg
                      class='w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2'
                      stroke-linecap='round'
                      stroke-linejoin='round'>
                      <circle cx='12' cy='12' r='11' />
                      <path
                        d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9'
                        fill='none'
                      />
                    </svg>
                    <p class='ml-4'>
                      Customizing your
                      <code class='text-sm font-bold text-gray-900'>
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li class='flex items-center'>
                    <svg
                      class='w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2'
                      stroke-linecap='round'
                      stroke-linejoin='round'>
                      <circle cx='12' cy='12' r='11' />
                      <path
                        d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9'
                        fill='none'
                      />
                    </svg>
                    <p class='ml-4'>
                      Extracting classes with
                      <code class='text-sm font-bold text-gray-900'>
                        @apply
                      </code>
                    </p>
                  </li>
                  <li class='flex items-center'>
                    <svg
                      class='w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2'
                      stroke-linecap='round'
                      stroke-linejoin='round'>
                      <circle cx='12' cy='12' r='11' />
                      <path
                        d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9'
                        fill='none'
                      />
                    </svg>
                    <p class='ml-4'>Code completion with instant preview</p>
                  </li>
                </ul>
              </div>
              <div class='pt-8 text-base leading-7 font-semibold'>
                <p class='text-gray-900'>Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href='https://tailwindcss.com/docs'
                    class='text-sky-500 hover:text-sky-600'>
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

  );
}
