import React from 'react';
import { Source_Code_Pro } from 'next/font/google';

const code = Source_Code_Pro({ subsets: ['latin'] });

function Query() {
  return (
    <div
      className={`${code.className} flex min-h-[327px] w-full flex-col gap-1 rounded-b-2xl bg-black px-4 py-5 transition-all duration-200 midway:min-h-[364px] `}
    >
      <h1 className={`mb-4 text-xs text-white midway:pr-56 midway:text-base`}>
        <span className="mr-1 text-[#E0AF93]">&gt;</span> sqrel query{' '}
        <span className="text-[#26B4AB]">
          &quot;SELECT * FROM forecasts&quot;
        </span>{' '}
        Requesting SQL query <span className="text-[#EED000]">branch</span>{' '}
        joshua_demo Flight endpoint ready{' '}
        <span className="text-[#EED000]">took</span>=
        <span className="text-[#EAB99A]">6.01</span>s
      </h1>
      <div className="flex w-full justify-between text-xs text-white midway:hidden midway:justify-start midway:gap-6 midway:text-base">
        <div className="flex flex-col gap-1">
          <h1>DS</h1>
          <p className="text-[#EAB99A]">2022-12-2..</p>
          <p className="text-[#EAB99A]">2022-12-2..</p>
          <p className="text-[#EAB99A]">2022-12-2..</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT</h1>
          <p className="text-[#EAB99A]">685027..</p>
          <p className="text-[#EAB99A]">535733..</p>
          <p className="text-[#EAB99A]">553820..</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT_LO</h1>
          <p className="text-[#EAB99A]">482051..</p>
          <p className="text-[#EAB99A]">438145..</p>
          <p className="text-[#EAB99A]">487013..</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT_UP</h1>
          <p className="text-[#EAB99A]">739571..</p>
          <p className="text-[#EAB99A]">752947..</p>
          <p className="text-[#EAB99A]">792762..</p>
        </div>
      </div>
      <div className="hidden w-full justify-between text-xs text-white midway:flex midway:justify-start midway:gap-6 midway:text-base">
        <div className="flex flex-col gap-1">
          <h1>DS</h1>
          <p className="text-[#EAB99A]">2022-12-20T00:00</p>
          <p className="text-[#EAB99A]">2022-12-20T00:00</p>
          <p className="text-[#EAB99A]">2022-12-20T00:00</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT</h1>
          <p className="text-[#EAB99A]">685027.084017</p>
          <p className="text-[#EAB99A]">535733.503810</p>
          <p className="text-[#EAB99A]">553820.031850</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT_LOWER</h1>
          <p className="text-[#EAB99A]">482051.759279</p>
          <p className="text-[#EAB99A]">438145.185891</p>
          <p className="text-[#EAB99A]">487013.508081</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1>YHAT_UPPPER</h1>
          <p className="text-[#EAB99A]">739571.957911</p>
          <p className="text-[#EAB99A]">752947.574799</p>
          <p className="text-[#EAB99A]">792762.850280</p>
        </div>
      </div>
    </div>
  );
}

export default Query;
