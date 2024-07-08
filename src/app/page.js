import Header from '@/components/Header';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col gap-24 lg:gap-32`}>
      <div className="mx-6 mt-20 flex max-w-[960px] flex-col items-start gap-8">
        <h1 className={`${montserrat.className} text-[31px] lg:text-4xl`}>
          <span className="font-semibold leading-relaxed">
            The programmable Lakehouse.
          </span>{' '}
          Load, transform, query, run, schedule, replay all from your code.
        </h1>
        <button className="rounded-full bg-blue-500 px-8 py-4 text-xl font-light text-white">
          Join private alpha
        </button>
      </div>
      <div className="mx-6 max-w-[1000] rounded-br-3xl rounded-tl-3xl bg-blue-500 p-6 text-center text-[26px] font-light text-white lg:rounded-br-full lg:rounded-tl-full lg:text-3xl">
        Bring your data and code, we do the rest.
      </div>
      <div></div>
    </main>
  );
}
