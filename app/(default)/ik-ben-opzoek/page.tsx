import Header from '@/components/organisms/Header';

export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header title="Vastgoedzoeken" />
      <Voorbeeld />
    </div>
  );
}

function Voorbeeld() {
  return (
    <form className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4">
      <div className="space-y-12">
        <div className=" pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Zoek naar vastgoed
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Geef je voorkeuren op en we zullen de beste match voor je vinden.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
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
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="property-status"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Status (Huur/Koop)
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

            <div className="sm:col-span-3">
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
            </div>

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
          </div>
        </div>
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
