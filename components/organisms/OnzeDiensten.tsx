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
      'Het betreft een snelle markt waar wij ons in bevinden en spelen hier op een goede manier op in. U wilt geen leegstand en wij zorgen ervoor dat de woning in de vrije sector kan worden verhuurd en vinden op korte termijn een betrouwbare huurder.',
    href: '#',
    items: [
      'Woning dezelfde dag online',
      'Beschikbaarheid 7 dagen per week van 09:00 - 21:00',
      'Advertenties maken',
      'Servicegericht',
      'Verduurzamen',
      'Professionele screening van potentiële huurder',
      'Inspecties en sleuteloverdracht',
      'Geen leegstand voor verhuurders',
      'No cure no pay',
    ],
    icon: TbDoorEnterIcon,
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
      'Onze professionals begeleiden u in het verkoopproces van uw woning. Wij komen graag bij u langs voor een kosteloos kennismakingsgesprek met waardebepaling.',
    href: '#',
    icon: MdSellIcon,
  },
  {
    name: 'Vastgoedbeheer',
    description:
      'Wij beheren uw portefeuille op een betrouwbare en accuratie manier. Wij streven naar verduurzaming en daarom ook dat eigenaren die bereid zijn te investeren, dat de woning en huurders.',
    href: '#',
    icon: MdBusinessCenterIcon,
  },
  {
    name: 'Zoekerlijst',
    description:
      'De zoektocht naar een woning is erg lastig tegenwoordig. Wij hebben onze eigen lijst waar de zoekopdracht in terecht komt.',
    href: '#',
    icon: BsSearchIcon,
  },
  {
    name: 'Foto’s en video’s maken van woningen',
    description:
      'Wij maken professionele foto’s en video’s van uw woning. Woning dezelfde dag online.',
    href: '#',
    icon: MdPhotoCameraIcon,
  },
  {
    name: 'Bezichtigingen en beschikbaarheid 7 dagen per week',
    description:
      'Wij zijn 7 dagen per week beschikbaar voor bezichtigingen. Wij zorgen ervoor dat de woning op een professionele manier wordt gepresenteerd.',
    href: '#',
    icon: BiCheckboxChecked,
  },
  {
    name: 'Professionele screening van potentiële huurder',
    description:
      'Vertrouw op onze professionele screening voor betrouwbare huurders en de perfecte match.',
    href: '#',
    icon: BsEnvelopePaper,
  },
  {
    name: 'Inspecties en sleuteloverdracht',
    description:
      'Vertrouw op ons voor waterdichte huurovereenkomsten en moeiteloze digitale inspectierapporten.',
    href: '#',
    icon: IoKeySharp,
  },
];

export default function OnzeDiensten({
  centeredText = false,
  withTitle = true,
}: {
  centeredText?: boolean;
  withTitle?: boolean;
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
          >
            Onze diensten
          </h2>
        )}
      </div>
      <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
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
          ))}
        </dl>
      </div>
    </div>
  );
}
