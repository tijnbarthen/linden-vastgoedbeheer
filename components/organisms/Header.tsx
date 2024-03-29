import Image from 'next/image';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  imagePosition?: string;
};

export default function Header({
  title,
  subtitle,
  image,
  children,
  imagePosition = 'center center',
}: HeaderProps) {
  let d = new Date();
  return (
    <div
      className="max-w-6xl mx-auto md:px-6"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 md:rounded-lg rounded-b-lg">
        <img
          src={
            image ||
            'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
          }
          alt={title || 'Header'}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{
            objectPosition: imagePosition,
          }}
        />
        {/* <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl text-center flex justify-center items-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-blue-950 px-4 w-fit text-center">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
