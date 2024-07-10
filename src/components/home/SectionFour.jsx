import React from 'react';

function SectionFour() {
  return (
    <div className="fade-up flex max-w-[960px] flex-col gap-12 p-6 text-[26px] midway:text-3xl">
      <div className="mb-2 flex items-center self-center">
        <div className="aspect-square w-6 rounded-full border-2 border-black"></div>
        <div className="h-[2px] w-10 bg-black"></div>
        <div className="flex aspect-square w-6 items-center justify-center rounded-full border-2 border-black">
          <div className="flex aspect-square w-2 rounded-full bg-black"></div>
        </div>
      </div>
      <h1>
        <span className="font-bold">Branch.</span> Create sandboxed branches of
        your data lake to develop pipelines without disrupting your production
        applications.
      </h1>
      <h1>
        <span className="font-bold">Run.</span> Build complex SQL and Python
        pipelines, without dealing with containers, compute clusters and
        infrastructure.
      </h1>
      <h1>
        <span className="font-bold">Query.</span> Run complex queries to explore
        data and power your data applications with the same runtime.
      </h1>
      <h1>
        <span className="font-bold">Merge.</span> Integrate all your data
        workflows with your orchestration and CI/CD.
      </h1>
    </div>
  );
}

export default SectionFour;
