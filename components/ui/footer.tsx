import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/images/logo-linden.png';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Top area */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link
                className="inline-flex group mb-8 sm:mb-0"
                href="/"
                aria-label="Cruip"
              >
                <Image src={Logo} width={200} height={120} alt="logo" />
              </Link>
            </div>
            <form className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none items-center">
                <div className="flex flex-col">
                  <a className="mb-2 font-bold">
                    Schrijf je in voor onze nieuwsbrief!
                  </a>
                  <input
                    type="email"
                    className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                    placeholder="Your email"
                    aria-label="Your email"
                  />
                </div>
                <button
                  className="btn-sm text-white bg-blue-950 hover:bg-blue-600 shadow-sm whitespace-nowrap  ml-2 sm:h-10"
                  type="submit"
                >
                  Inschrijven
                </button>
              </div>
              {/* Success message */}
              {/* <p class="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>
          </div>
          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
            {/* Social links */}
            {/* <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Telegram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </a>
              </li>
            </ul> */}
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Home
              </a>
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Aanbod
              </a>
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Over ons
              </a>
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Diensten
              </a>
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
