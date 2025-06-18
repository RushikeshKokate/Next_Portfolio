'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // ✅ this line
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // ✅ delay rendering until on client
  }, []);

  const links = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/About', title: 'About' },
    { id: 3, link: '/Skills', title: 'Skills' },
    { id: 4, link: '/Projects', title: 'Projects' },
    { id: 5, link: '/Services', title: 'Services' },
    { id: 6, link: '/Contact', title: 'Contact Me' },
  ];

  return (
    <header className="w-full backdrop-blur-md px-4 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className={`text-sm md:text-base font-medium px-3 py-2 transition-all duration-300 ${
                isClient && pathname === link.link
                  ? 'bg-white rounded-full text-black font-semibold'
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center gap-4 transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium px-4 py-2 rounded transition duration-300 ${
                isClient && pathname === link.link
                  ? 'bg-white text-black font-semibold'
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
