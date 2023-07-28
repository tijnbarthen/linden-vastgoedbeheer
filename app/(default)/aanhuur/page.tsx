'use client';

import Header from '@/components/organisms/Header';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header title="Aanhuur" image="/images/aanhuur.jpg" />
      <Voorbeeld />
    </div>
  );
}

function Voorbeeld() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    toast.success('Formulier verzonden', {
      duration: 5000,
      position: 'top-center',
    });
    try {
      console.log(data);
      const response = await fetch('/api/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        toast.success('Formulier verzonden!', {
          duration: 5000,
          position: 'top-center',
        });
        reset();
      } else {
        console.log('Form data sending failed');
      }
    } catch (error) {
      console.log('Error sending form data:', error);
    }
    // Submit logic goes here
  };

  return (
    <form
      className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4"
      data-aos="fade-down"
      data-aos-delay="200"
      onSubmit={handleSubmit(onSubmit)}
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
            <div className="sm:col-span-3">
              <label
                htmlFor="property-status"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Type (Huur/Koop)
              </label>
              <div className="mt-2">
                <select
                  id="property-status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('property-status', { required: true })}
                >
                  <option value="Huur">Huur</option>
                  <option value="Koop">Koop</option>
                </select>
                {errors['property-status'] && (
                  <span>This field is required</span>
                )}
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
                  id="location"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('location', { required: true })}
                />
                {errors.location && <span>This field is required</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="composition"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Samenstelling
              </label>
              <div className="mt-2">
                <select
                  id="composition"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('composition', { required: true })}
                >
                  <option value="Alleenstaand">Alleenstaand</option>
                  <option value="Gezin">Gezin</option>
                  <option value="Stel">Stel</option>
                  <option value="Delers">Delers</option>
                </select>
                {errors.composition && <span>This field is required</span>}
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
                  id="occupants"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('occupants', { required: true })}
                />
                {errors.occupants && <span>This field is required</span>}
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
                  id="bedrooms"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('bedrooms', { required: true })}
                />
                {errors.bedrooms && <span>This field is required</span>}
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
                  id="budget"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('budget', { required: true })}
                />
                {errors.budget && <span>This field is required</span>}
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
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('move-in-date', { required: true })}
                />
                {errors['move-in-date'] && <span>This field is required</span>}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('employment', { required: true })}
                >
                  <option value="JA">JA</option>
                  <option value="NEE">NEE</option>
                </select>
                {errors.employment && <span>This field is required</span>}
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
                  id="income"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('income', { required: true })}
                >
                  <option value="Nee">Nee</option>
                  <option value="Ja">Ja</option>
                </select>
                {errors.income && <span>This field is required</span>}
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
                  id="guarantor"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('guarantor', { required: true })}
                >
                  <option value="Nee">Nee</option>
                  <option value="Ja">Ja</option>
                </select>
                {errors.guarantor && <span>This field is required</span>}
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
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
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
                  id="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('phone', { required: true })}
                />
                {errors.phone && <span>This field is required</span>}
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
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <input type="hidden" value="aanhuur" {...register('formType')} />
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
