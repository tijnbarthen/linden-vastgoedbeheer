import React from 'react';
import Link from 'next/link';
import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import Image from 'next/image';
import { MdBalcony, MdRoofing } from 'react-icons/md';
import { GiGrass } from 'react-icons/gi';

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
    cover_photo?: any;
    Slaapkamers?: string;
    Badkamers?: string;
    M2?: string;
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
    cover_photo,
    Slaapkamers,
    Badkamers,
    M2,
  } = house.fields;

  const getImageUrl = () => {
    if (cover_photo) {
      return cover_photo[0]?.thumbnails?.large.url;
    } else if (Photos && Photos.length > 0) {
      return Photos[0]?.thumbnails?.large.url;
    }
    return null;
  };

  return (
    <Link href="/aanbod/[id]" as={`/aanbod/${RECORD_ID}`}>
      <div
        className={`relative ${className} hover:shadow-xl transition-shadow hover:scale-105 duration-200 ease-in-out h-full items-stretch min-h-full`}
        data-aos="fade-right"
      >
        {Status && (
          <span className="absolute top-2 left-2 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {Status}
          </span>
        )}
        <div
          className={`flex flex-col rounded-lg shadow-lg bg-white h-full items-stretch ${className}`}
        >
          {getImageUrl() && (
            <Image
              className="w-full h-56 object-cover rounded-lg"
              src={getImageUrl()}
              alt={JSON.stringify(Naam)}
              width={500}
              height={300}
              quality={50}
            />
          )}

          <div className="flex flex-col justify-between flex-grow">
            <div className="px-6 py-4">
              {Naam && (
                <div className="font-bold text-xl mb-2 font-cabinet-grotesk text-blue-950">
                  {Naam}
                </div>
              )}
              {Huursom && (
                <p className="text-base leading-4 text-gray-600 mb-4  font-bold ">
                  € {Huursom} excl. per maand
                </p>
              )}
              <div className="flex flex-row gap-4 mb-2">
                {Slaapkamers && (
                  <div className="flex flex-row gap-2 items-center">
                    <IoBedOutline className="text-blue-950" size={20} />
                    <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                      {Slaapkamers}
                    </p>
                  </div>
                )}
                {Badkamers && (
                  <div className="flex flex-row gap-2 items-center">
                    <BiBath className="text-blue-950" size={20} />
                    <p className="ttext-base leading- font-cabinet-grotesk font-bold text-blue-950">
                      {Badkamers}
                    </p>
                  </div>
                )}
                {M2 && (
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
                      {M2}
                    </p>
                  </div>
                )}
                {Buitenruimte && (
                  <div className="flex flex-row gap-4 items-center">
                    {Buitenruimte.map((item: any) => {
                      if (item === 'Balkon') {
                        return (
                          <div key={item} className="flex flex-row gap-1">
                            <MdBalcony className="text-blue-950" size={20} />
                            <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                              {item}
                            </p>
                          </div>
                        );
                      } else if (item === 'Tuin') {
                        return (
                          <div key={item} className="flex flex-row gap-1">
                            <GiGrass className="text-blue-950 mb-1" size={20} />
                            <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                              {item}
                            </p>
                          </div>
                        );
                      } else if (item === 'Dakterras') {
                        return (
                          <div key={item} className="flex flex-row gap-1">
                            <MdRoofing
                              className="text-blue-950 mb-1"
                              size={20}
                            />
                            <p className="text-base leading- font-cabinet-grotesk font-bold text-blue-950">
                              {item}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
              {Omschrijving && (
                <p className="text-gray-700 text-base">{Omschrijving}</p>
              )}
            </div>

            {/* {fields['M2'] && (
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
              )} */}
            {/* <div className="px-6 py-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;
