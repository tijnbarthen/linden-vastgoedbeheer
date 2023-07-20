import Link from 'next/link';

function ChangeInRealEstate() {
  return (
    <div className="bg-white">
      <div
        className="container max-w-6xl mx-auto md:py-16 md:px-6 py-9 px-4"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <h2 className="h2 text-4xl text-left mb-6">
          Tijd voor verandering in de makelaardij!
        </h2>
        <p className="text-lg mb-4">
          Wij willen af van de typische term: 'huisjesmelkers'. Er zijn genoeg
          eigenaren die wél investeren in hun appartement en die vinden het
          belangrijk dat er een goede verstandhouding is tussen huurder en
          verhuurder.
        </p>
        <p className="text-lg mb-4">
          Dit is precies waar wij ons op focussen: persoonlijke aanpak, actief
          meedenken, professionaliteit, betrouwbaarheid, servicegericht en
          verduurzaming. Klinkt dit als muziek in de oren? Dan bent u bij ons
          aan het juiste adres!
        </p>
        <p className="text-lg mb-4">
          Bij ons heeft u een vast aanspreekpunt met kennis van zaken. Wij geven
          marktconform advies en voegen graag onze creativiteit toe bij de
          verhuur van uw woning.
        </p>
        <p className="text-lg mb-4">Wij ontzorgen u graag!</p>
        <p className="text-lg">
          U kunt{' '}
          <Link className="underline text-blue-600" href={'/contact'}>
            contact
          </Link>{' '}
          met ons opnemen voor een kennismakingsgesprek en vrijblijvend advies.
        </p>
      </div>
    </div>
  );
}

export default ChangeInRealEstate;
