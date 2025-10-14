import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200 bg-neutral-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className="text-2xl font-bold">Fair Play</span>
      </Link>
      <ul className="flex gap-8 text-lg">
        <li>
          <Link
            href="/"
            className="hover:text-gray-800 transition-colors underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-gray-800 transition-colors underline"
          >
            Challenges
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-gray-800 transition-colors underline"
          >
            Interviews
          </Link>
        </li>
        <li>
          <Link
            href="/info"
            className="hover:text-gray-800 transition-colors underline"
          >
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}
