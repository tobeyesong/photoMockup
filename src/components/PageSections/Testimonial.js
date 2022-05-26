/** @format */

import React from "react";

export default function Testimonial(props) {
  return (
    <div className='py-8 bg-white lg:py-6'>
      <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative px-8 py-24 overflow-hidden shadow-xl bg-rose-600/70 rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
            <img
              src={props.img}
              alt=''
              className='object-cover object-top w-full h-full aspect-square'
            />
          </div>
          <div className='relative lg:col-span-1'>
            <img className='w-auto lg:h-20 h-14' src={props.icon} alt='' />
            <blockquote className='mt-6 text-white'>
              <p className='text-xl font-medium sm:text-2xl'>{props.quote}</p>
              <footer className='mt-6'>
                <p className='flex flex-col font-medium'>
                  <span>{props.person}</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
