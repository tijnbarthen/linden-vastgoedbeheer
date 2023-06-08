import Header from '@/components/organisms/Header';

export default function Page() {
  return (
    <>
      <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
        <Header title="Diensten" />
        <div className="container max-w-6xl mx-auto md:px-6 py-6 px-4">
          <div className="flex flex-col sm:flex-row justify-between ">
            <div className="w-full lg:w-6/12 flex flex-col justify-center md:px-3 mb-6 ">
              <h1 className="h2 font-cabinet-grotesk  text-left leading-9 text-gray-800 pb-4">
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
        <div className="container max-w-6xl mx-auto px-4 md:px-6 pb-6">
          <div className="flex flex-col sm:flex-row-reverse justify-between">
            <div className="w-full lg:w-6/12 flex flex-col justify-center md:px-6 sm:px-4 mb-6">
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
                  className="rounded-xl mt-4 bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
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
    </>
  );
}

function Example() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600"></p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better workflow
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {/* <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  /> */}
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Push to deploy.
                    </strong>{' '}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  /> */}
                  <span>
                    <strong className="font-semibold text-gray-900">
                      SSL certificates.
                    </strong>{' '}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  /> */}
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database backups.
                    </strong>{' '}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
