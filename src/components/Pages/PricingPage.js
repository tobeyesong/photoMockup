/** @format */

import {
  CheckIcon,
  ReceiptTaxIcon,
  ThumbUpIcon,
  DuplicateIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Testimonial from "../PageSections/Testimonial";
import ContactForm from "../PageSections/ContactForm";

const pricing = {
  tiers: [
    {
      title: "No. 1",
      price: 1500,

      features: [
        "4 hours of coverage, including tax. ",
        "Does not include a bridal session.",
        "Minimum 250 edited images.",
        "Best package for low-key, smaller, and informal weddings and receptions.",
      ],

      mostPopular: false,
    },
    {
      title: "No. 2",
      price: 2000,

      features: [
        "6 Hours of coverage, including tax.",
        "Includes 1 hour for a bridal session at a discounted rate.",
        "Minimum 350 edited images.",
      ],

      mostPopular: false,
    },
    {
      title: "No. 3",
      price: 2600,

      features: [
        "10 hours of coverage, including tax.",
        "Minimum 750 images.",
        "Includes up to 2 hours dedicated to a bridal and mini bridal boudoir session, which can be split into a groom’s session.",
      ],

      mostPopular: false,
    },
    {
      title: "No. 4",
      price: 3000,

      features: [
        "8 hours of coverage, including tax.",
        "Includes 30 minutes for a bridal session at a discounted rate and 3 personalized bridal boudoir shoots.",
        "	Minimum 600 edited photos.",
        "Ideal for wedding parties or larger receptions.",
      ],

      mostPopular: false,
    },
    {
      title: "No. 5",
      price: 3350,

      features: [
        "12 hours total (Flexible dividing time as needed), including tax.",
        "800 minimum images.",
        "Bridal Session.",
        "Bridal Boudoir Session.",
        "	Groom’s Peak",
        "Trash the Dress.",
        "Engagement/Couples Session.",
      ],
    },
    {
      title: "Bundle Session",
      price: 875,

      features: [
        "Bundle Bridal/Groom Session with Boudoir for up to 2 hours (4 hours total)",
        "Includes a minimum of 50 images.",
        "OR Bundle individual Bridal and Groom Sessions for the same special",
      ],

      misc: "or",
      featuresTwo: [
        "Bundle individual Bridal and Groom Sessions for the same special",
      ],
    },
  ],
};

const tiers = [
  {
    name: "Elopement Package",
    href: "#",
    price: 1100,

    features: [
      "3 hours coverage, tax included.",
      "Minimum 150 edited images.",
      "Covers getting ready (both bridal and groom), ceremony, and couple portraits after.",
      "Mini bridal boudoir for up to 1 hour at no additional charge, even if the time bleeds over.",
    ],
  },
  {
    name: "Bridal Session/Groom Session",
    href: "#",
    price: 500,
    features: [
      "2 hours of feeling fabulous, tax included.",
      "Minimum 30 images.",
    ],
  },
  {
    name: "Bachelorette/Bachelor Parties",
    href: "#",
    price: 600,
    features: ["2 hours of coverage.", "Minimum 75 images."],
  },
  {
    name: "Couples/Engagement Session",
    href: "#",
    price: 500,
    features: ["2 hours of coverage, tax included. ", "Minimum 50 images."],
  },
  {
    name: "Family Session",
    href: "#",
    price: 650,
    features: [
      "2 hours of fun, non-traditional family photography, tax included.",
    ],
  },
  {
    name: "Rehearsal Dinner",
    href: "#",
    price: 600,
    features: ["2 hours of coverage, tax included.", "Minimum of 75 images."],
  },
  {
    name: "Potraits",
    href: "#",
    price: 275,
    features: [
      "2 hours of custom portraits, tax included",
      "Minimum 30 images",
    ],
  },
  {
    name: "Mini Sessions",
    href: "#",
    price: 150,
    features: [
      "Includes up to 1 hour of spontaneous portraits.",
      "Minimum 20 images. ",
    ],
  },
];

const metrics = [
  {
    id: 1,
    icon: ThumbUpIcon,
    emphasis: "No additional charge",
    rest: "for ground travel up to 4 hours.",
  },

  {
    id: 3,
    icon: ReceiptTaxIcon,
    emphasis: "Additional charges of",
    rest: " $120 per hour overbooked session. ",
  },
  {
    id: 4,
    icon: DuplicateIcon,
    emphasis: "Add a second wedding photographer",
    rest: " to any wedding package for an additional $500.",
  },
  {
    id: 2,
    icon: PaperAirplaneIcon,
    emphasis: "I will travel out of state ",
    rest: "for your big day; however, there will be a Traveler’s expense. Expenses may vary. ",
  },
];

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
              needs.
            </p>
          </div>
        </div>
      </div>
      {/* Discalimer Section */}
      <div className='relative bg-gray-900'>
        <div className='absolute bottom-0 w-full h-80 xl:inset-0 xl:h-full'>
          <div className='w-full h-full xl:grid xl:grid-cols-2'>
            <div className='h-full xl:relative xl:col-start-2'>
              <img
                className='object-cover w-full h-full opacity-25 xl:absolute xl:inset-0'
                src='https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
                alt='People working on laptops'
              />
              <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
              />
            </div>
          </div>
        </div>
        <div className='max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
          <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
            <h2 className='text-sm font-semibold tracking-wide uppercase text-rose-300'>
              Quick Disclaimer
            </h2>
            <p className='mt-3 text-3xl font-bold text-white'>
              The information below is valid for all packages
            </p>
            <p className='mt-5 text-lg text-gray-300'>
              All packages come with the option of having your photos retouched
              and edited in standard, B&W Noir, or “antiqued” (Sepia) at no
              additional charge.
            </p>
            <p className='mt-5 text-lg text-gray-300'>
              I offer customized/creative editing, which requires some
              communication about what you are looking for creatively. I’m very
              flexible and open with this option, as I love getting artsy with
              photography.
            </p>

            <div className='grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {metrics.map((item) => (
                <p key={item.id}>
                  <span>
                    <item.icon
                      className='w-6 h-6 text-white'
                      aria-hidden='true'
                    />
                  </span>
                  <span className='block mt-1 text-base text-gray-300'>
                    <span className='font-medium text-white'>
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className=''>
        {/* Pricing Section */}
        <section className='relative' aria-labelledby='pricing-heading'>
          <h2 id='pricing-heading' className='sr-only'>
            Pricing
          </h2>

          {/* Tiers */}
          <div className='self-center max-w-2xl px-4 py-4 mx-auto space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 '>
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className='relative flex flex-col p-8 bg-white border border-gray-200 shadow-sm rounded-2xl'>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {tier.title}
                  </h3>

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

          {/* //SECOND TIERS */}
          <div className='mx-auto mb-12 max-w-7xl sm:px-6 lg:px-8'>
            <div className='p-4 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4'>
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className='border border-gray-200 divide-gray-200 rounded-lg shadow-sm'>
                  <div className='p-6'>
                    <h2 className='text-lg font-medium leading-6 text-gray-900'>
                      {tier.name}
                    </h2>

                    <p className='mt-8'>
                      <span className='text-4xl font-semibold text-gray-900'>
                        ${tier.price}
                      </span>
                    </p>
                  </div>
                  <div className='px-6 pt-6 pb-8'>
                    <h3 className='text-xs font-medium tracking-wide text-gray-900 uppercase'>
                      What's included
                    </h3>
                    <ul role='list' className='mt-6 space-y-4'>
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex space-x-3'>
                          <CheckIcon
                            className='flex-shrink-0 w-5 h-5 text-red-500'
                            aria-hidden='true'
                          />
                          <span className='text-sm text-gray-500'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Testimonial
            icon='https://media.publit.io/file/freelance/autumnbriar/icons/noun-wedding-2140227-FFFFFF.png'
            img='https://media.publit.io/file/freelance/autumnbriar/icons/Depositphotos_32649507_S.jpg'
            quote='I felt so insecure about myself but wanted to give my fiancé a special album too. Autumn was amazing to work with and even helped my self-confidence. We loved the wedding photos and the bridal boudoir shots!'
            person='Toni Rivera'
          />
          <Testimonial
            icon='https://media.publit.io/file/freelance/autumnbriar/icons/noun-aspect-ratio-4810599-FFFFFF.png'
            img='https://media.publit.io/file/freelance/autumnbriar/icons/Depositphotos_353419712_S.jpg'
            quote='I am so in love with the photos from Disine!'
            person='Jessie Lee'
          />
        </section>
      </main>
      <ContactForm />
      {/* Footer */}
      <Footer />
    </div>
  );
}
