/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { Link } from "react-router-dom";

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Testimonial from "../PageSections/Testimonial";
import ContactForm from "../PageSections/ContactForm";

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
              If you're looking for a photographer who can capture the magic of
              your big day, look no further than Autumn Briar.
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
      <Testimonial
        icon='https://media.publit.io/file/freelance/autumnbriar/icons/noun-wedding-2140227-FFFFFF.png'
        img='https://media.publit.io/file/freelance/autumnbriar/icons/Depositphotos_81381802_S.jpg'
        quote='Our wedding photos turned out great! Could not be happier. And the album was absolutely worth it!'
        person='Honee Moyer'
      />
      <Testimonial
        icon='https://media.publit.io/file/freelance/autumnbriar/icons/noun-rock-on-172570-FFFFFF.png'
        img='https://media.publit.io/file/freelance/autumnbriar/icons/Depositphotos_4943034_S.jpg'
        quote='We needed images for the band and went with Disine. Never expected a wedding photographer to pull it off, but Autumn is truly an artist.'
        person='Thomas Sizemore'
      />
      <Testimonial
        icon='https://media.publit.io/file/freelance/autumnbriar/icons/noun-family-1309536-FFFFFF.png'
        img='https://media.publit.io/file/freelance/autumnbriar/icons/Depositphotos_29225641_S.jpg'
        quote='I’ve had a family session with Autumn and we had such a great time, even in the rain. She made the best out of an unexpected situation and we loved the photos!'
        person='Michael Puckett'
      />
      {/* //Testimonial  */}

      {/* CONTACT  */}
      <ContactForm />
      {/* CONTACT  */}

      <Footer />
    </div>
  );
}
