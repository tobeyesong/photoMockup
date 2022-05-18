/**
 * /*
 *   This example requires Tailwind CSS v2.0+
 *
 *   This example requires some changes to your config:
 *
 *   ```
 *   // tailwind.config.js
 *   const colors = require('tailwindcss/colors')
 *
 *   module.exports = {
 *     // ...
 *     theme: {
 *       extend: {
 *         colors: {
 *           rose: colors.rose,
 *         },
 *       },
 *     },
 *   }
 *   ```
 *
 * @format
 */

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 150,

      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],

      mostPopular: false,
    },
    {
      title: "Startup",
      price: 200,

      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],

      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 300,

      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],

      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className='relative'>
        {/* Header */}

        {/* Page Header */}
        <div className='relative max-w-2xl px-4 py-12 mx-auto sm:px-6 lg:max-w-7xl lg:py-24 lg:px-8'>
          <div className='relative'>
            <h1 className='text-3xl font-bold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl'>
              Pricing plans for all occasions
            </h1>
            <p className='max-w-2xl mt-6 text-xl text-gray-500'>
              Choose an affordable plan that's packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className='relative' aria-labelledby='pricing-heading'>
          <h2 id='pricing-heading' className='sr-only'>
            Pricing
          </h2>

          {/* Tiers */}
          <div className='max-w-2xl px-4 py-4 mx-auto space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className='relative flex flex-col p-8 bg-white border border-gray-200 shadow-sm rounded-2xl'>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className='absolute top-0 py-1.5 px-4 bg-rose-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2'>
                      Most popular
                    </p>
                  ) : null}
                  <p className='flex items-baseline mt-4 text-gray-900'>
                    <span className='text-5xl font-semibold tracking-tight'>
                      ${tier.price}
                    </span>
                  </p>
                  <p className='mt-6 text-gray-500'>{tier.description}</p>

                  {/* Feature list */}
                  <ul role='list' className='mt-6 space-y-6'>
                    {tier.features.map((feature) => (
                      <li key={feature} className='flex'>
                        <CheckIcon
                          className='flex-shrink-0 w-6 h-6 text-rose-500'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-gray-500'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <div className='relative pb-4'>
          {/* Decorative background */}
          <div
            aria-hidden='true'
            className='absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50'
          />

          <div className='relative max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='relative px-8 py-24 overflow-hidden shadow-2xl bg-rose-500 rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
              <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
                <img
                  src='https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80'
                  alt=''
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='relative lg:col-span-1'>
                <img
                  className='w-auto h-12'
                  src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
                  alt=''
                />
                <blockquote className='mt-6 text-white'>
                  <p className='text-xl font-medium sm:text-2xl'>
                    Workflow has completely transformed how we interact with
                    customers. We've seen record bookings, higher customer
                    satisfaction, and reduced churn.
                  </p>
                  <footer className='mt-6'>
                    <p className='flex flex-col font-medium'>
                      <span>Marie Chilvers</span>
                      <span>CEO, Workcation</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
