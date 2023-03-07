import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="bg-yellow-500 p-12">
      <p>this page does not exist</p>
      <Link href="/" className="py-1 px-2 bg-white rounded-lg">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
