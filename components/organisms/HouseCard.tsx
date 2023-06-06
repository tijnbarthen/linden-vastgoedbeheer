import Link from 'next/link';

interface House {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  status: string;
}

interface CardProps {
  house: House;
  className?: string;
}

const Card: React.FC<CardProps> = ({ house, className }) => {
  return (
    <Link href="/aanbod/[id]" as={`/aanbod/${house.id}`} className="relative">
      <span className="absolute top-2 left-2 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {house.status}
      </span>
      <div
        className={`flex flex-col rounded-lg shadow-lg bg-white cursor-pointer ${className}`}
      >
        <img
          className="w-full h-56 object-cover rounded-lg"
          src={house.image}
          alt={house.title}
        />
        <div className="flex flex-col justify-between flex-grow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 font-cabinet-grotesk text-blue-950">
              {house.title}
            </div>
            <p className="text-gray-700 text-base">{house.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-blue-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              {house.price}
            </span>
            <span className="inline-block bg-blue-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ">
              {house.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
