'use client';

import Image from 'next/legacy/image';
import React from 'react';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

function SectionSeven() {
  return (
    <Element
      name="join"
      className="fade-up flex w-full max-w-[1200px] items-center justify-center bg-[url('/background-2.avif')] bg-cover px-5 py-20 midway:rounded-3xl midway:py-14"
    >
      <div className="glass flex w-full max-w-[632px] flex-col items-center gap-8 rounded-xl p-5 midway:p-10">
        <div className="relative aspect-square w-20">
          <Image
            alt="version control"
            layout="fill"
            className="object-cover"
            src="/heart.svg"
          />
        </div>
        <h1 className="text-2xl font-semibold midway:text-3xl">
          Join our private alpha
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-[10px] text-lg font-light">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-6 py-3"
            placeholder="you@example.com"
          />
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-6 py-3"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-6 py-3"
            placeholder="LinkedIn"
          />
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-6 py-3"
            placeholder="GitHub"
          />
          <button className="w-full rounded-full bg-[#2BA3FF] px-6 py-3 font-medium text-white">
            Join
          </button>
        </div>
      </div>
    </Element>
  );
}

export default SectionSeven;
