import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  const refresh = () => {
    router.push("/");
  };

  return (
    <div
      onClick={refresh}
      className="-md:hidden cursor-pointer text-5xl font-Lobster drop-shadow-[2px_2px_1px_rgba(180,180,180,0.8)]"
    >
      Ys
    </div>
  );
}
