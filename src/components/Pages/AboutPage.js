/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

import { PhoneIcon, MailIcon, SparklesIcon } from "@heroicons/react/outline";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function Example() {
  return (
    <div>
      <Navbar />

      <div className='relative py-16 bg-white sm:py-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
          <div className='relative sm:py-16 lg:py-0'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
              <div className='absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72' />
              <svg
                className='absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'>
                <img
                  className='absolute inset-0 object-cover w-full h-full'
                  src='https://media.publit.io/file/noun_grid_3355318.png'
                  alt=''
                />
                <rect
                  width={404}
                  height={392}
                  fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                />
              </svg>
              <img
                className='absolute inset-0 object-scale-down w-full h-full -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12'
                src='https://media.publit.io/file/noun_grid_3355318.png'
                alt=''
              />
            </div>
            <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              {/* Testimonial card*/}
              <div className='relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl'>
                <img
                  className='absolute inset-0 object-cover w-full h-full'
                  src='https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100'
                  alt=''
                />

                <div className='absolute inset-0 bg-rose-500 mix-blend-multiply' />
                <div className='absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-400 opacity-90' />
                <div className='relative px-8'>
                  <blockquote className='mt-8'>
                    <div className='relative text-lg font-medium text-white md:flex-grow'>
                      <svg
                        className='absolute top-0 left-0 w-8 h-8 text-indigo-400 transform -translate-x-3 -translate-y-2'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                        aria-hidden='true'>
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                      </svg>
                      <p className='relative'>
                        Tincidunt integer commodo, cursus etiam aliquam neque,
                        et. Consectetur pretium in volutpat, diam. Montes, magna
                        cursus nulla feugiat dignissim id lobortis amet.
                      </p>
                    </div>

                    <footer className='mt-4'>
                      <p className='text-base font-semibold text-indigo-200'>
                        Sarah Williams
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            {/* Content area */}
            <div className='pt-12 sm:pt-16 lg:pt-20'>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                On a mission to empower teams
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='text-lg'>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p className='text-base leading-7'>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p className='text-base leading-7'>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className='mt-10'>
              <dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='pt-6 border-t-2 border-gray-100'>
                    <dt className='text-base font-medium text-gray-500'>
                      {stat.label}
                    </dt>
                    <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className='mt-10'>
                <a href='#' className='text-base font-medium text-indigo-600'>
                  {" "}
                  Learn more about how we're changing the world{" "}
                  <span aria-hidden='true'>&rarr;</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT  */}
      <div className='relative bg-white'>
        <div className='absolute inset-0'>
          <div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50' />
        </div>
        <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
          <div className='px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
            <div className='max-w-lg mx-auto'>
              <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                Get in touch
              </h2>
              <p className='mt-3 text-lg leading-6 text-gray-500'>
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className='mt-8 text-base text-gray-500'>
                <div>
                  <dt className='sr-only'>Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <PhoneIcon
                      className='flex-shrink-0 w-6 h-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <MailIcon
                      className='flex-shrink-0 w-6 h-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p className='mt-6 text-base text-gray-500'>
                Looking for careers?{" "}
                <a href='#' className='font-medium text-gray-700 underline'>
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className='px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
              <form
                action='#'
                method='POST'
                className='grid grid-cols-1 gap-y-6'>
                <div>
                  <label htmlFor='full-name' className='sr-only'>
                    Full name
                  </label>
                  <input
                    type='text'
                    name='full-name'
                    id='full-name'
                    autoComplete='name'
                    className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500'
                    placeholder='Full name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500'
                    placeholder='Email'
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='sr-only'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500'
                    placeholder='Phone'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500'
                    placeholder='Message'
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='inline-flex justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
