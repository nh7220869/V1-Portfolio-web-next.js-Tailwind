"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';





export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) return null;

  return (
    <header className="lg:flex bg-[#507687] p-10 lg:p-0 shadow-md md:block mt-8 ">
    {/* Logo */}
    <div className="flex justify-center lg:justify-start items-center w-full lg:w-auto h-7 ">
      <Image
        src="/NOOR US SEHER.png"
        alt=""
        width={100}
        height={100}
        className="mx-auto lg:ml-44 rounded-full border-2 border-black lg:hidden mb-2 animate-scale"
      />
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-black dark:text-white focus:outline-none lg:hidden ml-auto"
      >
        {/* Icon for Toggle Button */}
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
    </div>
  
    {/* Navigation Menu */}
    {isMenuOpen && (
      <div className="lg:hidden mt-10 transition-all duration-300 ease-in-out ">
        <ul className="space-y-2 text-center text-xl  border-2 border-orange-50 animate-pulse ">
          <li>
            <Link href="/" className="block text-white dark:text-white py-2 hover:text-yellow-500 ">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-white dark:text-white py-2 hover:text-yellow-500">About</Link>
          </li>
          <li>
            <Link href="/project" className="block text-white dark:text-white py-2 hover:text-yellow-500">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="block text-white dark:text-white py-2 hover:text-yellow-500">Contact</Link>
          </li>
        </ul>
      </div>
    )}
    <Image
        src="/NOOR US SEHER.png"
        alt=""
        width={100}
        height={100}
        className="mx-auto lg:ml-44 rounded-full border-2 border-black hidden md:block animate-scale"
      />
  
    {/* Display the navigation menu inline for large screens */}
    <nav className="hidden lg:flex lg:items-center ml-28 text-xl lg:space-x-6 mr-72  animate-fadeIn" >
      <Link href="/" className="block text-white dark:text-white px-2 py-1 hover:text-yellow-500">Home</Link>
      <Link href="/about" className="block text-white dark:text-white px-2 py-1 hover:text-yellow-500">About</Link>
      <Link href="/project" className="block text-white dark:text-white px-2 py-1 hover:text-yellow-500">Projects</Link>
      <Link href="/contact" className="block text-white dark:text-white px-2 py-1 hover:text-yellow-500">Contact</Link>
    </nav>
  </header>
  
         

      )}