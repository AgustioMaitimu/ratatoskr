'use client';
import React from 'react';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */

function SlideableTwo() {
  const [slideableCurrent, setSlideableCurrent] = useState(0);
  const slideable = [
    <img key={0} alt="cli pic" src="/cli-3.avif" />,
    <img key={1} alt="cli pic" src="/cli-4.avif" />,
  ];
  function switchSlideable() {
    setSlideableCurrent((prev) => (prev === 0 ? 1 : 0));
  }
  useEffect(() => {
    const slideInterval = setInterval(() => switchSlideable(), 8000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl midway:w-[47%]">
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${slideableCurrent * 100}%)` }}
      >
        {slideable}
      </div>
      <div className="absolute inset-0 flex items-end justify-center gap-8 p-4 text-lg font-bold text-[#F7F7F7]">
        <div
          onClick={() => switchSlideable()}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#171717] text-center midway:h-10 midway:w-10`}
        >
          ⇄
        </div>
      </div>
    </div>
  );
}

export default SlideableTwo;
