import Image from 'next/image';

const people = [
  {
    name: 'Dominique van der Linden',
    role: 'Vastgoedadviseur',
    imageUrl: '/images/do-van-der-linden.jpg',
    bio: '',
    linkedinUrl: '#',
  },
  {
    name: 'Jenna Wentink',
    role: 'Vastgoedadviseur',
    imageUrl: '/images/jenna.jpg',
    bio: '',
    linkedinUrl: '#',
  },
];

export default async function TeamSection() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblmCq98vQYOrY6qY/`,
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

  return (
    <div className="bg-slate-100 my-10">
      <div className="py-24 md:py-32 lg:py-24 max-w-6xl mx-auto">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 px-4 md:px-6  xl:grid-cols-3">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl h2 tracking-tight text-gray-900 sm:text-4xl">
              Ons Team
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            </p> */}
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {records.map((person: any) => (
              <li key={person.id}>
                <img
                  className="aspect-[3/3] w-full rounded-2xl object-cover"
                  src={person.fields.imageUrl[0].thumbnails.large.url}
                  alt={person.fields.name}
                  width={300}
                  height={300}
                  style={{
                    objectPosition: 'center top',
                  }}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.fields.Name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.fields.role}
                </p>
                {/* <p className="mt-4 text-base leading-7 text-gray-600">

                </p> */}
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.fields.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
