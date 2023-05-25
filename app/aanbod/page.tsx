const Card = ({ house }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white">
      <img
        className="w-full h-56 object-cover"
        src={house.image}
        alt={house.title}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 font-cabinet-grotesk text-black">
            {house.title}
          </div>
          <p className="text-gray-700 text-base">{house.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
            {house.price}
          </span>
          <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 ">
            {house.location}
          </span>
        </div>
      </div>
    </div>
  );
};

const houses = [
  {
    image: 'https://source.unsplash.com/random?house&301',
    title: 'Moderne Villa met Uitzicht op Zee',
    description:
      'Prachtige moderne villa met adembenemend uitzicht op zee. Voorzien van ruime kamers, hoogwaardige afwerking en een privézwembad.',
    price: '€1.200.000',
    location: 'Zandvoort, Nederland',
  },
  {
    image: 'https://source.unsplash.com/random?house&302',
    title: 'Sfeervol Cottage op het Platteland',
    description:
      'Een gezellig en sfeervol cottage, gelegen in het pittoreske platteland. Geniet van een rustige omgeving en een prachtige tuin.',
    price: '€350.000',
    location: 'Giethoorn, Nederland',
  },
  {
    image: 'https://source.unsplash.com/random?house&303',
    title: 'Luxe Penthouse in het Stadscentrum',
    description:
      'Ervaar het stadsleven op zijn best in dit luxe penthouse. Geniet van een panoramisch uitzicht op de stad en eersteklas voorzieningen.',
    price: '€2.500.000',
    location: 'Amsterdam, Nederland',
  },
  {
    image: 'https://source.unsplash.com/random?house&304',
    title: 'Ruime Gezinswoning met Tuin',
    description:
      'Een perfecte gezinswoning met veel ruimte en een prachtige tuin. Voorzien van meerdere slaapkamers, een grote keuken en een gezellige woonkamer.',
    price: '€650.000',
    location: 'Den Haag, Nederland',
  },
  {
    image: 'https://source.unsplash.com/random?house&305',
    title: 'Modern Loft in de Binnenstad',
    description:
      'Woon in het hart van de bruisende binnenstad in dit stijlvolle en moderne loft. Open plattegrond met hoge plafonds en moderne afwerking.',
    price: '€800.000',
    location: 'Rotterdam, Nederland',
  },
  {
    image: 'https://source.unsplash.com/random?house&306',
    title: 'Afgelegen Bergchalet',
    description:
      'Ontsnap naar een afgelegen bergchalet, omgeven door natuur. Rustieke charme gecombineerd met moderne gemakken in deze rustgevende vakantiebestemming.',
    price: '€450.000',
    location: 'Valkenburg, Nederland',
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-white min-h-screen font-cabinet-grotesk mt-20 h-full">
        <div className="text-center py-28 bg-indigo-200 text-white">
          <h1 className="h1 text-5xl font-bold ">Ons aanbod</h1>
        </div>
        <div className="container max-w-6xl mx-auto sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {houses.map((house, index) => (
              <Card key={index} house={house} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
