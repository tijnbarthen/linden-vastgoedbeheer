export const metadata = {
  title: 'Linden Vastgoed',
  description: 'Beheer en verhuur van vastgoed in Amsterdam',
};

import Hero from '@/components/hero';
import Inspiration from '@/components/inspiration';
import HeroSecond from '@/components/organisms/HeroSecond';
import OnzeDiensten from '@/components/organisms/OnzeDiensten';

const fetchData = async () => {
  try {
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

    // Filter the records based on the "Hoofdpagina" field
    const filteredRecords = records
      .filter((record: any) => record.fields.Hoofdpagina === true)
      .slice(0, 9);

    return filteredRecords;
  } catch (error) {
    console.error('Error fetching records:', error);
  }
};

export default async function Home() {
  const res = await fetchData();

  console.log(res);

  if (!res) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Inspiration data={res} />
      <OnzeDiensten centeredText itemCount={5} />
      {/* <Features /> */}

      {/* <Cta /> */}
    </>
  );
}
