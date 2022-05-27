/** @format */

import React from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { Link } from "react-router-dom";

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  TagIcon,
  ViewGridIcon,
  RefreshIcon,
  ShieldCheckIcon,
  DocumentIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "About",
    to: "/about",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: DocumentIcon,
  },
  {
    name: "Pacakages",
    to: "/pricing",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: TagIcon,
  },
  {
    name: "Gallery",
    to: "/gallery",
    description: "Your customers' data will be safe and secure.",
    icon: ViewGridIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div>
      <Popover className='bg-white shadow '>
        <div className='px-4 mx-auto max-w-7xl sm:px-6'>
          <div className='flex items-center justify-between py-4 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link to='/'>
                <span className='sr-only'>Disine</span>
                <img
                  className='w-auto h-8 lg:h-14 sm:h-10'
                  src='https://media.publit.io/file/freelance/autumnbriar/icons/image1-4.jpeg'
                  alt=''
                />
              </Link>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <div as='nav' className='hidden space-x-10 md:flex'>
              <Link
                to='/gallery'
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Gallery
              </Link>
              <Link
                to='/pricing'
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Pricing
              </Link>
              <Link
                to='/about'
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                About
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'>
            <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='w-auto h-8'
                      src='https://media.publit.io/file/freelance/autumnbriar/icons/image1-4.jpeg'
                      alt='Disine'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {features.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'>
                        <item.icon
                          className='flex-shrink-0 w-6 h-6 text-rose-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
