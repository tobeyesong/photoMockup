/**
 * /* This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

import { PhoneIcon, MailIcon, SparklesIcon } from "@heroicons/react/outline";
import ContactForm from "../PageSections/ContactForm";

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
      <div className='relative py-16 overflow-hidden bg-white'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div
            className='relative h-full mx-auto text-lg max-w-prose'
            aria-hidden='true'>
            <img
              className='absolute transform translate-x-32 top-12 left-full'
              src='https://media.publit.io/file/freelance/autumnbriar/icons/noun-pattern-2177729-A49284.png'
              alt=''
            />
            <img
              className='absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full'
              src='https://media.publit.io/file/freelance/autumnbriar/icons/noun-pattern-2177729-A49284.png'
              alt=''
            />{" "}
            <img
              className='absolute transform translate-x-32 bottom-12 left-full'
              src='https://media.publit.io/file/freelance/autumnbriar/icons/noun-pattern-2177729-A49284.png'
              alt=''
            />
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto text-lg max-w-prose'>
            <h1>
              <span className='block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 capitalize sm:text-4xl'>
                About Me
              </span>
            </h1>

            <div className='relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl'>
              <img
                className='absolute inset-0 object-cover w-full h-full'
                src='https://media.publit.io/file/freelance/autumnbriar/Polish_20220521_134006199.jpg'
                alt=''
              />

              <div className='absolute inset-0 bg-rose-50 mix-blend-multiply' />
              <div className='relative px-8'>
                <blockquote className='mt-8'>
                  <div className='relative text-lg font-medium text-white md:flex-grow'>
                    <svg
                      className='absolute top-0 left-0 w-4 h-4 text-red-500 transform -translate-x-3 -translate-y-2'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                      aria-hidden='true'>
                      <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative text-xl'>
                      Hi! Thank you for visiting my site! I’m Autumn, and this
                      is Bird, my editing helper.
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>

            <p className='mt-8 text-xl leading-8 text-gray-500'>
              I’ve been shooting weddings, portraits, boudoirs, and couple
              sessions for 5 years; I love what I do. Small weddings are my
              specialty, but I have done many more significant events with my
              business partner, Ariel.
            </p>
          </div>
          <div className='mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo'>
            <figure>
              {" "}
              <img
                className='w-full rounded-lg shadow-xl '
                src='https://media.publit.io/file/freelance/autumnbriar/Polish_20220521_131609907-1.jpg'
                alt=''
                width={1310}
                height={873}
              />
            </figure>

            <p>
              When I’m not shooting weddings, I usually do something outdoors,
              traveling with Bird to sites unseen (or to local libraries and
              coffee shops). You could say I dabble in graphic design,
              illustrations, and art. If you're extra curious about that facet
              of my life, I have a website dedicated to those endeavors{" "}
              <a href='http://abriar.com/'>here</a> .
            </p>

            <figure>
              {" "}
              <img
                className='w-full rounded-lg shadow-xl '
                src='https://media.publit.io/file/freelance/autumnbriar/Screenshot_20220521-133720.jpg'
                alt=''
                width={1310}
                height={873}
              />
            </figure>
            <p>
              As you can see, I’m covered in ink. I’m a massive fan of all
              things alternative, but I promise to be on my best behavior for
              your big day/photoshoot. Bird and I like to sit by my fire pit and
              enjoy marshmallows in my low-key downtime. Sometimes we
              binge-watch mafia flicks and practice our best impressions. He’s
              way better at it than I am.
            </p>
          </div>
        </div>
      </div>
      {/* CONTACT  */}
      <ContactForm />
      <Footer />
    </div>
  );
}
