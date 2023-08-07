'use client';

import Header from '@/components/organisms/Header';
import Link from 'next/link';
import { BiPhone as PhoneIcon } from 'react-icons/bi';
import { BiEnvelope as EnvelopeIcon } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Page() {
  return (
    <div className="bg-white font-cabinet-grotesk  h-full">
      <Header title="Contact" image="/images/contact.jpg" />
      <Contact />
    </div>
  );
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    toast.success('Formulier verzenden', {
      duration: 5000,
      position: 'top-center',
    });
    try {
      const response = await fetch('/api/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        toast.success('Formulier verzonden!', {
          duration: 5000,
          position: 'top-center',
        });
        reset();
      } else {
        toast.error('Formulier niet verzonden', {
          duration: 5000,
          position: 'top-center',
        });
        console.log('Form data sending failed');
      }
    } catch (error) {
      console.log('Error sending form data:', error);
    }
  };

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
              Heb je een vraag? Wil je een bezichtiging? Of heb je advies nodig?
              Laat je gegevens achter en wij nemen contact met je op.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postadres</dt>
                <dd>
                  <p>Rijkseweg 85</p>
                  <p>1411GE Naarden</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Telefoonnummer</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+31621284606"
                    className="ml-3 underline text-blue-600"
                  >
                    +31 6 21284606
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">E-mail</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    <a
                      className="underline text-blue-600"
                      href="mailto:info@lindenvastgoed.nl"
                    >
                      support@lindenvastgoed.nl
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
            {/* <p className="mt-6 text-base text-gray-500">
              Op zoek naar carrièremogelijkheden?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                Bekijk alle vacatures????
              </a>
              .
            </p> */}
          </div>
        </div>

        <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2">
              Stuur ons een bericht
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Volledige naam
                </label>
                <input
                  type="text"
                  id="full-name"
                  autoComplete="name"
                  {...register('full-name', { required: true })}
                  className={`block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors['full-name'] ? 'border-red-500' : ''
                  }`}
                  placeholder="Volledige naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', { required: true })}
                  className={`block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="E-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefoon
                </label>
                <input
                  type="text"
                  id="phone"
                  autoComplete="tel"
                  {...register('phone', { required: true })}
                  className={`block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="Telefoon"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: true })}
                  className={`block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Bericht"
                  defaultValue={''}
                />
              </div>
              <input type="hidden" value="Contact" {...register('formType')} />
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center border border-transparent btn-sm text-white bg-blue-950 hover:bg-blue-600 shadow-sm whitespace-nowrap  ml-2 sm:h-10 px-6 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
