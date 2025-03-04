import Link from "next/link";

type Props = {
  href: string;
  text: string;
  titre: string;
};

export default function Card({ href, text, titre }: Props) {
  return (
    <Link
      className="px-2 py-2 bg-white drop-shadow-lg rounded-md flex flex-col w-fit max-w-56 hover:scale-105 transition-all duration-100 "
      href={href}
    >
      <div className="w-full h-24 rounded-md bg-pink-light"></div>
      <div className="overflow-hidden text-ellipsis truncate">
        <h3 className="mt-2 font-bold truncate">{titre}</h3>
        <p className="text-nowrap text-gray-500 truncate">{text}</p>
      </div>
    </Link>
  );
}
