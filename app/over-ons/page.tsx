import Faqs from '@/components/faqs';
import ChangeInRealEstate from '@/components/organisms/ChangeInRealEstate';
import Container from '@/components/organisms/Container';
import ContainerFull from '@/components/organisms/ContainerFull';
import Header from '@/components/organisms/Header';
import TeamSection from '@/components/organisms/TeamSection';

export default function Page() {
  // container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between sm:py-5 md:py-10
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header
        title="Over ons"
        image="https://images.unsplash.com/photo-1658119416373-42979248e4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />
      <div className="container max-w-6xl mx-auto md:px-6 py-6 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-6/12 flex flex-col justify-center py-6">
            <h1 className="h2 font-cabinet-grotesk text-4xl  text-left mb-6 leading-9 text-gray-800 pb-4">
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
          btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm mt-10
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
      <ChangeInRealEstate />
      <TeamSection />
      <Faqs />
    </div>
  );
}
