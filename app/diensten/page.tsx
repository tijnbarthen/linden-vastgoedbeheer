export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <div className="text-center py-28 bg-blue-950 text-white">
        <h1 className="h1 text-5xl font-bold ">Diensten</h1>
      </div>
      <div className="container max-w-6xl mx-auto md:py-24 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-6/12 flex flex-col justify-center">
            <h1 className="h2 font-cabinet-grotesk  text-left mb-6 leading-9 text-gray-800 pb-4">
              Verhuur
            </h1>
            <div>
              <ul className="flex flex-col gap-2 text-lg">
                <li>1e verhuur € 950 inclusief</li>
                <li>Verhuren voor een vaste prijs</li>
                <li>Vast aanspreekpunt</li>
                <li>iedere dag geopend tussen 09:00 & 21:00 uur</li>
                <li>Geen leegstand</li>
                <li>Woning dezelfde dag online</li>
                <li>Persoonlijk contact</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-8">
          <div className="w-full lg:w-6/12 flex flex-col justify-center">
            <h1 className="h2 font-cabinet-grotesk  text-left mb-6 leading-9 text-gray-800 pb-4">
              Beheer
            </h1>
            <div>
              <ul className="flex flex-col gap-2 text-lg">
                <li>3% van de maandeliikse huur per woning</li>
                <li>Eerste aanspreekunt</li>
                <li>Servicegericht</li>
              </ul>
              <button
                className="
          btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm mt-10
					"
              >
                Contact voor meer informatie
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
