'use client';

import Container from '@/components/organisms/Container';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Swipeable } from 'react-swipeable';
import { useState } from 'react';

export default function Page() {
  return (
    <div className="bg-slate-100">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between py-6 gap-6">
        <div className="block py-10 md:py-0">
          <Carousel
            infiniteLoop={true}
            showIndicators={false}
            autoPlay
            interval={5000}
            showThumbs={false}
          >
            <div>
              <img
                className="w-full"
                alt="img of a girl posing"
                src="https://source.unsplash.com/random?house%20amsterdam"
              />
            </div>
            <div>
              <img
                className="w-full"
                alt="img-tag-one"
                src="https://source.unsplash.com/random?house%20amsterdam"
              />
            </div>
            <div>
              <img
                className="w-full"
                alt="img-tag-one"
                src="https://source.unsplash.com/random?house%20amsterdam"
              />
            </div>
            <div>
              <img
                className="w-full"
                alt="img-tag-one"
                src="https://source.unsplash.com/random?house%20amsterdam"
              />
            </div>
            <div>
              <img
                className="w-full"
                alt="img-tag-one"
                src="https://source.unsplash.com/random?house%20amsterdam"
              />
            </div>
          </Carousel>
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
          btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm
					"
            >
              Bezichtiging
            </button>
            <button
              className="
          btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm
					"
            >
              Contact
            </button>
          </div>
          <div>
            <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              Smaakvol gemeubileerd één-slaapkamer appartement van 62 m² gelegen
              op de 1e verdieping, met een heerlijk balkon. Het appartement is
              beschikbaar per 1 juni 2023. Het vereiste bruto jaarinkomen is 85
              K. Studenten zijn niet toegestaan.
            </p>
          </div>
        </div>
      </div>
      <Container>
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
      </Container>
      <RentalProposalForm />
    </div>
  );
}

function RentalProposalForm() {
  const [offer, setOffer] = useState('');
  const [startDate, setStartDate] = useState('');
  const [numberOfTenants, setNumberOfTenants] = useState(1);
  const [agreementConfirmation, setAgreementConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Voeg hier de logica toe om het formulier te verwerken
  };

  return (
    <form
      className="max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Huur voorstel
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Javastraat
            <br />
            Beantwoord onderstaande vragen, zodat we jouw voorstel zo snel
            mogelijk kunnen verwerken.
          </p>

          <label className="mt-8">
            Adres:
            <input
              type="text"
              value="Javastraat"
              readOnly
              className="input-field"
            />
          </label>

          <label className="mt-4">
            Huur:
            <input
              type="text"
              value="€ 2750 /maand"
              readOnly
              className="input-field"
            />
          </label>

          <label className="mt-4">
            Doe hier uw bod:
            <input
              type="text"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="€/maand"
              className="input-field"
            />
          </label>

          <label className="mt-4">
            Start huurovereenkomst:
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="1 augustus 2023"
              className="input-field"
            />
          </label>

          <label className="mt-4">
            Waarborg:
            <input
              type="text"
              value="2 maanden huur"
              readOnly
              className="input-field"
            />
          </label>

          <p>
            Indien uw inkomen of het inkomen van uw garantsteller niet in
            Nederland is genoten of indien u ondernemer bent, is de vereiste
            waarborgsom gelijk aan 4 maanden huur.
          </p>

          <p>
            Belangrijke informatie:
            <br />
            Gestoffeerd
            <br />
            Huur exclusief; gas, licht, water, internet en tv.
            <br />
            Soort contract - 2 jaar (type B)
            <br />
            Inschrijving voor max. 2 personen
            <br />
            Woningdelen is niet toegestaan
            <br />
            Huisdieren zijn toegestaan op aanvraag (1 maand extra borg)
          </p>

          <label className="mt-4">
            Selecteer het aantal huurders:
            <select
              value={numberOfTenants}
              onChange={(e) => setNumberOfTenants(Number(e.target.value))}
              className="input-field"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>

          <label className="mt-4">
            <input
              type="checkbox"
              checked={agreementConfirmation}
              onChange={(e) => setAgreementConfirmation(e.target.checked)}
            />
            Ik bevestig dat alle hierboven verstrekte informatie correct en
            definitief is.
          </label>

          <p>
            Onvolledige aanvragen zonder de vereiste documenten worden niet in
            behandeling genomen.
          </p>
          <p>
            Uw gegevens worden vertrouwelijk behandeld en worden automatisch
            gewist nadat de aanvraag is beoordeeld.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-xl bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Verzenden
        </button>
      </div>
    </form>
  );
}
