import { BsEnvelopePaper, BsSearch as BsSearchIcon } from 'react-icons/bs';
import { MdBusinessCenter as MdBusinessCenterIcon } from 'react-icons/md';
import { MdCorporateFare as MdCorporateFareIcon } from 'react-icons/md';
import { MdSell as MdSellIcon } from 'react-icons/md';
import { TbDoorEnter as TbDoorEnterIcon } from 'react-icons/tb';
import { MdPhotoCamera as MdPhotoCameraIcon } from 'react-icons/md';
import { IoKeySharp } from 'react-icons/io5';
import { BiCheckboxChecked } from 'react-icons/bi';

export default async function OnzeDiensten({
  centeredText = false,
  withTitle = true,
  onHomePage = false,
}: {
  centeredText?: boolean;
  withTitle?: boolean;
  onHomePage?: boolean;
}) {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblQAgAMpfeetN2p9/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 0,
      },
    },
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  const { records } = data;

  const filteredRecords = onHomePage
    ? records.filter((record: any) => record.fields?.homepage === true)
    : records;

  return (
    <div className="mx-auto max-w-6xl px-6 mb-10">
      <div className="mx-auto lg:mx-0">
        {withTitle && (
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-cabinet-grotesk"
            style={{
              textAlign: centeredText ? 'center' : 'left',
            }}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Onze diensten
          </h2>
        )}
      </div>
      <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {filteredRecords.map((record: any) => (
            <div key={record.id} className="flex flex-col" data-aos="fade-left">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                  {record.fields?.icon === 'TbDoorEnterIcon' && (
                    <TbDoorEnterIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'MdBusinessCenterIcon' && (
                    <MdBusinessCenterIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'BsSearchIcon' && (
                    <BsSearchIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon.includes('MdCorporateFare') && (
                    <MdCorporateFareIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'MdSellIcon' && (
                    <MdSellIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'MdPhotoCameraIcon' && (
                    <MdPhotoCameraIcon className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'IoKeySharp' && (
                    <IoKeySharp className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'BiCheckboxChecked' && (
                    <BiCheckboxChecked className="h-6 w-6 text-white" />
                  )}
                  {record.fields?.icon === 'BsEnvelopePaper' && (
                    <BsEnvelopePaper className="h-6 w-6 text-white" />
                  )}
                </div>
                {record.fields.Service}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{record.fields?.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
