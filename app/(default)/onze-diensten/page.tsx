import Features from '@/components/features';
import Header from '@/components/organisms/Header';
import OnzeDiensten from '@/components/organisms/OnzeDiensten';

// function Page() {
//   return (
//     <>
//       <div className="bg-white min-h-screen font-cabinet-grotesk h-full">
//         <Header title="Vastgoedeigenaren" />
//         <div className="container max-w-6xl mx-auto md:px-6 py-6 px-4">
//           <div className="flex flex-col sm:flex-row justify-between">
//             <div className="w-full lg:w-6/12 flex flex-col justify-center md:px-3 mb-6">
//               <h1 className="h2 font-cabinet-grotesk text-left leading-9 text-gray-800 pb-4">
//                 Woningverhuur
//               </h1>
//               <div>
//                 <ul className="flex flex-col gap-2 text-lg">
//                   <li>
//                     Het betreft een snelle markt waar wij ons in bevinden en
//                     spelen hier op een goede manier op in.
//                   </li>
//                   <li>
//                     U wilt geen leegstand en wij zorgen ervoor dat de woning in
//                     de vrije sector kan worden verhuurd en vinden op korte
//                     termijn een betrouwbare huurder.
//                   </li>
//                   <li>Woning dezelfde dag online</li>
//                   <li>Beschikbaarheid 7 dagen per week van 09:00 - 21:00</li>
//                   <li>Advertenties maken</li>
//                   <li>Servicegericht</li>
//                   <li>Verduurzamen</li>
//                   <li>Professionele screening van potentiële huurder</li>
//                   <li>Inspecties en sleuteloverdracht</li>
//                   <li>Geen leegstand voor verhuurders</li>
//                   <li>No cure no pay</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="w-full lg:w-6/12 ">
//               <img
//                 className="w-full h-full object-cover rounded-lg"
//                 src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                 alt="A group of People"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="container max-w-6xl mx-auto px-4 md:px-6 pb-6">
//           <div className="flex flex-col sm:flex-row-reverse justify-between">
//             <div className="w-full lg:w-6/12 flex flex-col justify-center md:px-6 sm:px-4 mb-6">
//               <h1 className="h2 font-cabinet-grotesk text-left mb-6 leading-9 text-gray-800 pb-4">
//                 Bedrijfsonroerend
//               </h1>
//               <div>
//                 <ul className="flex flex-col gap-2 text-lg">
//                   <li>
//                     Bedrijfspand, kantoorruimte of winkelpand verhuren? Wij
//                     helpen bij het maken van de volgende stap.
//                   </li>
//                   <li>
//                     Wij adviseren over de markt en bepalen samen met u of
//                     verhuren of verkopen de beste optie is.
//                   </li>
//                 </ul>
//                 <button
//                   className="rounded-xl mt-4 bg-blue

// -950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Neem contact met ons op voor meer informatie
//                 </button>
//               </div>
//             </div>
//             <div className="w-full lg:w-6/12 ">
//               <img
//                 className="w-full h-full object-cover rounded-lg"
//                 src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80"
//                 alt="A group of People"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="relative bg-white">
//           <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
//             <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
//               <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
//                 <img
//                   className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
//                   src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="px-6 lg:contents">
//               <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
//                 <p className="text-base font-semibold leading-7 text-indigo-600"></p>
//                 <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                   Verkoop
//                 </h1>
//                 <p className="mt-6 text-xl leading-8 text-gray-700">
//                   Onze professionals begeleiden u in het verkoopproces van uw
//                   woning. Wij komen graag bij u langs voor een kosteloos
//                   kennismakingsgesprek met waardebepaling.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Example() {
//   return (
//     <div className="relative bg-white">
//       <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
//         <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
//           <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
//             <img
//               className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
//               src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="px-6 lg:contents">
//           <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
//             <p className="text-base font-semibold leading-7 text-indigo-600"></p>
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Vastgoedbeheer
//             </h1>
//             <p className="mt-6 text-xl leading-8 text-gray-700">
//               Wij beheren uw portefeuille op een betrouwbare en accurate manier.
//               Wij streven naar verduurzaming en zorgen ervoor dat eigenaren die
//               bereid zijn te investeren, de woning en huurders krijgen die ze
//               verdienen.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <Page />
//       <Example />
//     </>
//   );
// }

import { BsSearch as BsSearchIcon } from 'react-icons/bs';
import { MdBusinessCenter as MdBusinessCenterIcon } from 'react-icons/md';
import { MdCorporateFare as MdCorporateFareIcon } from 'react-icons/md';
import { MdSell as MdSellIcon } from 'react-icons/md';
import { TbDoorEnter as TbDoorEnterIcon } from 'react-icons/tb';

export default function Page() {
  return (
    <>
      <Header title="Onze Diensten" image="/images/onzeDiensten.jpg" />
      <div className="bg-white py-6">
        <OnzeDiensten withTitle={false} />
      </div>
    </>
  );
}
