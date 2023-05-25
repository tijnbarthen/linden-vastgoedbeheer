export default function Page({ params }) {
  // const { data: any } = await fetch('');
  return (
    <>
      <h1>{params.propertySlug}</h1>
    </>
  );
}
