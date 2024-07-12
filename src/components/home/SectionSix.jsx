import Image from 'next/legacy/image';
import React from 'react';

function SectionSix() {
  return (
    <div className="flex w-full max-w-[960px] flex-col gap-20 p-6">
      <div className="fade-up flex flex-col items-center gap-4 text-2xl font-bold">
        <div className="relative aspect-square w-20">
          <Image
            alt="version control"
            layout="fill"
            className="object-cover"
            src="/serverless.png"
          />
        </div>
        <h1>Serverless runtime</h1>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row midway:items-center midway:justify-between">
        <div className="relative aspect-square w-full rounded-xl midway:w-[47%]">
          <Image
            alt="pic"
            src="/cli-7.avif"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-semibold">
            10x better developer experience
          </h1>
          <p className="-mt-3 text-xl font-light">
            Deploy data pipelines in the cloud in seconds from code. No special
            skills required, no need to deal with containerization, compute
            provisioning and cluster configurations ever again. Just SQL and
            Python.
          </p>
        </div>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row-reverse midway:items-center midway:justify-between">
        <div className="relative aspect-square w-full rounded-xl midway:w-[47%]">
          <Image
            alt="pic"
            src="/cli-8.avif"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-semibold">
            No environment management
          </h1>
          <p className="-mt-3 text-xl font-light">
            Define containers and environment requirements directly in code for
            each workload function. Never worry about environment maintenance
            and backward compatibility.
          </p>
        </div>
      </div>
      <div className="fade-up flex flex-col gap-7 midway:flex-row midway:items-center midway:justify-between">
        <div className="relative aspect-square w-full rounded-xl midway:w-[47%]">
          <Image
            alt="pic"
            src="/cli-9.avif"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 midway:w-[47%]">
          <h1 className="text-[19px] font-bold">Interactive SQL analytics</h1>
          <p className="-mt-3 text-xl font-light">
            Explore data and build real-time analytics applications. Use one
            compute engine for for both pipelines and synchronous queries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
