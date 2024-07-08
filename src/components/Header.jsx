import React from 'react';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

function Header() {
  return (
    <div
      className={`${inter.className} flex w-full max-w-[1000px] items-center justify-between p-6`}
    >
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
      <div className="md:hidden">
        <div className="relative mr-2 aspect-square w-8">
          <Image
            alt="logo"
            layout="fill"
            className="object-cover"
            src="/menu.svg"
          />
        </div>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <h1>Blog</h1>
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
        <button className="rounded-full bg-blue-500 px-5 py-3 font-light text-white">
          Join private alpha
        </button>
      </div>
    </div>
  );
}

export default Header;
