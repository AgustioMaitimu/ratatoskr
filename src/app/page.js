import Header from '@/components/Header';
import SectionOne from '@/components/home/SectionOne';
import SectionThree from '@/components/home/SectionThree';
import SectionTwo from '@/components/home/SectionTwo';
import { Inter, Montserrat, Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const code = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col gap-24 lg:gap-32`}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div></div>
    </main>
  );
}
