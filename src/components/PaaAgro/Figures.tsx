import { getTranslations } from "next-intl/server";
import { FiguresList } from "@/components/PaaAgro/FiguresList";

export async function PaaAgroFigures() {
  const t = await getTranslations("paaAgro.figures");
  const items = t.raw("items") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-paa-ink px-8 py-16 lg:px-24 xl:px-[120px] lg:py-20">
      <FiguresList items={items} />
    </section>
  );
}
