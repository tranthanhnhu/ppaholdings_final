import { getTranslations } from "next-intl/server";

export async function Connecting() {
  const t = await getTranslations("investment.connecting");
  const lines = t.raw("lines") as Array<{ text: string; accent?: boolean }>;

  return (
    <section className="bg-paa-ink px-8 py-20 text-center lg:px-[120px] lg:py-40">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-[28px] font-light leading-9 tracking-[-0.6px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px] ${
              line.accent ? "text-paa-accent" : "text-paa-inverse"
            }`}
          >
            {line.text}
          </p>
        ))}
      </div>
    </section>
  );
}
