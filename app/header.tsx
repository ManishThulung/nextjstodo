import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-6 bg-blue-500 flex gap-8">
      <Link href="/" className="py-1 px-2 bg-white rounded-lg">
        Home
      </Link>
      <Link href="/todos" className="py-1 px-2 bg-white rounded-lg">
        Todos
      </Link>
      <Link href="/search" className="py-1 px-2 bg-white rounded-lg">
        Search
      </Link>
    </header>
  );
}

export default Header;
