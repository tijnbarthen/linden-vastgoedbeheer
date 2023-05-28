const FaqItems = [
  {
    title: 'Hoe kan ik mijn woning te koop aanbieden?',
    content:
      "Om jouw woning te koop aan te bieden, kun je contact opnemen met ons team van makelaars. Zij zullen je begeleiden bij het proces van het opstellen van een verkoopovereenkomst, het maken van professionele foto's en het adverteren van jouw woning op diverse platformen.",
  },
  {
    title: 'Welke documenten heb ik nodig om een woning te huren?',
    content:
      'Voor het huren van een woning dien je meestal enkele documenten te overleggen, zoals een geldig identiteitsbewijs, recente loonstrookjes of een werkgeversverklaring, en mogelijk een bewijs van goed huurgedrag. Neem contact met ons op voor specifieke vereisten en assistentie bij het huurproces.',
  },
  {
    title: 'Wat zijn de kosten voor vastgoedbeheer?',
    content:
      'De kosten voor vastgoedbeheer variëren afhankelijk van verschillende factoren, zoals het aantal en type vastgoedobjecten dat beheerd moet worden, de gewenste diensten en de locatie. Neem contact met ons op voor een persoonlijke offerte en meer informatie over onze tarieven.',
  },
  {
    title: 'Hoe lang duurt het gemiddeld om een woning te verkopen?',
    content:
      'De verkoopduur van een woning kan variëren afhankelijk van verschillende factoren, waaronder de locatie, vraag en aanbod in de markt, de prijs en de staat van de woning. Gemiddeld genomen kan de verkoop enkele weken tot enkele maanden in beslag nemen. Onze ervaren makelaars zullen je begeleiden om het verkoopproces zo efficiënt mogelijk te laten verlopen.',
  },
  {
    title: 'Kan ik een woning bezichtigen voordat ik besluit te huren?',
    content:
      'Ja, wij moedigen potentiële huurders aan om een bezichtiging van de woning te plannen voordat ze een beslissing nemen. Neem contact met ons op om een bezichtiging in te plannen en onze makelaars zullen je begeleiden bij het bekijken van de beschikbare woningen.',
  },
  {
    title: 'Bieden jullie ook vastgoedfinanciering aan?',
    content:
      'Ja, we werken samen met verschillende financiële instellingen en kunnen je in contact brengen met hypotheekadviseurs die je kunnen helpen bij het verkrijgen van vastgoedfinanciering. Neem contact met ons op voor meer informatie en om de mogelijkheden te bespreken.',
  },
];

export default function Faqs() {
  const firstColumnItems = FaqItems.slice(0, Math.ceil(FaqItems.length / 2));
  const secondColumnItems = FaqItems.slice(Math.ceil(FaqItems.length / 2));
  return (
    <section className="bg-slate-400 mb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-gray-100">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Veelgestelde vragen</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {firstColumnItems.map((item, index) => (
                <FaqItem key={index} item={item} />
              ))}
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              {secondColumnItems.map((item, index) => (
                <FaqItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FaqItem = ({ item }: { item: any }) => {
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-cabinet-grotesk font-bold">{item.title}</h4>
      <p className="text-white">{item.content}</p>
    </div>
  );
};
