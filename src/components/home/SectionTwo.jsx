'use client';

import React, { useState } from 'react';
import { Source_Code_Pro } from 'next/font/google';
import Branch from './cli/Branch';
import Run from './cli/Run';
import Query from './cli/Query';
import Merge from './cli/Merge';

const code = Source_Code_Pro({ subsets: ['latin'] });

function SectionTwo() {
  const [pickedExample, setPickedExample] = useState('Branch');

  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5 bg-[#F7F7F7] bg-[url('/background-1.png')] bg-cover px-6 py-36 midway:rounded-2xl">
      <div
        className={`flex w-full max-w-[350px] justify-evenly rounded-full bg-black p-2 font-light text-white midway:px-1 midway:py-2`}
      >
        <p
          onClick={(e) => setPickedExample(e.target.innerHTML)}
          className={`${pickedExample == 'Branch' && 'bg-blue-500'} cursor-pointer rounded-full px-4 py-2 transition-all duration-200`}
        >
          Branch
        </p>
        <p
          onClick={(e) => setPickedExample(e.target.innerHTML)}
          className={`${pickedExample == 'Run' && 'bg-blue-500'} cursor-pointer rounded-full px-4 py-2 transition-all duration-200`}
        >
          Run
        </p>
        <p
          onClick={(e) => setPickedExample(e.target.innerHTML)}
          className={`${pickedExample == 'Query' && 'bg-blue-500'} cursor-pointer rounded-full px-4 py-2 transition-all duration-200`}
        >
          Query
        </p>
        <p
          onClick={(e) => setPickedExample(e.target.innerHTML)}
          className={`${pickedExample == 'Merge' && 'bg-blue-500'} cursor-pointer rounded-full px-4 py-2 transition-all duration-200`}
        >
          Merge
        </p>
      </div>
      <div className="flex w-full max-w-[350px] flex-col rounded-2xl bg-black midway:max-w-[702px]">
        <div className="flex w-full gap-2 rounded-t-2xl bg-[#1E1E1E] px-4 py-3">
          <div className="aspect-square w-2 rounded-full bg-[#FA3950]" />
          <div className="aspect-square w-2 rounded-full bg-[#FCD600]" />
          <div className="aspect-square w-2 rounded-full bg-[#2BA3FF]" />
        </div>
        {pickedExample == 'Branch' && <Branch />}
        {pickedExample == 'Run' && <Run />}
        {pickedExample == 'Query' && <Query />}
        {pickedExample == 'Merge' && <Merge />}
      </div>
    </div>
  );
}

export default SectionTwo;
