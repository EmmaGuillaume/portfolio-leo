import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

export default function Button({ href, text }: Props) {
  return (
    <Link
      className="px-6 py-3 outline rounded-md outline-gray-100 hover:outline-2 transition-all duration-100"
      href={href}
    >
      {text}
    </Link>
  );
}
