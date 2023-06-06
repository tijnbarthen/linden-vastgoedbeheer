'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '@/public/images/logo-linden.png';

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
    title: 'Diensten',
    path: '/diensten',
  },
  {
    title: 'Onderhoud',
    path: '/onderhoud',
  },
];

export default function Header({ nav = true }: { nav?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="block w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block group" aria-label="Cruip">
              <Image src={Logo} width={200} height={50} alt="logo" />
            </Link>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <button onClick={toggleMenu} type="button">
                <FiX className="h-6 w-6 text-gray-600" />
              </button>
            ) : (
              <button onClick={toggleMenu} type="button">
                <FiMenu className="h-6 w-6 text-gray-600" />
              </button>
            )}
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="hidden lg:flex md:justify-end">
              <ul className="flex flex-row sm:flex-grow items-center">
                {navLinks.map((item, index) => (
                  <li className="ml-3" key={index}>
                    <Link
                      href={item.path}
                      className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="ml-3">
                  <Link
                    href="/contact"
                    className="btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        {/* Mobile navigation */}
        {nav && (
          <nav className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-end py-6 gap-2">
              {navLinks.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={item.path}
                    className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
