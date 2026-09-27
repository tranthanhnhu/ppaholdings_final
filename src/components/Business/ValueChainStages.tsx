"use client";

import Image from "next/image";
import { useState } from "react";

type Stage = { index: string; title: string; companies: string[] };

function StageBlock({
  stage,
  active,
  onEnter,
  onLeave,
}: {
  stage: Stage;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex w-full max-w-[280px] flex-col gap-3 origin-left cursor-default"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <p
        className={`font-[family-name:var(--font-cormorant)] font-light transition-all duration-300 ${
          active
            ? "text-[36px] leading-10 text-paa-accent"
            : "text-[32px] leading-10 text-paa-accent"
        }`}
      >
        {stage.index}
      </p>
      <p
        className={`font-medium tracking-[-0.2px] transition-all duration-300 ${
          active
            ? "text-[24px] leading-8 text-paa-accent lg:text-[26px]"
            : "text-[20px] leading-7 text-paa-text lg:text-[22px]"
        }`}
      >
        {stage.title}
      </p>
      {stage.companies.map((c) => (
        <p
          key={c}
          className={`leading-[26px] transition-all duration-300 ${
            active ? "text-[17px] text-paa-text" : "text-[16px] text-paa-muted"
          }`}
        >
          {c}
        </p>
      ))}
    </div>
  );
}

function HConnector({ muted = false }: { muted?: boolean }) {
  return (
    <div className="mt-5 flex min-w-[48px] flex-1 items-center">
      <div
        className={`h-px flex-1 ${muted ? "bg-paa-muted/50" : "bg-paa-accent"}`}
      />
      <span
        className={`size-2 shrink-0 rounded-full ${
          muted ? "bg-paa-muted" : "bg-paa-accent"
        }`}
      />
    </div>
  );
}

function VConnector() {
  return (
    <div className="flex w-full max-w-[280px] flex-col items-center gap-2 py-3">
      <div className="h-10 w-px bg-paa-accent" />
      <Image
        src="/icons/chain-arrow.svg"
        alt=""
        width={12}
        height={12}
        className="opacity-90"
      />
    </div>
  );
}

export function BusinessValueChainStages({ stages }: { stages: Stage[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col gap-10 lg:hidden">
        {stages.map((s, i) => (
          <StageBlock
            key={s.index}
            stage={s}
            active={hovered === i}
            onEnter={() => setHovered(i)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="flex items-start gap-4">
          <StageBlock
            stage={stages[0]}
            active={hovered === 0}
            onEnter={() => setHovered(0)}
            onLeave={() => setHovered(null)}
          />
          <HConnector />
          <StageBlock
            stage={stages[1]}
            active={hovered === 1}
            onEnter={() => setHovered(1)}
            onLeave={() => setHovered(null)}
          />
        </div>

        <div className="flex justify-end">
          <VConnector />
        </div>

        <div className="flex items-start gap-4">
          <StageBlock
            stage={stages[2]}
            active={hovered === 2}
            onEnter={() => setHovered(2)}
            onLeave={() => setHovered(null)}
          />
          <HConnector muted />
          <StageBlock
            stage={stages[3]}
            active={hovered === 3}
            onEnter={() => setHovered(3)}
            onLeave={() => setHovered(null)}
          />
        </div>

        <div className="flex justify-end">
          <VConnector />
        </div>

        <div className="flex justify-end">
          <StageBlock
            stage={stages[4]}
            active={hovered === 4}
            onEnter={() => setHovered(4)}
            onLeave={() => setHovered(null)}
          />
        </div>
      </div>
    </>
  );
}
