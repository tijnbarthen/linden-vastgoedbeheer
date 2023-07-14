import Image from 'next/image';
import Link from 'next/link';

import HeroImage2 from '@/public/images/hero-image-2.png';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh]">
      {/* Bg */}
      {/* <div className="absolute inset-0 bg-black opacity-5"></div> */}
      <img
        src="https://images.unsplash.com/photo-1536880756060-98a6a140f0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[800px]">
              <h1
                className="h1 font-cabinet-grotesk mb-6 text-3xl sm:text-3xl md:text-4xl text-white lg:text-5xl xl:text-6xl"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Verhuur | Beheer | Aanhuur
                {/* <span
                  className="relative inline-flex text-white h1 font-cabinet-grotesk mb-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  bg-blue-950 px-3"
                  data-aos="fade-right"
                ></span> */}
              </h1>
              {/* <p
                className="text-2xl text-white mb-10 font-cabinet-grotesk font-bold"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Linden Vastgoed jouw partner in vastgoed.
              </p> */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    href="/aanbod"
                    className="btn text-white bg-blue-300 hover:bg-blue-600 w-full shadow-sm"
                    data-aos="fade-left"
                  >
                    Verhuur
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-blue-300 hover:bg-blue-600 w-full shadow-sm "
                    href="/onze-diensten"
                    data-aos="fade-right"
                  >
                    Aanhuur
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-blue-300 hover:bg-blue-600 w-full shadow-sm "
                    href="/onze-diensten"
                    data-aos="fade-right"
                  >
                    Beheer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
