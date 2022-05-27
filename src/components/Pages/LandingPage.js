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
    <div className='relative'>
      <Navbar />
      {/* <div className='relative mt-1'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative shadow-xl sm:rounded-2xl '>
            <div className='relative px-4 py-16 bg-center bg-contain lg:bg-cover sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-hero-pattern'></div>
          </div>
        </div>
      </div> */}
      <div className='relative mt-5'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                className='object-cover w-full h-full'
                src='https://media.publit.io/file/freelance/autumnbriar/icons/IMG_1586-2.png'
                alt='People working on laptops'
              />
            </div>
            <div className='relative invisible px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <h1 className='text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl'></h1>
              <p className='max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl'></p>
              <div className='max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center lg:p-16 md:p-10'>
                <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                  <a
                    href='#'
                    className='flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8'>
                    Get started
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
