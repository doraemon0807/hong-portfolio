import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  seoTitle: string;
}

export default function Layout({ children, seoTitle }: LayoutProps) {
  const headText = `${seoTitle} | Yun's Portfolio`;

  return (
    <div className="w-screen h-screen bg-black">
      <Head>
        <title>{headText}</title>
      </Head>
      <nav className="w-full h-20 flex fixed pt-16 pb-10 px-32 bg-red-900 justify-between text-white">
        <div className="text-xl font-bold">Ys</div>
        <div className="flex space-x-10 text-sm uppercase tracking-widest font-medium">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </nav>
      <div className="pt-28 px-32 space-y-10">{children}</div>
    </div>
  );
}
