import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="px-8 py-3 rounded-sm bg-gray-700 text-white shadow-sm hover:bg-gray-200 hover:text-dark uppercase text-xs tracking-[4px] transition-colors"
    >
      {text}
    </Link>
  );
}
