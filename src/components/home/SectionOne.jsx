import React from 'react';
import { Montserrat } from 'next/font/google';
import JoinButtonSectionOne from '../JoinButtonSectionOne';
const montserrat = Montserrat({ subsets: ['latin'] });

function SectionOne() {
  return (
    <div className="mx-6 mt-20 flex max-w-[960px] flex-col items-start gap-8">
      <h1 className={`${montserrat.className} text-[31px] lg:text-4xl`}>
        <span className="font-semibold leading-relaxed">
          The programmable Lakehouse.
        </span>{' '}
        Load, transform, query, run, schedule, replay all from your code.
      </h1>
      <JoinButtonSectionOne />
    </div>
  );
}

export default SectionOne;
