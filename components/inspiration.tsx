import Link from 'next/link';
import HouseCard from '@/components/organisms/HouseCard';

export default function Inspiration({ data }: { data: any }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-down">
        <div className="py-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="pb-6 md:pb-6">
            <div className="relative text-center">
              <h2
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-cabinet-grotesk text-center"
                data-aos="fade-down"
              >
                Ons portfolio
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
              {data.map((house: any) => (
                <HouseCard key={house.id} house={house} data-aos="fade-down" />
              ))}
            </div>
            <div className="flex justify-center mt-10" data-aos="fade-down">
              <Link href="/aanbod">
                <button className="bg-blue-300 text-white px-4 py-2 rounded-full">
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
