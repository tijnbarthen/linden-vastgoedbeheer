export const metadata = {
  title: 'Linden Vastgoed',
  description: 'Beheer en verhuur van vastgoed in Amsterdam',
};

import Hero from '@/components/hero';
import Inspiration from '@/components/inspiration';
import HeroSecond from '@/components/organisms/HeroSecond';
import OnzeDiensten from '@/components/organisms/OnzeDiensten';

export default async function Home() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblc1eqB70PISgpMq/?maxRecords=6`,
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
  return (
    <>
      <Hero />
      <Inspiration data={records} />
      <OnzeDiensten centeredText />
      {/* <Features /> */}

      {/* <Cta /> */}
    </>
  );
}
