import Header from '@/components/organisms/Header';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-white font-cabinet-grotesk  h-full">
      <Header title="Contact" />
      <Contact />
    </div>
  );
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

function Contact() {
  return (
    <div className="relative bg-white max-w-6xl mx-auto md:px-6 py-6">
      <div className="absolute rounded-lg">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-lg" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 rounded-lg">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Neem contact op
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postadres</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Telefoonnummer</dt>
                <dd className="flex">
                  {/* <PhoneIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            /> */}
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">E-mail</dt>
                <dd className="flex">
                  {/* <EnvelopeIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            /> */}
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Op zoek naar carrièremogelijkheden?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                Bekijk alle vacatures????
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Volledige naam
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Volledige naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefoon
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Telefoon"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Bericht"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
