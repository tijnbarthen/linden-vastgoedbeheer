export default function Page() {
  return (
    <div className="bg-slate-100">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between sm:py-5 md:py-10">
        <div className="block">
          <img
            className="w-full"
            alt="img of a girl posing"
            src="https://source.unsplash.com/random?house%20amsterdam"
          />
          <div
            className="flex items-center justify-between mt-3 space-x-2 md:space-x-0"
            style={{
              maxWidth: '100%',
            }}
          >
            <img
              alt="img-tag-one"
              className="md:w-auto md:h-auto"
              src="https://source.unsplash.com/random?house%20amsterdam"
            />
            <img
              alt="img-tag-one"
              className="md:w-auto md:h-auto"
              src="https://source.unsplash.com/random?house%20amsterdam"
            />
            <img
              alt="img-tag-one"
              className="md:w-auto md:h-auto"
              src="https://source.unsplash.com/random?house%20amsterdam"
            />
            <img
              alt="img-tag-one"
              className="md:w-auto md:h-auto"
              src="https://source.unsplash.com/random?house%20amsterdam"
            />
            <img
              alt="img-tag-one"
              className="md:w-auto md:h-auto"
              src="https://source.unsplash.com/random?house%20amsterdam"
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="pb-6">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Beschikbaar
            </span>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              Rietwijkerstraat 42-1
            </h1>
            <p className="text-base leading-4 text-gray-600 mt-2 font-bold ">
              Huur € 1.500,- per maand
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <button
              className="
          btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm
					"
            >
              Bezichtiging
            </button>
            <button
              className="
          btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm
					"
            >
              Contact
            </button>
          </div>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              Smaakvol gemeubileerd één-slaapkamer appartement van 62 m² gelegen
              op de 1e verdieping, met een heerlijk balkon. Het appartement is
              beschikbaar per 1 juni 2023. Het vereiste bruto jaarinkomen is 85
              K. Studenten zijn niet toegestaan.
            </p>
            <h2
              className="lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-5"
            >
              Beschrijving
            </h2>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Waarborg: 2 maanden huur
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Nutsvoorzieningen: exclusief
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Contract: maximaal 2 jaar [type B]
            </p>
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              Beschikbaar: 1 juni 2023
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Inschrijving: is toegestaan voor max. 2
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Home-sharing: niet toegestaan
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Studenten: niet toegestaan
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Roken: strikt verboden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
