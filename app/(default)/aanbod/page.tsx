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
        revalidate: 0,
      },
    },
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const data = await res.json();

  const { records } = data;

  // Sort the records based on the Status field
  const sortedRecords = records.sort((a: any, b: any) => {
    const statusA = a.fields.Status === 'Te huur' ? -1 : 1;
    const statusB = b.fields.Status === 'Te huur' ? -1 : 1;
    return statusA - statusB;
  });

  return sortedRecords;
}

export default async function Page() {
  const data = await fetchHouses();

  return (
    <>
      <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
        <Header
          title="Aanbod"
          image="https://images.unsplash.com/photo-1534352267890-0c7d8e0630bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
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
