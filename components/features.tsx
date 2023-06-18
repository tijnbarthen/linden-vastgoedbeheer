const FeatureItems = [
  {
    title: 'Woningverkoop',
    content:
      'Wij helpen je bij het succesvol verkopen van jouw woning. Van het opstellen van aantrekkelijke advertenties tot het begeleiden van onderhandelingen, wij zorgen voor een soepele verkoopervaring.',
  },
  {
    title: 'Woningverhuur',
    content:
      'Wij nemen het gedoe van het vinden van huurders uit handen. Met ons uitgebreide netwerk en grondige screening vinden we betrouwbare huurders en stellen we waterdichte huurovereenkomsten op.',
  },
  {
    title: 'Vastgoedbeheer',
    content:
      'Laat het beheer van jouw vastgoed aan ons over. Van huurincasso en technisch onderhoud tot het regelen van reparaties, wij zorgen ervoor dat jouw vastgoedrendement wordt geoptimaliseerd.',
  },
  {
    title: 'Aankoopbegeleiding',
    content:
      'Op zoek naar jouw droomhuis? Onze ervaren makelaars staan klaar om je te begeleiden bij elke stap van het aankoopproces. We vinden de perfecte woning die aan al jouw wensen voldoet.',
  },
  {
    title: 'Taxaties',
    content:
      'Onze gecertificeerde taxateurs bieden nauwkeurige en betrouwbare taxatierapporten. Of het nu gaat om een woningtaxatie voor verkoop, aankoop of hypotheekdoeleinden, wij leveren hoogwaardige taxatiediensten.',
  },
  {
    title: 'Vastgoedadvies',
    content:
      'Met onze diepgaande kennis van de vastgoedmarkt bieden we deskundig advies op maat. Of je nu een investeerder bent die op zoek is naar rendabele kansen of een verkoper die strategisch advies nodig heeft, wij staan voor je klaar.',
  },
];

export default function Features() {
  const firstColumnItems = FeatureItems.slice(
    0,
    Math.ceil(FeatureItems.length / 2),
  );
  const secondColumnItems = FeatureItems.slice(
    Math.ceil(FeatureItems.length / 2),
  );

  return (
    <section className="bg-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-3xl h2 font-cabinet-grotesk text-blue-950">
              Onze diensten
            </h2>
            {/* <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p> */}
          </div>

          <ul className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* List Items */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* The five list items should be included here */}
              {firstColumnItems.map((item, index) => (
                <FeatureItem key={index} item={item} />
              ))}

              {/* Other list items go here... */}
            </div>

            {/* List Items */}
            <div className="w-full md:w-1/2 space-y-8">
              {secondColumnItems.map((item, index) => (
                <FeatureItem key={index} item={item} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ item }: { item: any }) => {
  return (
    <li>
      <div className="text-2xl font-cabinet-grotesk font-bold text-blue-950 mb-2">
        {item.title}
      </div>
      <div className=" text-blue-950">{item.content}</div>
    </li>
  );
};
