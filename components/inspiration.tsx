import Link from 'next/link';
import Image from 'next/image';
import Author01 from '@/public/images/author-01.jpg';
import CategorySelector from '@/components/organisms/CategorySelector';
import HouseCard from '@/components/organisms/HouseCard';
import { fetchHouses } from '@/utils/fetchHouses';

export default async function Inspiration() {
  const data = await fetchHouses(6);

  console.log(data);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-6 md:pb-6">
            <div className="relative text-center">
              <h2 className="h2  font-cabinet-grotesk">Ons portfolio</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
              {data.map((house: any) => (
                <HouseCard key={house.id} house={house} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/aanbod">
                <button className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Bekijk alles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
