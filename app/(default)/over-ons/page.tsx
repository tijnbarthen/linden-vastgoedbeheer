import Faqs from '@/components/faqs';
import ChangeInRealEstate from '@/components/organisms/ChangeInRealEstate';
import Container from '@/components/organisms/Container';
import ContainerFull from '@/components/organisms/ContainerFull';
import Header from '@/components/organisms/Header';
import TeamSection from '@/components/organisms/TeamSection';

export default function Page() {
  // container max-w-6xl mx-auto px-4 md:px-6 md:flex items-start justify-between sm:py-5 md:py-10
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <Header
        title="Over ons"
        image="https://images.unsplash.com/photo-1658119416373-42979248e4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />

      <ChangeInRealEstate />
      <TeamSection />
      <Faqs />
    </div>
  );
}
