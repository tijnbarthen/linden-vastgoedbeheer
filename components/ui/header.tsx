import Link from 'next/link';

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
];

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Cruip">
              <h2 className="h4 font-cabinet-grotesk ">
                Linden Vastgoedbeheer
              </h2>
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {navLinks.map((item, index) => (
                  <li className="ml-3" key={index}>
                    <Link
                      className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    href="/signup"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
