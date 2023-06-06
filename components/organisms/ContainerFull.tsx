export default function ContainerFull({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <section className={bg}>
      <div className="max-w-6xl mx-auto py-6 px-6">{children}</div>
    </section>
  );
}
