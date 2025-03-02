import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full px-16 py-2 flex justify-between sticky border-b border-gray-100">
      <Link href="/">Léo Bournizien</Link>
      <div className="flex space-x-4">
        <Link href="/presentation">Présentation</Link>
        <Link href="">2</Link>
        <Link href="">3</Link>
      </div>
    </div>
  );
}
