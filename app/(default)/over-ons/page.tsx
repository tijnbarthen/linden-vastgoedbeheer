import Faqs from '@/components/faqs';
import ChangeInRealEstate from '@/components/organisms/ChangeInRealEstate';
import Container from '@/components/organisms/Container';
import ContainerFull from '@/components/organisms/ContainerFull';
import Header from '@/components/organisms/Header';
import TeamSection from '@/components/organisms/TeamSection';
import TestimonialsDouble from '@/components/organisms/TestimonialsDouble';

export default function Page() {
  // container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between sm:py-5 md:py-10
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header
        title="Over ons"
        image="/images/overons.jpg"
        imagePosition="center center"
      />
      {/* @ts-expect-error server component */}
      <ChangeInRealEstate />

      <TeamSection />
      {/* <TestimonialsDouble />  */}
      {/* <Faqs /> */}
    </div>
  );
}
