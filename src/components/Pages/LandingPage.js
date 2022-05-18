/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { PhoneIcon, MailIcon, SparklesIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className='relative bg-gray-50'>
      <Navbar />
      <main className='lg:relative'>
        <div className='w-full h-auto pt-16 pb-20 mx-auto text-center md:h-screen lg:h-screen max-w-7xl lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>
                {" "}
                Get the perfect portrait—
              </span>{" "}
              <span className='block text-rose-600 xl:inline'>every time.</span>
            </h1>
            <p className='max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link
                  to='/contact'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10'>
                  Contact Me
                </Link>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <Link
                  to='gallery'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-rose-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
          />
        </div>
      </main>
      {/* //Testimonial  */}

      <div className='py-16 bg-white lg:py-24'>
        <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative px-8 py-24 overflow-hidden shadow-2xl bg-rose-300 rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
              <img
                src='https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80'
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
            <div className='relative lg:col-span-1'>
              <SparklesIcon className='w-auto h-8 text-white' />
              <blockquote className='mt-6 text-white'>
                <p className='text-xl font-medium sm:text-2xl'>
                  Atumn is truly an outstanding photographer (and wonderful
                  person) with an almost mystical ability to capture the true
                  nature of people and events. I'd recommend her to anyone!{" "}
                </p>
                <footer className='mt-6'>
                  <p className='flex flex-col font-medium'>
                    <span>Marie Chilvers</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* //Testimonial  */}

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
      {/* CONTACT  */}

      <Footer />
    </div>
  );
}
