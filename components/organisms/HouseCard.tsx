import React from 'react';
import Link from 'next/link';

interface House {
  fields: {
    id?: string;
    Photos?: Array<any>;
    Naam?: string;
    Omschrijving?: string;
    Huursom?: string;
    Adres?: string;
    Status?: string;
    Buitenruimte?: string[];
    slug?: string;
    RECORD_ID?: string;
  };
}

interface CardProps {
  house: House;
  className?: string;
}

const HouseCard: React.FC<CardProps> = ({ house, className }) => {
  const {
    Naam,
    Omschrijving,
    Huursom,
    Adres,
    Status,
    Buitenruimte,
    Photos,
    id,
    slug,
    RECORD_ID,
  } = house.fields;

  return (
    <Link href="/aanbod/[id]" as={`/aanbod/${RECORD_ID}`}>
      <div
        className={`relative ${className} hover:shadow-xl transition-shadow hover:scale-105 duration-200 ease-in-out h-full items-stretch min-h-full`}
      >
        {Status && (
          <span className="absolute top-2 left-2 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {Status}
          </span>
        )}
        <div
          className={`flex flex-col rounded-lg shadow-lg bg-white h-full items-stretch ${className}`}
        >
          {Photos && Photos[0] && (
            <img
              className="w-full h-56 object-cover rounded-lg"
              src={Photos[0]?.thumbnails?.large.url}
              alt={Naam}
            />
          )}
          <div className="flex flex-col justify-between flex-grow">
            <div className="px-6 py-4">
              {Naam && (
                <div className="font-bold text-xl mb-2 font-cabinet-grotesk text-blue-950">
                  {Naam}
                </div>
              )}
              {Omschrijving && (
                <p className="text-gray-700 text-base">{Omschrijving}</p>
              )}
            </div>
            <div className="px-6 py-4">
              {Huursom && (
                <span className="inline-block bg-blue-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  €{Huursom}
                </span>
              )}
              {Adres && (
                <span className="inline-block bg-blue-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ">
                  {Adres}
                </span>
              )}
              {Buitenruimte && (
                <span className="inline-block bg-blue-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  {Buitenruimte.splice(0, 2).join(', ')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;
