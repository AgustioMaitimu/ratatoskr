'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Image from "next/legacy/image";
import JoinButtonHeader from './JoinButtonHeader';
import Link from 'next/link';
import Menu from './Menu';

const inter = Inter({ subsets: ['latin'] });

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${inter.className} flex w-full max-w-[1000px] items-center justify-between p-6`}
    >
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Link href="/" className="flex items-center gap-4">
        <div className="relative aspect-square w-12">
          <Image
            alt="logo"
            layout="fill"
            className="object-cover"
            src="/logo.svg"
          />
        </div>
        <h1 className="text-3xl font-semibold">sqrel</h1>
      </Link>
      <div className="md:hidden">
        <div
          className="relative mr-2 block aspect-square w-8"
          onClick={toggleMenu}
        >
          <Image
            alt="menu"
            layout="fill"
            className="object-cover"
            src="/menu.svg"
          />
        </div>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <Link href="/blog">Blog</Link>
        <h1>Docs</h1>
        <div className="relative aspect-square w-6">
          <Image
            alt="social"
            src="/github.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-9">
          <Image
            alt="social"
            src="/linkedin.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <JoinButtonHeader />
      </div>
    </div>
  );
}

export default Header;
