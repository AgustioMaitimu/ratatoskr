import React from 'react';
import { Inter } from 'next/font/google';
import SectionOne from '@/components/blog/SectionOne';
import SectionSeven from '@/components/home/SectionSeven';
import SectionTwo from '@/components/blog/SectionTwo';
const inter = Inter({ subsets: ['latin'] });

function page() {
  return (
    <div
      className={`${inter.className} flex w-full flex-col items-center gap-24 lg:gap-32`}
    >
      <SectionOne />
      <SectionTwo />
      <SectionSeven />
      <div></div>
    </div>
  );
}

export default page;
