import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full px-16 py-2 flex justify-between fixed top-0 bg-black border-b border-gray-100 z-50">
      <Link href="/">Léo Bournizien</Link>
      <div className="flex space-x-4 ">
        <Link href="/presentation" className="hover:underline">
          Présentation
        </Link>
        <Link href="" className="hover:underline">
          Réalisations
        </Link>
        <Link href="" className="hover:underline">
          Compétences
        </Link>
      </div>
    </div>
  );
}
