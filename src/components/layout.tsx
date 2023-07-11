import Navigator from "@/components/navigator";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-full">
      <div className="bg-dark fixed -z-10 w-full h-full"></div>
      <Navigator />
      <div className="px-28 -sm:px-5 space-y-20 overflow-x-hidden text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
