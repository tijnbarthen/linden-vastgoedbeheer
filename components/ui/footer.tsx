import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/images/logo-linden.png';
import CtaSection from '../molecules/CtaSection';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Aanbod',
    path: '/aanbod',
  },
  {
    title: 'Over ons',
    path: '/over-ons',
  },
  {
    title: 'Onze diensten',
    path: '/onze-diensten',
  },
  {
    title: 'Aanhuur',
    path: '/aanhuur',
  },
  {
    title: 'Onderhoud',
    path: '/onderhoud',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <CtaSection />
        <div className="py-8 md:py-12 border-t border-gray-900/10">
          {/* Top area */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="inline-flex group mb-8 sm:mb-0" href="/">
                <Image src={Logo} width={200} height={120} alt="logo" />
              </Link>
            </div>
          </div>
          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
            {/* Social links */}
            <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  href="https://www.facebook.com/profile.php?id=100094753666231"
                  aria-label="Facebook"
                >
                  <BsFacebook size={20} className="w-8 h-8 fill-current" />
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://www.instagram.com/lindenvastgoed/"
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <BsInstagram size={20} className="w-8 h-8 fill-current" />
                </Link>
              </li>
            </ul>
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="text-xs text-gray-400 text-center md:text-left">
            Some of our posts may contain affiliate links to partner brands. We
            earn a small commission if you click the link and make a purchase.
            There is no extra cost to you, so it's just a nice way to help
            support the site. All images, videos, and other content posted on
            the site is attributed to their creators and original sources. If
            you see something wrong here or you would like to have it removed,
            please
            <a
              className="font-medium text-blue-500 decoration-blue-500 underline-offset-2 hover:underline"
              href="#0"
            >
              contact us
            </a>
            .
          </div> */}
        </div>
      </div>
    </footer>
  );
}
