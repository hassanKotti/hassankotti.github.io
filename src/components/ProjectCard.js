
export default function Example() {
  return (
    <div class='relative bg-white shadow-xl sm:max-w-lg sm:mx-auto sm:rounded-lg '>
      <div class='max-w-md  mx-auto'>
        <img
          src='https://raw.githubusercontent.com/hassanKotti/tailreact/master/public/Tailwind-React.png'
          class='aspect-video object-cover object-top rounded-t-lg'
          alt=''
        />
        <div class='divide-y divide-gray-300/50 px-6 sm:px-10 pt-3 pb-8'>
          <div class='py-8 text-base leading-7 space-y-3 text-gray-600'>
            <h3 class='text-xl font-semibold'>TailReact</h3>
            <p>
              Perfect simple landing page.
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
                <p class='ml-4'>React.Js</p>
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
                <p class='ml-4'>Tailwindcss</p>
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
                <p class='ml-4'>Iconify</p>
              </li>
            </ul>
          </div>
          <div class='pt-8 text-base leading-7 font-semibold'>
            <p>
              <a
                href='https://hassankotti.github.io/tailreact'
                class='text-sky-500 hover:text-sky-600'>
                Demo &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
