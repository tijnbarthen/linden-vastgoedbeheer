'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function CtaSection() {
  const pathname = usePathname();

  if (pathname === '/contact' || pathname.includes('/aanbod')) {
    return <></>;
  }

  return (
    <div
      className="relative isolate overflow-hiddenrounded-xl"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Maak contact met ons team om uw wensen te bespreken en uw zoektocht
            naar het perfecte pand te starten.
          </p> */}
      <div className="mt-10 mb-10 flex items-center justify-center gap-x-6">
        <Link
          href="/contact"
          className="btn-sm text-white bg-blue-950 hover:bg-blue-600 max-w-sm shadow-sm font-cabinet-grotesk"
        >
          Contact
        </Link>
        {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
      </div>
    </div>
  );
}
