"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-6 md:px-10 mt-5 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center py-4">

        <div className="font-semibold text-lg">Logo</div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex gap-9 text-sm">
          <li>Who we are</li>
          <li>What we do</li>
          <li>Our Works</li>
          <li>Industries</li>
          <li>Careers</li>
          <li>Insights</li>
          <li className="mr-30">Contact us</li>
        </ul>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li>Who we are</li>
          <li>What we do</li>
          <li>Our Works</li>
          <li>Industries</li>
          <li>Careers</li>
          <li>Insights</li>
          <li className="mb-6">Contact us</li>
        </ul>
      </div>
    </div>
  );
}