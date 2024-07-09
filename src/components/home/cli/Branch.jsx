import React from 'react';
import { Source_Code_Pro } from 'next/font/google';

const code = Source_Code_Pro({ subsets: ['latin'] });

function Branch() {
  return (
    <div
      className={`${code.className} flex min-h-[327px] w-full flex-col gap-1 rounded-b-2xl bg-black px-4 py-5 transition-all duration-200 midway:min-h-[364px] midway:pr-48`}
    >
      <h1 className={`text-xs text-white midway:text-base`}>
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel branch create
        joshua_pipeline
      </h1>
      <h1 className={`mb-4 text-xs text-white midway:text-base`}>
        <span className="text-[#26B4AB]">&#10003;</span> Created branch
        joshua_pipeline
      </h1>
      <h1
        className={`mb-4 text-xs leading-relaxed text-white midway:text-base`}
      >
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel branch checkout
        joshua_pipeline Switched to branch{' '}
        <span className="text-[#26B4AB]">&quot;joshua_pipeline&quot;</span>{' '}
        <span className="text-[#2288CF]">in</span> profile{' '}
        <span className="text-[#26B4AB]">&quot;default&quot;</span>
      </h1>
      <h1 className={`mb-4 text-xs text-white midway:text-base`}>
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel branch
      </h1>
      <div className="flex w-full justify-between text-xs text-white midway:justify-start midway:gap-6 midway:text-base">
        <div className="flex flex-col gap-1">
          <h1>NAME</h1>
          <p className="ml-4">main</p>
          <p className="ml-4 font-bold">joshua_pipeline</p>
          <p className="ml-4">joshua_staging</p>
          <p className="ml-4">joshua.demo</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>ZONE</h1>
          <p className="">prod</p>
          <p className="font-bold">joshua</p>
          <p className="">joshua</p>
          <p className="">joshua</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>HASH</h1>
          <p className="">f6e5d4c3b2a1 ...</p>
          <p className="font-bold">b6c5d4e3f2a1 ...</p>
          <p className="">9f8e7d6c5b4a ...</p>
          <p className="">5a4b3c2d1e0f ...</p>
        </div>
      </div>
    </div>
  );
}

export default Branch;
