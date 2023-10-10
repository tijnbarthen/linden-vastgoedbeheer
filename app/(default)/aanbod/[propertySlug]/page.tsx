import Container from '@/components/organisms/Container';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useState } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import { MdBalcony } from 'react-icons/md';
import { GiGrass } from 'react-icons/gi';
import ImageComponent from '@/components/organisms/ImageComponent';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblc1eqB70PISgpMq/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) {
      return (
        <div className="bg-white">
          <h2>Something Went Wrong</h2>
        </div>
      );
    }

    const data = await res.json();

    return data.records.map((house: any) => ({
      propertySlug: house.fields.RECORD_ID,
    }));
  } catch (error) {
    // Handle the error
    console.error('Error in generateStaticParams:', error);
    // You can choose to throw the error again or return a default value
    // throw error;
  }
}

const getHouseData = async (propertySlug: string) => {
  try {
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblc1eqB70PISgpMq/`;
    const headers = {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    };
    const params = {
      filterByFormula: `{RECORD_ID} = "${propertySlug}"`,
    };

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;

    const res = await fetch(fullUrl, {
      headers,
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      return <div>Somethig went wrong</div>;
    }

    const data = await res.json();

    return data.records[0];
  } catch (error) {
    // Handle the error
    console.error('Error in getHouseData:', error);
    // You can choose to throw the error again or return a default value
    throw error;
  }
};

export default async function Page({ params }: { params: any }) {
  try {
    const { propertySlug } = params;

    const houseData = await getHouseData(propertySlug);

    if (!houseData) {
      return (
        <div className="bg-white">
          <h2>Something Went Wrong</h2>
        </div>
      );
    }

    const { fields } = houseData;

    return (
      <div className="bg-white">
        <div className="container max-w-6xl mx-auto px-6 lg:flex items-start justify-between py-6 gap-6">
          <div className="block md:py-0 lg:w-1/2 xl:w-3/5">
            {fields['Photos'] && <imgComponent images={fields['Photos']} />}
          </div>
          <div className="xl:w-2/5 lg:w-1/2  mt-6 lg:mt-0">
            <div className="pb-6">
              {fields.Status && (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {fields.Status}
                </span>
              )}
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
                {fields.Naam && fields.Naam}
              </h1>
              {fields.Huursom && (
                <p className="text-base leading-4 text-gray-600 mt-2 font-bold ">
                  € {fields.Huursom} excl. per maand
                </p>
              )}
            </div>
            <div className="flex flex-row mb-5 gap-4 ">
              {fields.Slaapkamers && (
                <div className="flex flex-row gap-2 items-center">
                  <IoBedOutline className="text-blue-950" size={20} />
                  <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                    {fields.Slaapkamers}
                  </p>
                </div>
              )}
              {fields.Badkamers && (
                <div className="flex flex-row gap-2 items-center">
                  <BiBath className="text-blue-950" size={20} />
                  <p className="ttext-base leading- font-cabinet-grotesk font-bold text-blue-950">
                    {fields.Badkamers}
                  </p>
                </div>
              )}
              {fields['M2'] && (
                <div className="flex flex-row gap-2 items-center">
                  <span
                    className=" text-blue-950 border border-blue-950 text-sm"
                    style={{
                      padding: '0 4px',
                    }}
                  >
                    M²
                  </span>
                  <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                    {fields['M2']}
                  </p>
                </div>
              )}
              {fields.Buitenruimte && (
                <div className="flex flex-row gap-4 items-center">
                  {fields.Buitenruimte.map((item: any) => {
                    if (item === 'Balkon') {
                      return (
                        <>
                          <MdBalcony
                            className="text-blue-950"
                            size={20}
                            key={item}
                          />
                          <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                            {item}
                          </p>
                        </>
                      );
                    } else if (item === 'Tuin') {
                      return (
                        <>
                          <GiGrass
                            className="text-blue-950 mb-1"
                            size={20}
                            key={item}
                          />
                          <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                            {item}
                          </p>
                        </>
                      );
                    }
                  })}
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6">
              {/* <button
                className={`btn-sm text-white ${
                  fields.Status === 'Verhuurd'
                    ? 'bg-slate-600'
                    : 'bg-blue-950 hover:bg-blue-600'
                } w-full shadow-sm`}
                disabled={fields.Status === 'Verhuurd' ? false : false}
              >
                Huurvoorstel
              </button> */}
              <Link href="/contact">
                <button
                  className={`btn-sm text-white ${
                    fields.Status === 'Verhuurd'
                      ? 'bg-slate-600'
                      : 'bg-blue-950 hover:bg-blue-600'
                  } w-full shadow-sm`}
                  disabled={fields.Status === 'Verhuurd' ? false : false}
                >
                  Contact
                </button>
              </Link>
            </div>
            <div>
              {fields.Omschrijving && (
                <p
                  className="text-base lg:leading-tight leading-normal text-gray-600 mt-7"
                  dangerouslySetInnerHTML={{
                    __html: fields.Omschrijving.replace(/\n/g, '<br />'),
                  }}
                ></p>
              )}
            </div>
          </div>
        </div>
        {/* {fields.Status !== 'Verhuurd' && <RentalProposalForm house={fields} />} */}
      </div>
    );
  } catch (error) {
    // Handle the error
    console.error('Error in Page:', error);
    // Render an appropriate error message or fallback component
    return <div>Something went wrong</div>;
  }
}

function RentalProposalForm({ house }: { house: any }) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="bg-slate-100 my-6">
      <form
        className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4"
        // onSubmit={handleSubmit}
      >
        <div className="space-y-12">
          <div className="pb-12 flex justify-center flex-col items-center">
            <h2 className="text-3xl font-semibold leading-7 text-gray-900 font-cabinet-grotesk">
              Huur voorstel voor
            </h2>
            <h2 className="text-3xl font-semibold leading-7 text-gray-900 font-cabinet-grotesk">
              {house.Naam}
            </h2>
            {/* Form fields */}
            <div className="space-y-8 mt-10">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adres
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={house.Adres}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="rent"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Huurprijs
                </label>
                <div className="mt-2">
                  <input
                    id="rent"
                    name="rent"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 sm:text-sm sm:leading-6"
                    defaultValue={house.Huursom}
                    disabled
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="offer"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Doe een aanbod
                </label>
                <div className="mt-2">
                  <input
                    id="offer"
                    name="offer"
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    defaultValue=""
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="start-date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Start Huurperiode
                </label>
                <div className="mt-2">
                  <input
                    id="start-date"
                    name="start-date"
                    type="date"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue=""
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="guarantee"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Borg
                </label>
                <div className="mt-2">
                  <input
                    id="guarantee"
                    name="guarantee"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={'€' + house.Waarborgsom * 2}
                    disabled
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="renters"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Aantal Huurders
                </label>
                <div className="mt-2">
                  <select
                    id="renters"
                    name="renters"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    defaultValue="1"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="+5">+5</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      required
                    />
                  </div>
                  <div className=" text-sm leading-6">
                    <div className="flex flex-row items-center">
                      <label
                        htmlFor="privacy"
                        className="font-medium text-gray-900"
                      >
                        Bevestig Privacy
                      </label>
                    </div>
                    <p className="text-gray-500">
                      Ik bevestig dat ik de privacy policy heb gelezen en ermee
                      akkoord ga.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-3xl bg-blue-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Versturen
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
