export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto py-6 px-6">{children}</div>;
}
