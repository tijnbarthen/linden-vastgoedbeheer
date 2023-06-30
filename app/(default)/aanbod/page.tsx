import Link from 'next/link';
import HouseCard from '@/components/organisms/HouseCard';
import Header from '@/components/organisms/Header';

async function fetchHouses() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblc1eqB70PISgpMq/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 1,
      },
    },
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const data = await res.json();

  const { records } = data;

  return records;
}

export default async function Page() {
  const data = await fetchHouses();

  return (
    <>
      <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
        <Header title="Aanbod" />
        <div className="container max-w-6xl mx-auto py-6  px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((house: any) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
