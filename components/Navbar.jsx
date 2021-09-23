import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="container my-5 flex justify-between items-center">
        <Link href="/">
          <a className="uppercase text-xl font-serif text-red-600 font-black">
            Grassfed Grill
          </a>
        </Link>

        {/* Navbar Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navbar Menu for Large Screen */}
        <ul className="hidden md:flex justify-between items-center gap-6">
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/location">
              <a>Location</a>
            </Link>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="container  mb-6 space-y-3 text-center">
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="text-gray-600 hover:text-red-600 font-semibold">
            <Link href="/location">
              <a>Location</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
