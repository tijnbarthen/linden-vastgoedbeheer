'use client';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="1Yk3yG04QRShXN5QJB0mDNlUzdKyhZUJlFhtmALfol0"
        />
      </Head>
      <Header />

      <main className="grow">
        <Toaster />

        {children}
      </main>

      <Footer />
    </>
  );
}
