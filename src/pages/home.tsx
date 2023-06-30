export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-2 items-center gap-32">
      <div className="place-self-center">
        <h2 className="text-5xl">Hello, I'm</h2>
        <h1 className="text-7xl font-bold">Yunseok Hong</h1>
        <h3 className="text-2xl font-medium mt-8">
          A Fullstack Developer Wannabe
        </h3>
      </div>
      <div className="place-self-center">
        <div className="w-64 h-64 bg-red-900">Cloud comes here</div>
      </div>
    </div>
  );
}
