export const metadata = {
  title: 'Linden Vastgoed',
  description: 'Beheer en verhuur van vastgoed in Amsterdam',
};

import Hero from '@/components/hero';
import Inspiration from '@/components/inspiration';
import Carousel from '@/components/carousel';
import Creatives from '@/components/creatives';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import Faqs from '@/components/faqs';
import Blog from '@/components/blog';
import Cta from '@/components/cta';
import Features from '@/components/features';
import TestimonialsDouble from '@/components/organisms/TestimonialsDouble';

export default function Home() {
  return (
    <>
      <Hero />
      <Inspiration />
      <Features />
      <TestimonialsDouble />
      {/* <Cta /> */}
    </>
  );
}
