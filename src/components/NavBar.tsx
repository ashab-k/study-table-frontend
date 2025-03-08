"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 text-black backdrop-blur-lg shadow-md fixed w-[100%] z-999">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <header className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold relative inline-block">
                <span className="font-bold text-indigo-600">STUDY</span>
                <span className="font-normal text-gray-800">table</span>
                <span className="absolute -top-2 -right-6 text-amber-400"></span>
              </h1>
            </div>
          </header>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link: any, index: any) => (
            <li key={index}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          {navLinks.map((link: any, index: any) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block py-2 hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
