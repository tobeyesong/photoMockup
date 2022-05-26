/** @format */

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const files = [
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-30-10.28.58-1.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/Screenshot_20220521-215324.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-30-02.04.29.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/Screenshot_20220521-221005.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-30-10.32.55.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/IMG_20201121_222640_949.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-11-09.41.59-1.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-11-11.00.52-1.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/PicsArt_11-11-11.29.08-1.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/00100lrPORTRAIT_00100_BURST20201121172714407_COVER.jpg",
  },
  {
    source: "https://media.publit.io/file/freelance/autumnbriar/IMG_2483.jpg",
  },
  {
    source:
      "https://media.publit.io/file/freelance/autumnbriar/FB_IMG_1653185212698.jpg",
  },
];

export default function Example() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <div className='px-4 py-4 mx-auto max-w-8xl sm:px-6 lg:px-8'>
        <div className='bg-white'>
          <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12'>
            <div className='space-y-12'>
              <div className='p-4 space-y-5 rounded-md bg-slate-600 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
                <h2 className='text-xl font-semibold leading-7 tracking-tight sm:text-2xl text-slate-50'>
                  Gallery
                </h2>
                <p className='text-lg sm:text-xl text-gray-50'>
                  These images are some of my personal favorites from over the
                  years. I love working with couples and families who like to
                  have fun, enjoy being together, and folks who trust me to
                  capture them just as they are.
                </p>
              </div>

              <ul
                role='list'
                className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8'>
                {files.map((person) => (
                  <li key={person.name}>
                    <div className='space-y-4'>
                      <div className='lg:aspect-w-12 lg:aspect-h-15 aspect-w-10 aspect-h-14'>
                        <img
                          className='object-cover transition-all duration-300 ease-in-out transform rounded-lg hover:z-10 hover:scale-150'
                          src={person.source}
                          alt=''
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
