import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const headText = `Yun's Portfolio`;

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>{headText}</title>
      </Head>
      <div className="bg-dark fixed -z-10 w-screen h-screen"></div>
      <nav className="w-full h-20 flex fixed pt-16 pb-10 px-32 z-10 bg-red-900 justify-between text-white">
        <div className="text-xl font-bold">Ys</div>
        <div className="flex space-x-10 text-xs uppercase tracking-[6px] font-medium">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </nav>
      <div className="px-32 space-y-10 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
