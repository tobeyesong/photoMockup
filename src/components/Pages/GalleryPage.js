/**
 * /*
 *   This example requires Tailwind CSS v2.0+
 *
 *   This example requires some changes to your config:
 *
 *   ```
 *   // tailwind.config.js
 *   module.exports = {
 *     // ...
 *     plugins: [
 *       // ...
 *       require('@tailwindcss/aspect-ratio'),
 *     ],
 *   }
 *   ```
 *
 * @format
 */

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const files = [
  {
    source:
      "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    source:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=",
  },
  {
    source:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    source:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469",
  },
  {
    source:
      "https://images.unsplash.com/photo-1623461487986-9400110de28e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
  },
  {
    source:
      "https://images.unsplash.com/photo-1619279302118-43033660826a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    source:
      "https://images.unsplash.com/photo-1598630693806-08fcf14dbf4d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
  },
  {
    source:
      "https://images.unsplash.com/photo-1610122748280-d0ae76b10750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  // More files...
];

export default function Example() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <div className='px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8'>
          {files.map((file) => (
            <li key={file.source} className='relative'>
              <div className='block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500'>
                <img
                  src={file.source}
                  alt=''
                  className='object-cover pointer-events-none group-hover:opacity-75'
                />
                <button
                  type='button'
                  className='absolute inset-0 focus:outline-none'>
                  <span className='sr-only'>View details for {file.title}</span>
                </button>
              </div>
              <p className='block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none'>
                {file.title}
              </p>
              <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
                {file.size}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
