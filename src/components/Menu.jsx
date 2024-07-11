import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import JoinButtonHeader from './JoinButtonHeader';
import { Inter } from 'next/font/google';
import { Button } from 'react-scroll';

const inter = Inter({ subsets: ['latin'] });

function Menu({ isOpen, toggleMenu }) {
  return (
    <div
      className={`${inter.className} ${isOpen ? 'show-menu' : 'hide-menu'} glass-thin fixed left-0 top-0 z-10 flex h-fit w-screen flex-col gap-6 bg-white p-6 transition-all duration-500`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative aspect-square w-12">
            <Image
              alt="logo"
              layout="fill"
              className="object-cover"
              src="/logo.svg"
            />
          </div>
          <h1 className="text-3xl font-semibold">sqrel</h1>
        </div>
        <div className="relative mr-1 aspect-square w-6" onClick={toggleMenu}>
          <Image
            alt="exit"
            className="object-cover"
            layout="fill"
            src="/cross.svg"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-6">
        <Link href="/blog" className="mr-2">
          Blog
        </Link>
        <Link href="/about" className="mr-2">
          Docs
        </Link>
        <div className="relative mr-1 h-6 w-6">
          <Image
            alt="social"
            src="/github.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-8">
          <Image
            alt="social"
            src="/linkedin.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <Button
          onClick={toggleMenu}
          to="join"
          smooth
          duration={1000}
          className="rounded-full bg-blue-500 px-5 py-3 font-light text-white"
        >
          Join private alpha
        </Button>
      </div>
    </div>
  );
}

export default Menu;
