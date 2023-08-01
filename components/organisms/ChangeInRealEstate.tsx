import Link from 'next/link';

async function ChangeInRealEstate() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblJXZgHwu1ovP6Ll/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 0,
      },
    },
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  const { records } = data;

  console.log(records);
  return (
    <div className="bg-white">
      <div
        className="container max-w-6xl mx-auto md:py-16 md:px-6 py-9 px-4"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <h2 className="h2 text-4xl text-left mb-6">
          {records[0].fields?.titel_text}
        </h2>
        <p
          className="text-lg mb-4"
          dangerouslySetInnerHTML={{
            __html: records[0].fields?.Descriptie.replace(/\n/g, '<br />'),
          }}
        ></p>

        {/* <p className="text-lg">
          U kunt{' '}
          <Link className="underline text-blue-600" href={'/contact'}>
            contact
          </Link>{' '}
          met ons opnemen voor een kennismakingsgesprek en vrijblijvend advies.
        </p> */}
      </div>
    </div>
  );
}

export default ChangeInRealEstate;
