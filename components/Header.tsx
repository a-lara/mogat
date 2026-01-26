'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/cv', label: 'CV' },
  ];

  return (
    <>
      <header 
        className={`header wavo_nav ${isSticky ? 'is-sticky-active' : ''} fixed top-0 left-0 right-0 z-[997] transition-all duration-300`}
      >
        <div className={`header_container ${isSticky ? 'bg-[#111] border-b border-[#24d5b4] shadow-[0_5px_20px_rgba(186,189,165,0.2)]' : 'bg-transparent'} transition-all duration-300`}>
          <div className="header_inner relative flex items-center justify-between w-full mx-auto" style={{ 
            maxWidth: '100%',
            paddingLeft: '6%',
            paddingRight: '6%',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            minHeight: '5rem'
          }}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                <Image
                  src="/logo.svg"
                  alt="J.J. Mogat"
                  width={80}
                  height={100}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-poppins text-sm tracking-wider uppercase transition-opacity hover:opacity-70 ${
                      isActive ? 'text-white opacity-100' : 'text-white opacity-80'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {/* YouTube Icon */}
              <a
                href="https://www.youtube.com/@juanjosemogat"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:opacity-70 transition-opacity"
                aria-label="YouTube"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="header_nav_toggle menu-icon flex items-center cursor-pointer md:hidden" onClick={() => setIsMenuOpen(true)}>
              <span className="icon flex flex-col gap-1.5 mr-3">
                <i className="block w-6 h-0.5 bg-white"></i>
                <i className="block w-6 h-0.5 bg-white"></i>
              </span>
              <span className="text font-poppins text-white text-sm tracking-wider">
                Menu
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu Overlay */}
      <nav
        className={`header_nav wavo_nav fixed inset-0 bg-black z-[999999] transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <a
          className="header_nav_close absolute top-8 right-8 z-50 flex items-center gap-3 text-white hover:opacity-70 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="header_nav_close_text font-poppins text-sm tracking-wider">Close</span>
          <span className="header_nav_close_icon icon is-close w-6 h-6 flex items-center justify-center">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </a>

        {/* Menu Items */}
        <ul className="header_nav_items h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
            return (
              <li
                key={item.href}
                className={`menu-item ${isActive ? 'is-active' : ''}`}
              >
                <Link
                  href={item.href}
                  className="button_text text-white text-4xl md:text-5xl font-poppins font-light tracking-wider hover:opacity-70 transition-opacity block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
