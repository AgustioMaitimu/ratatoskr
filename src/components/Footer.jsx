import { Inter } from 'next/font/google';
import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

function Footer() {
  return (
    <div
      className={`${inter.className} fade-up mb-[12vh] flex w-full max-w-[984px] flex-col gap-8 p-6 midway:flex-row midway:items-start midway:justify-between midway:gap-0`}
    >
      <div className="flex w-52 flex-col gap-4">
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
        <h1 className="text-sm text-[#656565]">
          595 Market Street, 10th floor San Francisco, CA 94105
        </h1>
        <h1 className="text-sm text-[#656565]">info@bauplanlabs.com</h1>
        <h1 className="text-sm text-[#656565]">
          Copyright © 2024 Bauplan Inc. All rights reserved.
        </h1>
      </div>
      <div className="flex flex-col gap-2 text-sm font-medium">
        <Link href="/blog">Blog</Link>
        <h1>Docs</h1>
        <h1>We&apos;re hiring</h1>
        <h1>Security</h1>
      </div>
      <div className="flex flex-col gap-2 text-sm font-medium">
        <h1>Privacy Policy</h1>
        <h1>Cookie Policy</h1>
        <h1>Terms & Conditions</h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative aspect-square w-8">
          <Image
            alt="social"
            src="/linkedin.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative h-6 w-6">
          <Image
            alt="social"
            src="/github.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
