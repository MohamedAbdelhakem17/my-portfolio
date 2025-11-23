import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
      <Link href="/">
        {/* Labe */}
        Mohamed Dev
        {/* Dot */}
        <span className="text-accent">.</span>
      </Link>
    </h1>
  );
}
