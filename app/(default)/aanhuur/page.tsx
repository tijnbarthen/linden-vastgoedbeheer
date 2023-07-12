import Header from '@/components/organisms/Header';

export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header title="Aanhuur" />
      <Voorbeeld />
    </div>
  );
}

function Voorbeeld() {
  return (
    <form
      className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Geef je voorkeuren op en we zullen de beste match voor je vinden.
          </h2>
          <p className="mt-1 text-md leading-6 text-gray-600">
            We zullen ons best doen om je te helpen bij het vinden van je nieuwe
            thuis.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="property-type"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Type vastgoed
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="property-type"
                  id="property-type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="property-status"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Type (Huur/Koop)
              </label>
              <div className="mt-2">
                <select
                  name="property-status"
                  id="property-status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Huur</option>
                  <option>Koop</option>
                </select>
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Prijs
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Locatie
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* AANHUUR Fields */}
            <div className="sm:col-span-3">
              <label
                htmlFor="composition"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Samenstelling
              </label>
              <div className="mt-2">
                <select
                  name="composition"
                  id="composition"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Alleenstaand</option>
                  <option>Gezin</option>
                  <option>Stel</option>
                  <option>Delers</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="occupants"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Met hoeveel personen ga je wonen?
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="occupants"
                  id="occupants"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="bedrooms"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Slaapkamers
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="budget"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Budget
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="move-in-date"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Per wanneer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="move-in-date"
                  id="move-in-date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="employment"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Werk je?
              </label>
              <div className="mt-2">
                <select
                  name="employment"
                  id="employment"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>JA</option>
                  <option>NEE</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="income"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Verdienen je (gezamenlijk) 2,5 x de maandhuur?
              </label>
              <div className="mt-2">
                <select
                  name="income"
                  id="income"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Nee</option>
                  <option>Ja</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="guarantor"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Kan je gebruik maken van een garantsteller?
              </label>
              <div className="mt-2">
                <select
                  name="guarantor"
                  id="guarantor"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Nee</option>
                  <option>Ja</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Naam
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Telefoonnummer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Emailadres
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="extra-info"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Overige extra informatie (voorkeur locatie/etc)
              </label>
              <div className="mt-2">
                <textarea
                  name="extra-info"
                  id="extra-info"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-500 ">
        <p className="text-md text-gray-900">
          Door dit formulier in te vullen ga je akkoord met onze algemene
          voorwaarden:
        </p>

        {/* Disclaimer content */}
        <p className="text-sm text-gray-500">
          Een mooie en financieel realistische huurwoning vinden lijkt in deze
          tijd onmogelijk geworden. Om dit proces toch succesvol te maken, kunt
          u overwegen om ons een 'no cure no pay' zoekopdracht te geven.
        </p>
        <p className="text-sm text-gray-500">
          Wij werken op basis van 'No Cure - No pay', bij een succesvolle
          zoekopdracht vragen wij courtage gelijk aan 1 maand huur exclusief 21%
          BTW.
        </p>
        <p className="text-sm text-gray-500">
          Verder bent u vrij om de zoekopdracht terug te trekken via een e-mail
          of WhatsApp-bericht.
        </p>
        <p className="text-sm text-gray-500">
          Echter, trekt u als kandidaat terug nadat een huurvoorstel is
          geaccepteerd, dan bent u ons een vergoeding schuldig van € 250
          exclusief 21% BTW. Wij verwijzen u graag naar artikel 4.7 van
          onderwerp "Verplichtingen van opdrachtgever" van onze Algemene
          Voorwaarden.
        </p>
        <p className="text-sm">
          Bent u nog op zoek naar de juiste huurwoning in Amsterdam en wilt u
          gebruikmaken van onze service? Klik dan onderaan de pagina verder.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-xl bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Zoeken
        </button>
      </div>
    </form>
  );
}
