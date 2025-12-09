"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Icon from "../../../public/images/Icon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex justify-center items-center">
          <Image src={Icon} alt="Icon" className="w-10 h-10" priority />

          <Link href="/" className=" text-xl font-bold">
            Bhaya
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-bold">
            Serambi
          </Link>
          <Link href="#about" className="hover:font-bold">
            Perkara
          </Link>
          <Link href="#creator" className="hover:font-bold">
            Pangripto
          </Link>
          <Link href="#content" className="hover:font-bold">
            Karya
          </Link>
        </div>

        {/* BTN MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" className="font-bold">
              Serambi
            </Link>
            <Link href="#about" className="hover:font-bold">
              Perkara
            </Link>
            <Link href="#creator" className="hover:font-bold">
              Pangripto
            </Link>
            <Link href="#content" className="hover:font-bold">
              Karya
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
