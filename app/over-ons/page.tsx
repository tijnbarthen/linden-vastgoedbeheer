import Faqs from '@/components/faqs';

export default function Page() {
  // container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between sm:py-5 md:py-10
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <div className="text-center md:py-28 py-14 bg-indigo-200 text-white">
        <h1 className="h1 text-5xl font-bold ">Over Ons</h1>
      </div>
      <div className="container max-w-6xl mx-auto md:py-24 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-6/12 flex flex-col justify-center">
            <h1 className="h2 font-cabinet-grotesk  text-left mb-6 leading-9 text-gray-800 pb-4">
              Wij nemen u mee in onze werkwijze
            </h1>
            <div>
              <ul className="flex flex-col gap-2 text-lg">
                <li className="">Woning zelfde dag online</li>
                <li>
                  Bezichtigingen en beschikbaarheid 7 dagen per week van 09:00
                  21:00
                </li>
                <li className="">
                  Professionele screening van potentièle huurders
                </li>
                <li className="">
                  Opstellen huurcontracten (bepaalde tijd 8 onbepaalde tijd)
                </li>
                <li className="">Inspectie en sleuteloverdracht</li>
                <li className="">Toegankelijk</li>
                <li className="">Geen leegstand voor verhuurders</li>
                <li className="">No cure no pay</li>
              </ul>
              <button
                className="
          btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm mt-10
					"
              >
                Neem contact op voor persoonlijk advies
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://www.lindenvastgoedbeheer.nl/wp-content/uploads/2021/02/naarden-netherlands-29173-2560x1440-1-e1612462766529.jpg"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container max-w-6xl mx-auto md:py-24 md:px-6 py-9 px-4">
          <h2 className="h2 font-cabinet-grotesk  text-left mb-6">
            Tijd voor verandering binnen de makelaardij...
          </h2>
          <p className="text-lg mb-4">
            Wij geloven dat dit veel beter kan en moet. Bij ons staat
            persoonlijke aanpak, gedrevenheid, actief meedenken,
            professionaliteit en betrouwbaarheid voorop.
          </p>
          <p className="text-lg mb-4">
            Wij doen de bemiddeling van verhuur van woningen. Wij zijn
            aanspreekpunt tijdens het verhuren van een woning en kunnen ook
            optreden voor het beheer van uw woningen.
          </p>
          <p className="text-lg mb-4">
            Het betreft een snelle markt waar wij ons in bevinden en u als
            eigenaar wilt u geen leegstand. Wij zorgen ervoor dat de zaken
            secuur en zakelijk van A tot Z worden afgehandeld. Wij stellen de
            wensen van onze klanten voorop door een passend profiel voor de
            woning te vinden.
          </p>
          <p className="text-lg mb-4">
            Wij geven u marktconform advies, en leveren kwaliteit.
          </p>
          <p className="text-lg">
            Bij ons heeft u altijd een vast contactpersoon, dit maakt het
            persoonlijk.
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-center mb-12 h2 font-cabinet-grotesk">
            Ons Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex space-x-4 items-center">
              <img
                src="https://www.lindenvastgoedbeheer.nl/wp-content/uploads/2022/10/IMG_4858-2-1-1024x1019.jpg"
                alt="team member 1"
                className="w-36 h-36 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Dominique van der Linden</h3>
                <p>EIGENARESSE</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center ">
              <img
                src="https://www.lindenvastgoedbeheer.nl/wp-content/uploads/2021/02/IMG_3905-1-1024x1024.jpg"
                alt="team member 2"
                className="w-36 h-36 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Jenna Wentink</h3>
                <p>VASTGOEDADVISEUR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </div>
  );
}
