'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function CtaSection() {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname === '/contact') {
    return <></>;
  }

  return (
    <div
      className="relative isolate overflow-hidden bg-blue-300 rounded-xl"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div className="px-6 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Neem contact met ons op voor
            <span className="text-blue-950"> uw vastgoedbehoeften</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Maak contact met ons team om uw wensen te bespreken en uw zoektocht
            naar het perfecte pand te starten.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="btn-sm text-white bg-blue-950 hover:bg-blue-600 max-w-sm shadow-sm"
            >
              Contact
            </Link>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
