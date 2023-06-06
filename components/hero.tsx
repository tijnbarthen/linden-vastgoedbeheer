import Image from 'next/image';
import Link from 'next/link';

import HeroImage2 from '@/public/images/hero-image-2.png';

export default function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 rounded-bl-[100px] bg-blue-950 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              <h1
                className="h1 font-cabinet-grotesk mb-6 text-2xl sm:text-3xl md:text-4xl text-white lg:text-5xl xl:text-6xl aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Verhuur, verkoop
                <span className="relative inline-flex text-blue-300 h1 font-cabinet-grotesk mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl aos-init aos-animate">
                  <svg
                    className="absolute left-0 top-full -mt-4 max-w-full -z-10"
                    width="220"
                    height="24"
                    viewBox="0 0 220 24"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  vastgoedbeheer
                </span>
              </h1>
              <p
                className="text-xl text-white mb-10 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Vind jouw ideale woning, verkoop met gemak of laat jouw vastgoed
                professioneel beheren.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm border-white border-2"
                    href="/diensten"
                  >
                    Verhuur
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-gray-600 bg-white hover:bg-blue-100 hover:text-blue-600 w-full shadow-sm"
                    href="/diensten"
                  >
                    Beheer
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            {/* Image */}
            <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12a flex justify-center"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <Image
                src={HeroImage2}
                className="md:max-w-none"
                width="584"
                height="659"
                priority
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
