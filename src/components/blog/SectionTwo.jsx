/* eslint-disable prettier/prettier */
import Image from "next/legacy/image";
import React from 'react';
import articles from '@/lib/articles';

function SectionTwo() {
  return (
    <div className="flex w-full max-w-[1008px] flex-col items-start gap-12 p-6">
      {articles.map((x, index) => {
        return (
          <div
            key={index}
            className="flex w-full flex-col items-start gap-8 midway:flex-row midway:items-center midway:justify-between midway:gap-0"
          >
            <div className="relative aspect-blog w-full cursor-pointer midway:w-[48.8%]">
              <Image
                alt="logo"
                layout="fill"
                className="rounded-2xl object-cover"
                src={x.image}
              />
            </div>
            <div className="flex w-full flex-col gap-3 midway:w-[48.8%]">
              <h1 className="text-sm text-gray-500">
                <span className="mr-5">{x.date}</span> Written by {x.author}
              </h1>
              <h1 className="cursor-pointer text-xl font-semibold transition-all duration-100 hover:text-gray-700">
                {x.title}
              </h1>
              <h1>{x.preview}</h1>
              <button className="w-fit rounded-full bg-[#2BA3FF] px-5 py-3 text-sm text-white">
                Read more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SectionTwo;
