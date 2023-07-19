'use client';

import { useState } from 'react';
import Header from '@/components/organisms/Header';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header
        title="Onderhoud"
        image="https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
        imagePosition="center center"
      />
      <Voorbeeld />
    </div>
  );
}

function Voorbeeld() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    toast.success('Formulier verzenden', {
      duration: 5000,
      position: 'top-center',
    });

    try {
      for (const key in data) {
        formData.append(key, data[key]);
      }

      if (uploadedFile) {
        console.log('Uploaded file:', uploadedFile);
        // formData.append('file-upload', uploadedFile, uploadedFile?.name);
      }

      console.log('Form data:', formData);

      const response = await fetch('/api/airtable', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Formulier verzonden!', {
          duration: 5000,
          position: 'top-center',
        });
        reset();
        console.log('Form data sent successfully');
      } else {
        toast.error('Formulier niet verzonden, probeer later opnieuw', {
          duration: 5000,
          position: 'top-center',
        });

        console.log('Form data sending failed');
      }
    } catch (error) {
      console.log('Error sending form data:', error);
    }
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <form
      className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Melding onderhoud
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Gebruik een permanent adres waar je post kunt ontvangen.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Voornaam
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  {...register('voornaam', { required: true })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.voornaam ? 'border-red-500' : ''
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Achternaam
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  {...register('achternaam', { required: true })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.achternaam ? 'border-red-500' : ''
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                E-mailadres
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', { required: true })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Telefoonnummer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="phone"
                  autoComplete="tel"
                  {...register('telefoon_nummer', { required: true })}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.telefoon_nummer ? 'border-red-500' : ''
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Adres
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="address"
                  {...register('adres')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Voeg hier een foto van het probleem toe
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="maintenance-details"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Onderhoudsdetails
              </label>
              <div className="mt-2">
                <textarea
                  id="maintenance-details"
                  rows={3}
                  {...register('onderhoudsdetails')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Beschrijf hier de details van het benodigde onderhoud.
              </p>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" value="Onderhoud" {...register('formType')} />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-xl bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Verzenden
        </button>
      </div>
    </form>
  );
}
