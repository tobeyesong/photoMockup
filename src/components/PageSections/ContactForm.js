/** @format */

// /** @format */

import React from "react";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

import { Form, Field } from "react-final-form";
import { XCircleIcon } from "@heroicons/react/solid";

import { useNavigate } from "react-router-dom";
const required = (value) => (value ? undefined : "Required");

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactForm() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => navigate("/thanks"))
      .catch((error) => alert(error));
  };
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50' />
      </div>
      <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
        <div className='px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <h2 className='text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
              Get in touch
            </h2>
            <p className='mt-3 text-lg leading-6 text-gray-500'>
              We'll work with you to find a package that fits your budget, so
              you can get the perfect photos without breaking the bank.
            </p>
            <dl className='mt-8 text-base text-gray-500'>
              <div className='mt-6'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex'>
                  <PhoneIcon
                    className='flex-shrink-0 w-6 h-6 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>(828) 217-9207</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (values.email !== "undefined") {
                  var pattern = new RegExp(
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
                  );

                  if (!pattern.test(values.email)) {
                    errors.email = "Please enter valid email address.";
                  }
                }

                return errors;
              }}
              render={({ handleSubmit, submitError }) => (
                <form
                  onSubmit={handleSubmit}
                  name='contactAutumn'
                  method='POST'
                  data-netlify='true'>
                  <input type='hidden' name='form-name' value='contactAutumn' />
                  <div className='mt-6 space-y-8 rounded-b-md sm:space-y-5'>
                    <div>
                      <div className=''>
                        <Field
                          name='name'
                          component='input'
                          placeholder=''
                          validate={required}>
                          {({ input, meta, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='name'
                                  className='block text-sm font-medium text-gray-700'>
                                  Name
                                </label>
                                <input
                                  type='text'
                                  name='name'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        {submitError && (
                          <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                            <div className='flex'>
                              <div className='flex-shrink-0'>
                                <XCircleIcon
                                  className='w-5 h-5 text-red-400'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-3'>
                                <h3 className='text-sm font-medium text-red-800'>
                                  {submitError}
                                </h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <Field
                          name='email'
                          component='input'
                          placeholder=''
                          validate={required}>
                          {({ input, meta, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='email'
                                  className='block text-sm font-medium text-gray-700'>
                                  E-mail
                                </label>
                                <input
                                  type='text'
                                  name='email'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        {submitError && (
                          <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                            <div className='flex'>
                              <div className='flex-shrink-0'>
                                <XCircleIcon
                                  className='w-5 h-5 text-red-400'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-3'>
                                <h3 className='text-sm font-medium text-red-800'>
                                  {submitError}
                                </h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <Field
                        name='subject'
                        component='input'
                        placeholder=''
                        validate={required}>
                        {({ input, meta, placeholder }) => (
                          <div className='col-span-6 sm:col-span-3'>
                            <div>
                              <label
                                htmlFor='subject'
                                className='block text-sm font-medium text-gray-700'>
                                Subject
                              </label>
                              <input
                                type='text'
                                name='subject'
                                {...input}
                                placeholder={placeholder}
                                className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
                              />
                            </div>
                            {meta.error && meta.touched && (
                              <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                <div className='flex'>
                                  <div className='flex-shrink-0'>
                                    <XCircleIcon
                                      className='w-5 h-5 text-red-400'
                                      aria-hidden='true'
                                    />
                                  </div>
                                  <div className='ml-3'>
                                    <h3 className='text-sm font-medium text-red-800'>
                                      {meta.error}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Field>

                      <Field
                        name='message'
                        component='textarea'
                        validate={required}
                        className='block w-full h-32 p-4 px-4 py-2 pl-1 mb-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'>
                        {({ input, meta, placeholder }) => (
                          <div className='col-span-6 sm:col-span-3'>
                            <div>
                              <label
                                htmlFor='message'
                                className='block text-sm font-medium text-gray-700'>
                                Message
                              </label>
                              <textarea
                                type='text'
                                name='message'
                                rows='8'
                                {...input}
                                placeholder={placeholder}
                                className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
                              />
                            </div>
                            {meta.error && meta.touched && (
                              <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                <div className='flex'>
                                  <div className='flex-shrink-0'>
                                    <XCircleIcon
                                      className='w-5 h-5 text-red-400'
                                      aria-hidden='true'
                                    />
                                  </div>
                                  <div className='ml-3'>
                                    <h3 className='text-sm font-medium text-red-800'>
                                      {meta.error}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Field>

                      <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                        <button
                          type='submit'
                          className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-indigo-500 sm:col-start-2 sm:text-sm'>
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
