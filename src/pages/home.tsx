export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-2 items-center gap-32 px-20">
      <div className="place-self-center">
        <h2 className="text-5xl">Hello, I'm</h2>
        <h1 className="text-7xl font-bold mt-5">Yunseok Hong</h1>
        <div className="text-2xl font-medium mt-10 flex">
          <span>A </span>
          <ul className="relative">
            <li className="animate-swapWordAnimation absolute left-0">
              Fullstack
            </li>
            <li className="animate-swapWordAnimation absolute left-0 animation-delay-3000">
              Frontend
            </li>
            <li className="animate-swapWordAnimation absolute left-0 animation-delay-6000">
              Backend
            </li>
          </ul>
          <span className="translate-x-24"> Developer Wannabe</span>
        </div>
      </div>
      <div className="place-self-center">
        <div className="w-64 h-64 bg-red-900">Cloud comes here</div>
      </div>
    </div>
  );
}
