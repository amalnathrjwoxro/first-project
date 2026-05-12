"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  "Who we are",
  "What we do",
  "Our Works",
  "Industries",
  "Careers",
  "Insights",
  "Contact us",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 mt-5 w-full bg-white px-5 shadow-sm sm:px-6 md:px-10">
      <div className="flex items-center justify-between py-4">
        <div className="text-lg font-normal">Logo</div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full text-2xl text-gray-900 transition-colors duration-300 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden flex-wrap justify-end gap-x-6 gap-y-3 text-sm md:flex lg:gap-9">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-800 transition-colors duration-300 hover:text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pb-6 text-sm">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-800 transition-colors duration-300 hover:text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
