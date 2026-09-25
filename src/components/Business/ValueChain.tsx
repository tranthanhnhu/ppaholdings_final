import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Stage = { index: string; title: string; companies: string[] };

function StageBlock({ stage }: { stage: Stage }) {
  return (
    <div className="flex w-full max-w-[280px] flex-col gap-3">
      <p className="font-[family-name:var(--font-cormorant)] text-[32px] font-light leading-10 text-paa-accent">
        {stage.index}
      </p>
      <p className="text-[20px] font-medium leading-7 tracking-[-0.2px] text-paa-text lg:text-[22px]">
        {stage.title}
      </p>
      {stage.companies.map((c) => (
        <p key={c} className="text-[16px] leading-[26px] text-paa-muted">
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

export async function ValueChain() {
  const t = await getTranslations("business.valueChain");
  const stages = t.raw("stages") as Stage[];

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 lg:py-40 xl:px-[120px]">
      <div className="mb-12 flex max-w-[1320px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.6px] text-paa-text lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px]">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <p className="max-w-[720px] text-[18px] leading-[30px] text-paa-text">
          {t("lead")}
        </p>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-10 lg:hidden">
        {stages.map((s) => (
          <StageBlock key={s.index} stage={s} />
        ))}
      </div>

      {/* Desktop: snake with connectors */}
      <div className="hidden lg:block">
        <div className="flex items-start gap-4">
          <StageBlock stage={stages[0]} />
          <HConnector />
          <StageBlock stage={stages[1]} />
        </div>

        <div className="flex justify-end">
          <VConnector />
        </div>

        <div className="flex items-start gap-4">
          <StageBlock stage={stages[2]} />
          <HConnector muted />
          <StageBlock stage={stages[3]} />
        </div>

        <div className="flex justify-end">
          <VConnector />
        </div>

        <div className="flex justify-end">
          <StageBlock stage={stages[4]} />
        </div>
      </div>

      <div className="mt-12 border-t border-paa-accent pt-8 lg:mt-16">
        <p className="mb-2 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
          {t("reLabel")}
        </p>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("reNote")}</p>
      </div>
    </section>
  );
}
