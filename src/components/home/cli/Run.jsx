import React from 'react';
import { Source_Code_Pro } from 'next/font/google';

const code = Source_Code_Pro({ subsets: ['latin'] });

function Run() {
  return (
    <div
      className={`${code.className} flex min-h-[327px] w-full flex-col gap-1 rounded-b-2xl bg-black px-4 py-5 transition-all duration-200 midway:min-h-[364px]`}
    >
      <h1 className={`text-xs text-white midway:text-base`}>
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel run
      </h1>
      <div className="ml-4 flex items-center text-xs text-white midway:text-base">
        <h1 className="text-nowrap">building environment</h1>
        <div className="mx-2 h-[.1px] w-full bg-white midway:mx-3"></div>
        <h1 className="ml-auto text-[#26B3A9]">100%</h1>
      </div>
      <div className="ml-8 flex items-center text-xs text-white midway:text-base">
        <h1 className="text-nowrap">running data_preparation</h1>
        <div className="mx-2 h-[.1px] w-full bg-white midway:mx-3"></div>
        <h1 className="ml-auto text-[#26B3A9]">100%</h1>
      </div>
      <div className="ml-12 flex items-center text-xs text-white midway:text-base">
        <h1 className="text-nowrap">running ml_model</h1>
        <div className="mx-2 h-[.1px] w-full bg-white midway:mx-3"></div>
        <h1 className="ml-auto text-[#26B3A9]">100%</h1>
      </div>
      <div className="mb-4 ml-16 flex items-center text-xs text-white midway:text-base">
        <h1 className="text-nowrap">writing table: forecasts</h1>
        <div className="mx-2 h-[.1px] w-full bg-white midway:mx-3"></div>
        <h1 className="ml-auto text-[#26B3A9]">100%</h1>
      </div>
      <div className="flex w-full justify-between text-xs text-white midway:justify-start midway:gap-6 midway:text-base">
        <div className="flex flex-col gap-1">
          <h1>SUMMARY</h1>
          <p className="">data_prep</p>
          <p className="">forecasts</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>STARTED</h1>
          <p className="">
            <span className="text-[#EAB99A]">40</span>s ago
          </p>
          <p className="">
            <span className="text-[#EAB99A]">26</span>s ago
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>FINISHED</h1>
          <p className="">
            <span className="text-[#EAB99A]">26</span>s ago
          </p>
          <p className="">
            <span className="text-[#EAB99A]">21</span>s ago
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>DURATION</h1>
          <p className="">
            <span className="text-[#EAB99A]">14.42</span>s
          </p>
          <p className="">
            <span className="text-[#EAB99A]">4.30</span>s
          </p>
        </div>
      </div>
    </div>
  );
}

export default Run;
