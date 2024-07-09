import React from 'react';
import { Source_Code_Pro } from 'next/font/google';

const code = Source_Code_Pro({ subsets: ['latin'] });

function Merge() {
  return (
    <div
      className={`${code.className} flex min-h-[327px] w-full flex-col gap-1 rounded-b-2xl bg-black px-4 py-5 transition-all duration-200 midway:min-h-[364px] midway:pr-48`}
    >
      <h1 className={`text-xs text-white midway:text-base`}>
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel branch merge
        joshua_pipeline
      </h1>
      <h1 className={`mb-4 text-xs text-white midway:text-base`}>
        <span className="text-[#26B4AB]">&#10003;</span>{' '}
        <span className="text-[#26B4AB]">joshua_pipeline</span> merged{' '}
        <span className="text-[#2288CF]">in</span> main
      </h1>
      <div className="flex w-full justify-start gap-6 text-xs text-white midway:text-base">
        <div className="flex flex-col gap-1">
          <h1>NAME</h1>
          <p className="">data_preparation</p>
          <p className="">joshua_staging</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>KIND</h1>
          <p className="">table</p>
          <p className="">table</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>STATUS</h1>
          <p className="text-[#26B4AB]">&#10003;</p>
          <p className="text-[#26B4AB]">&#10003;</p>
        </div>
      </div>
    </div>
  );
}

export default Merge;
