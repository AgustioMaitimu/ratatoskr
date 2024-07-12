import Header from '@/components/Header';
import SectionFive from '@/components/home/SectionFive';
import SectionFour from '@/components/home/SectionFour';
import SectionOne from '@/components/home/SectionOne';
import SectionSeven from '@/components/home/SectionSeven';
import SectionSix from '@/components/home/SectionSix';
import SectionThree from '@/components/home/SectionThree';
import SectionTwo from '@/components/home/SectionTwo';
import JoinButtonHeader from '@/components/JoinButtonHeader';
import { Inter } from 'next/font/google';
import Image from "next/legacy/image";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex w-full flex-col items-center gap-24 lg:gap-32`}
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <div></div>
    </main>
  );
}
