import React from 'react';
import JoinButtonSectionOne from '../JoinButtonSectionOne';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

function SectionOne() {
  return (
    <div className="fade-up mx-6 mt-20 flex max-w-[960px] flex-col items-start gap-8">
      <h1 className={`${montserrat.className} text-[31px] lg:text-4xl`}>
        <span className="font-semibold leading-relaxed">
          Welcome to our blog.
        </span>{' '}
        Here we share insights and scientific research on handling the data
        stack
      </h1>
    </div>
  );
}

export default SectionOne;
