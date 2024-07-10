/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import SlideableOne from './cli/SlideableOne';
import SlideableTwo from './cli/SlideableTwo';

function SectionFive() {
  return (
    <div className="flex w-full max-w-[960px] flex-col gap-20 p-6">
      <div className="fade-up flex flex-col items-center gap-4 text-2xl font-bold">
        <div className="relative aspect-square w-20">
          <Image
            alt="version control"
            layout="fill"
            className="object-cover"
            src="/version-control.png"
          />
        </div>
        <h1>Data Lake version control</h1>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row-reverse midway:items-center midway:justify-between">
        <SlideableOne />
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-semibold">
            Instant branching of your data lake
          </h1>
          <p className="-mt-3 text-xl font-light">
            Enable teams to develop new pipelines and create new tables, while
            maintaining data integrity and system performance. Move fast, don’t
            break things.
          </p>
        </div>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row midway:items-center midway:justify-between">
        <SlideableTwo />
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-semibold">
            Make everything reproducible
          </h1>
          <p className="-mt-3 text-xl font-light">
            Keep track of all changes in both your data and your code and
            program all your workflows with a few lines of Python: every issue
            can be reproduced, every incident can be rolled back.
          </p>
        </div>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row-reverse midway:items-center midway:justify-between">
        <div className="relative aspect-square w-full rounded-xl bg-gray-200 midway:w-[47%]">
          <Image
            src="/cli-5.avif"
            layout="fill"
            className="object-cover"
            alt="pic"
          />
        </div>
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-bold">Avoid lock-in</h1>
          <p className="-mt-3 text-xl font-light">
            Keep your data in object storage and use Iceberg tables for seamless
            query engine and system integration. Your code is fully abstracted
            from infrastructure, eliminating the need for refactoring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
