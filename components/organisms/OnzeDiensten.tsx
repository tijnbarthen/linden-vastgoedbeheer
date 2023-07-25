import { BsEnvelopePaper, BsSearch as BsSearchIcon } from 'react-icons/bs';
import { MdBusinessCenter as MdBusinessCenterIcon } from 'react-icons/md';
import { MdCorporateFare as MdCorporateFareIcon } from 'react-icons/md';
import { MdSell as MdSellIcon } from 'react-icons/md';
import { TbDoorEnter as TbDoorEnterIcon } from 'react-icons/tb';
import { MdPhotoCamera as MdPhotoCameraIcon } from 'react-icons/md';
import { IoKeySharp } from 'react-icons/io5';
import { BiCheckboxChecked } from 'react-icons/bi';

const features = [
  {
    name: 'Woningverhuur',
    description:
      'U wilt geen leegstand, daarom zorgen wij ervoor dat de woning op korte termijn wordt bewoond door een betrouwbare huurder.',
    href: '#',
    icon: TbDoorEnterIcon,
  },
  {
    name: 'Vastgoedbeheer',
    description:
      'Wij beheren uw portefeuille op een professionele en accurate manier. Om u als eigenaar volledig te ontzorgen zijn wij het eerste aanspreekpunt voor de huurder. Wij beschikken over een vast onderhoudsteam dat ingezet kan worden bij eventuele storingen en gebreken in de woning.',
    href: '#',
    icon: MdBusinessCenterIcon,
  },
  {
    name: 'Aanhuur',
    description:
      'Droomhuis nog niet gevonden? De zoektocht naar een woning is erg lastig tegenwoordig. Bij ons kunt u een zoekopdracht achterlaten zodat wij samen met u, uw paleis kunnen vinden!',
    href: '#',
    icon: BsSearchIcon,
  },
  {
    name: 'Bedrijfsonroerendgoed',
    description:
      'Bedrijfspand, kantoorruimte of winkelpand verhuren? Wij helpen bij het maken van de volgende stap. Wat doet de markt? Voor welke prijs kun je verhuren of kunt u beter verkopen?',
    href: '#',
    icon: MdCorporateFareIcon,
  },
  {
    name: 'Verkoop',
    description:
      'Onze professionals begeleiden u in het verkoopproces van uw woning. Wij komen bij u langs voor een kosteloos kennismakingsgesprek met waardebepaling.',
    href: '#',
    icon: MdSellIcon,
  },
  {
    name: "Foto's en video's maken van woningen",
    description:
      'Wij zorgen ervoor dat de woning op een professionele manier wordt gepresenteerd en zetten de woning dezelfde dag online.',
    href: '#',
    icon: MdPhotoCameraIcon,
  },
  {
    name: 'Bezichtigingen',
    description: 'Wij zijn 7 dagen per week beschikbaar voor bezichtigingen.',
    href: '#',
    icon: BiCheckboxChecked,
  },
  {
    name: 'Huurovereenkomsten',
    description:
      'Naast het volledig uit handen geven van de verhuur kunt u ook alleen het opstellen van een huurovereenkomst door ons laten verzorgen.',
    href: '#',
    icon: BsEnvelopePaper,
  },
  {
    name: 'Inspecties en sleuteloverdracht',
    description:
      'Voor het uitvoeren van inspecties en de sleuteloverdracht kunt u bij ons terecht, na afloop ontvangt u hiervan een duidelijk inspectierapport.',
    href: '#',
    icon: IoKeySharp,
  },
];

export default function OnzeDiensten({
  centeredText = false,
  withTitle = true,
  itemCount = 9,
}: {
  centeredText?: boolean;
  withTitle?: boolean;
  itemCount?: number;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 mb-10">
      <div className="mx-auto lg:mx-0">
        {withTitle && (
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-cabinet-grotesk"
            style={{
              textAlign: centeredText ? 'center' : 'left',
            }}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Onze diensten
          </h2>
        )}
      </div>
      <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features
            .map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col"
                data-aos="fade-left"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd
                  className="

mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"
                >
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))
            .slice(0, itemCount)}
        </dl>
      </div>
    </div>
  );
}
