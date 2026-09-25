import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Stage = {
  index: string;
  title: string;
  companies: string[];
  current?: boolean;
};

function StageBlock({
  stage,
}: {
  stage: Stage;
}) {
  const tone = stage.current ? "text-paa-accent" : "text-paa-inverse/40";
  return (
    <div className={`flex w-full max-w-[280px] shrink-0 flex-col gap-3 ${tone}`}>
      <p className="font-[family-name:var(--font-cormorant)] text-[28px] font-light leading-10 lg:text-[32px]">
        {stage.index}
      </p>
      <p className="text-[18px] font-medium leading-7 tracking-[-0.2px] lg:text-[22px]">
        {stage.title}
      </p>
      <div className="text-[16px] leading-[26px]">
        {stage.companies.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </div>
  );
}

function HConnector({ accent = true }: { accent?: boolean }) {
  return (
    <div className="mt-5 flex min-w-[48px] flex-1 items-center">
      <div
        className={`h-px flex-1 ${
          accent ? "bg-paa-accent" : "bg-white/25"
        }`}
      />
      <span
        className={`size-2 shrink-0 rounded-full ${
          accent ? "bg-paa-accent" : "bg-white/35"
        }`}
      />
    </div>
  );
}

function VConnector() {
  return (
    <div className="flex w-full max-w-[280px] flex-col items-center gap-2 py-3">
      <div className="h-10 w-px bg-paa-accent" />
      <Image src="/icons/chain-arrow.svg" alt="" width={12} height={12} />
    </div>
  );
}

export async function PaaAgroEcosystem() {
  const t = await getTranslations("paaAgro.ecosystem");
  const stages = t.raw("stages") as Stage[];

  return (
    <section className="bg-paa-ink px-8 py-20 text-paa-inverse lg:px-24 lg:py-40 xl:px-[120px]">
      <div className="mb-12 flex max-w-[880px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[30px]">
          {t("lead")}
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:hidden">
        {stages.map((s) => (
          <StageBlock key={s.index} stage={s} />
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="flex items-start gap-4">
          <StageBlock stage={stages[0]} />
          <HConnector accent />
          <StageBlock stage={stages[1]} />
        </div>
        <div className="flex justify-end">
          <VConnector />
        </div>
        <div className="flex items-start gap-4">
          <StageBlock stage={stages[2]} />
          <HConnector accent={false} />
          <StageBlock stage={stages[3]} />
        </div>
        <div className="flex justify-end">
          <VConnector />
        </div>
        <div className="flex justify-end">
          <StageBlock stage={stages[4]} />
        </div>
      </div>
    </section>
  );
}
